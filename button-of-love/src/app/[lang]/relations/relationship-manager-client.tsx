"use client";

import React from 'react';
import useSWR from 'swr';
import ReceivedInvitations from './received-invitations';
import SendInvitation from './send-invitation';
import ExistingRelationships from './existing-relationships';
import type { PublicUser } from '@/app/lib/types';

export default function RelationshipManagerClient({ dict }: { dict: any }) {
  // ...existing code for fetching myself, error/loading, etc...
  const { data: myself, error: myselfError } = useSWR<PublicUser>(
    '/api/users/myself',
    (url: string) => fetch(url).then(r => r.json())
  );

  // Error state
  if (myselfError) {
    return (
      <div className="min-h-screen bg-black text-red-400 font-mono p-8">
        <div className="border border-red-400 border-dashed p-6 bg-red-900 bg-opacity-20">
          <div className="ascii-art">
            {dict.relation.error.failedToLoad}
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (!myself) {
    return (
      <div className="min-h-screen bg-black font-mono p-8">
        <div className="text-center">
          <div className="ascii-art cursor-blink">
            {dict.relation.loading.loveTerminal}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-mono p-8">
      {/* ASCII Art Header */}
      <div className="text-center mb-8">
        <div className="ascii-art mb-4">
          {dict.header.replace('{firstName}', myself.first_name)}
        </div>
        <div className="text-lg cursor-blink">
          {dict.relationManager.pageSubtitle}
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        <ReceivedInvitations myself={myself} dict={dict} />
        <SendInvitation myself={myself} dict={dict} />
        <ExistingRelationships myself={myself} dict={dict} />
      </div>
    </div>
  );
}
