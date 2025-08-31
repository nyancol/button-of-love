import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { PublicUser, ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
  const session = await verifySession();
  if (!session) {
    const error: ApiError = { error: 'Unauthorized' };
    return Response.json(error, { status: 403 });
  }
  
  const userId = req.nextUrl.searchParams.get('user_id');
  if (!userId) {
    const error: ApiError = { error: 'Missing user_id' };
    return Response.json(error, { status: 400 });
  }
  
  try {
    const user = await prisma.user.findUnique({ 
      where: { id: userId },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        username: true,
        email: true,
        birthdate: true,
        // Exclude password for security
      }
    });
    
    if (!user) {
      const error: ApiError = { error: 'User not found' };
      return Response.json(error, { status: 404 });
    }
    
    const publicUser: PublicUser = {
      ...user,
      birthdate: user.birthdate.toISOString(),
    };
    
    return Response.json(publicUser);
  } catch (error) {
    const apiError: ApiError = { error: 'Failed to fetch user' };
    return Response.json(apiError, { status: 500 });
  }
}