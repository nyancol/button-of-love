import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { Relation, ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
    const session = await verifySession();
    const relationId = req.nextUrl.searchParams.get('relation_id');
    const userId = req.nextUrl.searchParams.get('user_id');
    
    if (!userId) {
        const error: ApiError = { error: 'Missing user_id' };
        return Response.json(error, { status: 400 });
    }
    
    // If no relation ID is provided, return all relations where the user is a member
    if (!relationId) {
        const relations = await prisma.relation.findMany({
            where: {
                members: {
                    some: { user_id: userId },
                },
            },
            include: { 
                members: {
                    include: {
                        user: {
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
                }, 
                love_counters: {
                    include: {
                        user: {
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
                }, 
                relation_invitation: true 
            },
        });
        
        if (relations.length === 0) {
            // Return empty array instead of error for consistency
            return Response.json([]);
        }
        
        // Transform the data to match our TypeScript interfaces
        const transformedRelations: Relation[] = relations.map(relation => ({
            id: relation.id,
            created_at: relation.created_at.toISOString(),
            relation_invitation_id: relation.relation_invitation_id,
            members: relation.members.map(member => ({
                relation_id: member.relation_id,
                user_id: member.user_id,
                user: member.user ? {
                    ...member.user,
                    birthdate: member.user.birthdate.toISOString(),
                } : undefined,
            })),
            love_counters: relation.love_counters.map(counter => ({
                relation_id: counter.relation_id,
                from_user_id: counter.from_user_id,
                count: counter.count,
                last_loveu_sent: counter.last_loveu_sent.toISOString(),
                user: counter.user ? {
                    ...counter.user,
                    birthdate: counter.user.birthdate.toISOString(),
                } : undefined,
            })),
            relation_invitation: relation.relation_invitation
                ? {
                    ...relation.relation_invitation,
                    created_at: relation.relation_invitation.created_at.toISOString(),
                    updated_at: relation.relation_invitation.updated_at.toISOString(),
                }
                : null,
        }));
        
        return Response.json(transformedRelations);
    }
    
    // If relationId is provided, return that relation if user is a member
    const relation = await prisma.relation.findUnique({
        where: { id: relationId },
        include: { 
            members: {
                include: {
                    user: {
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
            }, 
            love_counters: {
                include: {
                    user: {
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
            }, 
            relation_invitation: true 
        },
    });
    
    if (!relation) {
        const error: ApiError = { error: 'Relation not found' };
        return Response.json(error, { status: 404 });
    }
    
    const isMember = relation.members.some(m => m.user_id === userId);
    if (!isMember) {
        const error: ApiError = { error: 'Unauthorized' };
        return Response.json(error, { status: 403 });
    }
    
    const transformedRelation: Relation = {
        id: relation.id,
        created_at: relation.created_at.toISOString(),
        relation_invitation_id: relation.relation_invitation_id,
        members: relation.members.map(member => ({
            relation_id: member.relation_id,
            user_id: member.user_id,
            user: member.user ? {
                ...member.user,
                birthdate: member.user.birthdate.toISOString(),
            } : undefined,
        })),
        love_counters: relation.love_counters.map(counter => ({
            relation_id: counter.relation_id,
            from_user_id: counter.from_user_id,
            count: counter.count,
            last_loveu_sent: counter.last_loveu_sent.toISOString(),
            user: counter.user ? {
                ...counter.user,
                birthdate: counter.user.birthdate.toISOString(),
            } : undefined,
        })),
        relation_invitation: relation.relation_invitation
            ? {
                ...relation.relation_invitation,
                created_at: relation.relation_invitation.created_at.toISOString(),
                updated_at: relation.relation_invitation.updated_at.toISOString(),
            }
            : null,
    };
    
    return Response.json([transformedRelation]);
}