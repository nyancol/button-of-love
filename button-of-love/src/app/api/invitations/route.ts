import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { RelationInvitation, ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
    const session = await verifySession();
    const userId = req.nextUrl.searchParams.get('user_id');
    const type = req.nextUrl.searchParams.get('type'); // 'sent' or 'received'
    
    if (!userId) {
        const error: ApiError = { error: 'Missing user_id' };
        return Response.json(error, { status: 400 });
    }
    
    try {
        let invitations;
        
        if (type === 'sent') {
            invitations = await prisma.relationInvitation.findMany({
                where: { inviter_id: userId },
                include: {
                    invited_user: {
                        select: {
                            id: true,
                            first_name: true,
                            last_name: true,
                            username: true,
                            email: true,
                            birthdate: true,
                        }
                    }
                },
                orderBy: { created_at: 'desc' }
            });
        } else {
            // Default to received invitations
            invitations = await prisma.relationInvitation.findMany({
                where: { invited_user_id: userId },
                include: {
                    inviter: {
                        select: {
                            id: true,
                            first_name: true,
                            last_name: true,
                            username: true,
                            email: true,
                            birthdate: true,
                        }
                    }
                },
                orderBy: { created_at: 'desc' }
            });
        }
        
        // Transform the data to match our TypeScript interfaces
        const transformedInvitations: RelationInvitation[] = invitations.map(invitation => ({
            id: invitation.id,
            inviter_id: invitation.inviter_id,
            invited_user_id: invitation.invited_user_id,
            status: invitation.status,
            created_at: invitation.created_at.toISOString(),
            updated_at: invitation.updated_at.toISOString(),
            inviter: 'inviter' in invitation && invitation.inviter ? {
                ...invitation.inviter,
                birthdate: invitation.inviter.birthdate.toISOString(),
            } : undefined,
            invited_user: 'invited_user' in invitation && invitation.invited_user ? {
                ...invitation.invited_user,
                birthdate: invitation.invited_user.birthdate.toISOString(),
            } : undefined,
        }));
        
        return Response.json(transformedInvitations);
    } catch (error) {
        console.error('Error fetching invitations:', error);
        const apiError: ApiError = { error: 'Failed to fetch invitations' };
        return Response.json(apiError, { status: 500 });
    }
}

export async function POST(req: NextRequest): Promise<Response> {
    const session = await verifySession();
    
    try {
        const body = await req.json();
        const { inviter_id, invited_user_id } = body;
        
        if (!inviter_id || !invited_user_id) {
            const error: ApiError = { error: 'Missing inviter_id or invited_user_id' };
            return Response.json(error, { status: 400 });
        }
        
        // Check if invitation already exists
        const existingInvitation = await prisma.relationInvitation.findFirst({
            where: {
                inviter_id,
                invited_user_id,
                status: 'pending'
            }
        });
        
        if (existingInvitation) {
            const error: ApiError = { error: 'Invitation already exists' };
            return Response.json(error, { status: 409 });
        }
        
        // Check if users are already in a relation together
        const existingRelation = await prisma.relation.findFirst({
            where: {
                AND: [
                    { members: { some: { user_id: inviter_id } } },
                    { members: { some: { user_id: invited_user_id } } }
                ]
            }
        });
        
        if (existingRelation) {
            const error: ApiError = { error: 'Users are already in a relationship' };
            return Response.json(error, { status: 409 });
        }
        
        // Create the invitation
        const invitation = await prisma.relationInvitation.create({
            data: {
                inviter_id,
                invited_user_id,
                status: 'pending'
            },
            include: {
                inviter: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        username: true,
                        email: true,
                        birthdate: true,
                    }
                },
                invited_user: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        username: true,
                        email: true,
                        birthdate: true,
                    }
                }
            }
        });
        
        // Transform the response
        const transformedInvitation: RelationInvitation = {
            id: invitation.id,
            inviter_id: invitation.inviter_id,
            invited_user_id: invitation.invited_user_id,
            status: invitation.status,
            created_at: invitation.created_at.toISOString(),
            updated_at: invitation.updated_at.toISOString(),
            inviter: (invitation as any).inviter ? {
                ...(invitation as any).inviter,
                birthdate: (invitation as any).inviter.birthdate.toISOString(),
            } : undefined,
            invited_user: (invitation as any).invited_user ? {
                ...(invitation as any).invited_user,
                birthdate: (invitation as any).invited_user.birthdate.toISOString(),
            } : undefined,
        };
        
        return Response.json(transformedInvitation, { status: 201 });
    } catch (error) {
        console.error('Error creating invitation:', error);
        const apiError: ApiError = { error: 'Failed to create invitation' };
        return Response.json(apiError, { status: 500 });
    }
}
