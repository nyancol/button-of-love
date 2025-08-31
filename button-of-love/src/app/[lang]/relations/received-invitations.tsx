"use client";
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button } from '@/app/[lang]/ui/button';
import type { PublicUser, RelationInvitation } from '@/app/lib/types';

export default function ReceivedInvitations({ myself, dict }: { myself: PublicUser, dict: any }) {
  const [respondingTo, setRespondingTo] = useState<string | null>(null);
  const { data: invitations, error } = useSWR<RelationInvitation[]>(
    `/api/invitations?user_id=${myself.id}&type=received`,
    (url: string) => fetch(url).then(r => r.json())
  );
  const respondToInvitation = async (invitationId: string, action: 'accept' | 'decline') => {
    setRespondingTo(invitationId);
    try {
      const response = await fetch(`/api/invitations/${invitationId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, user_id: myself.id })
      });
      if (response.ok) {
        mutate(`/api/invitations?user_id=${myself.id}&type=received`);
        mutate(`/api/relations?user_id=${myself.id}`);
      }
    } catch (error) {
      // Optionally handle error
    } finally {
      setRespondingTo(null);
    }
  };
  if (error) {
    return (
      <div className="border border-red-400 border-dashed p-4 bg-red-900 bg-opacity-20">
        <div className="text-red-400">{dict.relation.error.failedToLoad}</div>
      </div>
    );
  }
  const pendingInvitations = invitations?.filter(inv => inv.status === 'pending') || [];
  if (pendingInvitations.length === 0) {
    return (
      <div className="border border-blue-400 border-dashed p-6 bg-gray-900 bg-opacity-20">
        <h2 className="text-yellow-400 text-lg mb-4">
          {dict.relationManager.receivedInvitationsTitle}
        </h2>
        <div className="text-blue-400 ascii-art">
          {dict.relationManager.noPendingInvitations}
        </div>
      </div>
    );
  }
  return (
    <div className="border border-blue-400 border-dashed p-6 bg-gray-900 bg-opacity-20">
      <h2 className="text-yellow-400 text-lg mb-4">
        {dict.relationManager.receivedInvitationsTitleCount.replace('{count}', pendingInvitations.length)}
      </h2>
      <div className="space-y-4">
        {pendingInvitations.map((invitation) => (
          <div key={invitation.id} className="border border-blue-600 p-4 bg-black">
            <div className="text-blue-400 mb-3">
              <div className="text-lg font-bold">
                {dict.relationManager.fromUser.replace('{username}', invitation.inviter?.username || dict.relationManager.unknownUser)}
              </div>
              <div className="text-sm">
                {invitation.inviter?.first_name} {invitation.inviter?.last_name}
              </div>
              <div className="text-xs text-blue-600 mt-1">
                {dict.relationManager.sentDate.replace('{date}', new Date(invitation.created_at).toLocaleDateString())}
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="love" 
                onClick={() => respondToInvitation(invitation.id, 'accept')}
                disabled={respondingTo === invitation.id}
                className="flex-1"
              >
                {respondingTo === invitation.id ? dict.relationManager.processing : dict.relationManager.accept}
              </Button>
              <Button 
                variant="ascii" 
                onClick={() => respondToInvitation(invitation.id, 'decline')}
                disabled={respondingTo === invitation.id}
                className="flex-1 border-red-400 text-red-400 hover:bg-red-900"
              >
                {respondingTo === invitation.id ? dict.relationManager.processing : dict.relationManager.decline}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
