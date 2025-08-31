import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
  const relationId = req.nextUrl.searchParams.get('relation_id');
  const userId = req.nextUrl.searchParams.get('user_id');
  
  if (!relationId) {
    const error: ApiError = { error: 'Missing relation_id' };
    return Response.json(error, { status: 400 });
  }
  if (!userId) {
    const error: ApiError = { error: 'Missing user_id' };
    return Response.json(error, { status: 400 });
  }
  
  const session = await verifySession();
  if (!session) {
    const error: ApiError = { error: 'Unauthorized' };
    return Response.json(error, { status: 403 });
  }
  
  // Check if user is a member of the relation
  const isMember = await prisma.relationMember.findFirst({ 
    where: { relation_id: relationId, user_id: session.userId } 
  });
  if (!isMember) {
    const error: ApiError = { error: 'Forbidden' };
    return Response.json(error, { status: 403 });
  }
  
  try {
    const loveCounter = await prisma.loveCounter.findUnique({ 
      where: { 
        relation_id_from_user_id: { 
          relation_id: relationId, 
          from_user_id: userId 
        } 
      } 
    });
    
    if (!loveCounter) {
      const error: ApiError = { error: 'LoveCounter not found' };
      return Response.json(error, { status: 404 });
    }
    
    return Response.json({
      relation_id: relationId,
      user_id: userId,
      count: loveCounter.count
    });
  } catch (error) {
    const apiError: ApiError = { error: 'Failed to fetch love counter' };
    return Response.json(apiError, { status: 500 });
  }
}

interface LoveCounterRequest {
  relation_id: string;
  user_id: string;
}

export async function POST(req: NextRequest): Promise<Response> {
  const body: LoveCounterRequest = await req.json();
  const { relation_id, user_id } = body;
  
  if (!user_id) {
    const error: ApiError = { error: 'Missing or invalid user_id' };
    return Response.json(error, { status: 400 });
  }
  if (!relation_id) {
    const error: ApiError = { error: 'Missing or invalid relation_id' };
    return Response.json(error, { status: 400 });
  }
  
  const session = await verifySession();
  if (session.userId !== user_id) {
    const error: ApiError = { error: 'Unauthorized' };
    return Response.json(error, { status: 403 });
  }
  
  try {
    const updated = await prisma.loveCounter.update({
      where: { 
        relation_id_from_user_id: { 
          relation_id, 
          from_user_id: user_id 
        } 
      },
      data: { 
        count: { increment: 1 }, 
        last_loveu_sent: new Date() 
      },
    });
    
    return Response.json({ count: updated.count });
  } catch (error) {
    const apiError: ApiError = { error: 'Failed to update love counter' };
    return Response.json(apiError, { status: 500 });
  }
}