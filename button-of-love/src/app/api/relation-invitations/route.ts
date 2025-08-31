import { NextRequest } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';
import { verifySession } from '@/app/lib/dal';
import type { ApiError } from '@/app/lib/types';

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<Response> {
  const session = await verifySession();
  if (!session) {
    const error: ApiError = { error: 'Unauthorized' };
    return Response.json(error, { status: 403 });
  }

  try {
    // For now, return all pending invitations
    // In a real implementation, this would be filtered by user
    const invitations = await prisma.relationInvitation.findMany({
      where: {
        status: 'pending'
      },
      include: { 
        relation: true 
      }
    });

    return Response.json(invitations);
  } catch (error) {
    const apiError: ApiError = { error: 'Failed to fetch invitations' };
    return Response.json(apiError, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  const session = await verifySession();
  if (!session) {
    const error: ApiError = { error: 'Unauthorized' };
    return Response.json(error, { status: 403 });
  }

  try {
    const body = await req.json();
    const { status = 'pending', inviter, invited_user } = body;

    if (!inviter || !invited_user) {
      const apiError: ApiError = { error: 'Missing inviter or invited_user' };
      return Response.json(apiError, { status: 400 });
    }

    const invitation = await prisma.relationInvitation.create({
      data: {
        status,
        inviter,
        invited_user
      }
    });

    return Response.json(invitation);
  } catch (error) {
    console.error('Failed to create invitation:', error);
    const apiError: ApiError = { error: 'Failed to create invitation' };
    return Response.json(apiError, { status: 500 });
  }
}
