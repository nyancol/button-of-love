import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { RelationInvitation, ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
    const session = await verifySession();
    const { id: invitationId } = await params;
    
    try {
        const body = await req.json();
        const { action, user_id } = body; // action: 'accept' or 'decline'
        
        if (!action || !user_id) {
            const error: ApiError = { error: 'Missing action or user_id' };
            return Response.json(error, { status: 400 });
        }
        
        if (!['accept', 'decline'].includes(action)) {
            const error: ApiError = { error: 'Invalid action. Must be "accept" or "decline"' };
            return Response.json(error, { status: 400 });
        }
        
        // Get the invitation and verify the user can respond to it
        const invitation = await prisma.relationInvitation.findUnique({
            where: { id: invitationId },
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
        
        if (!invitation) {
            const error: ApiError = { error: 'Invitation not found' };
            return Response.json(error, { status: 404 });
        }
        
        if (invitation.invited_user_id !== user_id) {
            const error: ApiError = { error: 'Not authorized to respond to this invitation' };
            return Response.json(error, { status: 403 });
        }
        
        if (invitation.status !== 'pending') {
            const error: ApiError = { error: 'Invitation has already been responded to' };
            return Response.json(error, { status: 409 });
        }
        
        // Update the invitation status
        const updatedInvitation = await prisma.relationInvitation.update({
            where: { id: invitationId },
            data: { 
                status: action === 'accept' ? 'accepted' : 'declined' 
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
        
        // If accepted, create the relation
        if (action === 'accept') {
            const relation = await prisma.relation.create({
                data: {
                    relation_invitation_id: invitationId,
                    members: {
                        createMany: {
                            data: [
                                { user_id: invitation.inviter_id },
                                { user_id: invitation.invited_user_id }
                            ]
                        }
                    },
                    love_counters: {
                        createMany: {
                            data: [
                                { 
                                    from_user_id: invitation.inviter_id,
                                    count: 0,
                                    last_loveu_sent: new Date()
                                },
                                { 
                                    from_user_id: invitation.invited_user_id,
                                    count: 0,
                                    last_loveu_sent: new Date()
                                }
                            ]
                        }
                    }
                }
            });
        }
        
        // Transform the response
        const transformedInvitation: RelationInvitation = {
            id: updatedInvitation.id,
            inviter_id: updatedInvitation.inviter_id,
            invited_user_id: updatedInvitation.invited_user_id,
            status: updatedInvitation.status,
            created_at: updatedInvitation.created_at.toISOString(),
            updated_at: updatedInvitation.updated_at.toISOString(),
            inviter: updatedInvitation.inviter ? {
                ...updatedInvitation.inviter,
                birthdate: updatedInvitation.inviter.birthdate.toISOString(),
            } : undefined,
            invited_user: updatedInvitation.invited_user ? {
                ...updatedInvitation.invited_user,
                birthdate: updatedInvitation.invited_user.birthdate.toISOString(),
            } : undefined,
        };
        
        return Response.json(transformedInvitation);
    } catch (error) {
        console.error('Error responding to invitation:', error);
        const apiError: ApiError = { error: 'Failed to respond to invitation' };
        return Response.json(apiError, { status: 500 });
    }
}
