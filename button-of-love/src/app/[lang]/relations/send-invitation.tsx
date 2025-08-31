"use client";
import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button } from '@/app/[lang]/ui/button';
import type { PublicUser } from '@/app/lib/types';

export default function SendInvitation({ myself, dict }: { myself: PublicUser, dict: any }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { data: searchResults } = useSWR<PublicUser[]>(
    searchQuery.length >= 2 ? `/api/users/search?q=${encodeURIComponent(searchQuery)}&exclude_user_id=${myself.id}` : null,
    (url: string) => fetch(url).then(r => r.json())
  );
  const sendInvitation = async (targetUserId: string) => {
    setIsSending(true);
    try {
      const response = await fetch('/api/invitations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inviter_id: myself.id, invited_user_id: targetUserId })
      });
      if (response.ok) {
        setSearchQuery('');
        mutate(`/api/invitations?user_id=${myself.id}&type=sent`);
        mutate(`/api/invitations?user_id=${myself.id}&type=received`);
      }
    } finally {
      setIsSending(false);
    }
  };
  return (
    <div className="border border-green-400 border-dashed p-6 bg-gray-900 bg-opacity-20">
      <h2 className="text-yellow-400 text-lg mb-4">
        {dict.relationManager.sendInvitationTitle}
      </h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder={dict.relationManager.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border border-green-400 text-green-400 p-2 font-mono focus:outline-none focus:border-yellow-400"
          />
        </div>
        {searchResults && searchResults.length > 0 && (
          <div className="border border-green-600 bg-black p-4 max-h-48 overflow-y-auto">
            {searchResults.map((user) => (
              <div key={user.id} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                <div className="text-green-400">
                  <div className="font-bold">{user.username}</div>
                  <div className="text-sm text-green-600">{user.first_name} {user.last_name}</div>
                </div>
                <Button 
                  variant="love" 
                  onClick={() => sendInvitation(user.id)}
                  disabled={isSending}
                >
                  {isSending ? dict.relationManager.sending : dict.relationManager.invite}
                </Button>
              </div>
            ))}
          </div>
        )}
        {searchQuery.length >= 2 && (!searchResults || searchResults.length === 0) && (
          <div className="text-green-600 text-center py-4">
            {dict.relationManager.noUsersFound.replace('{query}', searchQuery)}
          </div>
        )}
      </div>
    </div>
  );
}
