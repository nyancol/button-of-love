"use client";
import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { Button } from '@/app/[lang]/ui/button';
import type { PublicUser, Relation as RelationType, RelationMember } from '@/app/lib/types';

export default function ExistingRelationships({ myself, dict }: { myself: PublicUser, dict: any }) {
  const { data: relations, error } = useSWR<RelationType[]>(
    `/api/relations?user_id=${myself.id}`,
    (url: string) => fetch(url).then(async r => {
      if (!r.ok) throw new Error(`Failed to fetch relations: ${r.status}`);
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      return Array.isArray(data) ? data : [];
    })
  );
  if (error) {
    return (
      <div className="border border-red-400 border-dashed p-4 bg-red-900 bg-opacity-20">
        <div className="text-red-400">{dict.relation.error.failedToLoad}</div>
      </div>
    );
  }
  const relationsList = Array.isArray(relations) ? relations : [];
  if (!relations || relationsList.length === 0) {
    return (
      <div className="border border-green-400 border-dashed p-6 bg-gray-900 bg-opacity-20">
        <h2 className="text-yellow-400 text-lg mb-4">
          {dict.relationManager.yourRelationshipsTitle}
        </h2>
        <div className="text-green-600 ascii-art">
          {dict.relationManager.noRelationships}
        </div>
      </div>
    );
  }
  // Defensive check for debugging
  if (!dict.relationManager || !dict.relationManager.yourRelationshipsTitleCount) {
    console.error('Missing dict.relationManager or dict.relationManager.yourRelationshipsTitleCount:', dict.relationManager);
    return (
      <div className="border border-red-400 border-dashed p-4 bg-red-900 bg-opacity-20">
        <div className="text-red-400">
          Dictionary error: Missing relationManager.yourRelationshipsTitleCount
        </div>
      </div>
    );
  }
  return (
    <div className="border border-green-400 border-dashed p-6 bg-gray-900 bg-opacity-20">
      <h2 className="text-yellow-400 text-lg mb-4">
        {dict.relationManager.yourRelationshipsTitleCount.replace('{count}', relationsList.length)}
      </h2>
      <div className="space-y-4">
        {relationsList.map((relation) => {
          const memberIds = relation.members?.map((m: RelationMember) => m.user_id) || [];
          const partnerId = memberIds.find((id: string) => id !== myself.id);
          const partnerMember = relation.members?.find((m: RelationMember) => m.user_id === partnerId);
          const myLoveCount = relation.love_counters?.find(lc => lc.from_user_id === myself.id)?.count || 0;
          const partnerLoveCount = relation.love_counters?.find(lc => lc.from_user_id === partnerId)?.count || 0;
          const totalLove = myLoveCount + partnerLoveCount;
          return (
            <div key={relation.id} className="border border-green-600 border-dashed p-4 bg-black bg-opacity-40">
              <div className="ascii-art text-green-400 mb-3">
                {dict.relationManager.relationshipSummary
                  .replace('{partner}', partnerMember?.user?.first_name || dict.relationManager.unknownUser)
                  .replace('{id}', relation.id.slice(0, 8))
                  .replace('{myLove}', myLoveCount)
                  .replace('{partnerLove}', partnerLoveCount)
                  .replace('{totalLove}', totalLove)
                  .replace('{level}', (Math.floor(totalLove / 10) + 1).toString())}
              </div>
              <Link href={`/relations/${relation.id}`}>
                <Button variant="love" className="w-full">
                  {dict.relationManager.enterLoveTerminal}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
