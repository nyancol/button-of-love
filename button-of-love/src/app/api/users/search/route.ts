import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { PublicUser, ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
    const session = await verifySession();
    const query = req.nextUrl.searchParams.get('q');
    const excludeUserId = req.nextUrl.searchParams.get('exclude_user_id');
    
    if (!query || query.length < 2) {
        const error: ApiError = { error: 'Query must be at least 2 characters long' };
        return Response.json(error, { status: 400 });
    }
    
    try {
        const users = await prisma.user.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            { username: { contains: query, mode: 'insensitive' } },
                            { first_name: { contains: query, mode: 'insensitive' } },
                            { last_name: { contains: query, mode: 'insensitive' } },
                            { email: { contains: query, mode: 'insensitive' } }
                        ]
                    },
                    excludeUserId ? { id: { not: excludeUserId } } : {}
                ]
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                username: true,
                email: true,
                birthdate: true,
            },
            take: 10 // Limit results to prevent overwhelming responses
        });
        
        // Transform the data to match our TypeScript interfaces
        const transformedUsers: PublicUser[] = users.map(user => ({
            ...user,
            birthdate: user.birthdate.toISOString(),
        }));
        
        return Response.json(transformedUsers);
    } catch (error) {
        console.error('Error searching users:', error);
        const apiError: ApiError = { error: 'Failed to search users' };
        return Response.json(apiError, { status: 500 });
    }
}
