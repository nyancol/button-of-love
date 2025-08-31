"use client";

import React, { useState, use } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { Button } from '@/app/[lang]/ui/button';
import type { PublicUser, Relation as RelationType, RelationMember, LoveCounter } from '@/app/lib/types';

function LoveCounter({ lover, lovee, counter, dict }: { lover: string, lovee: string, counter: number, dict: any }) {
    return (
        <div className="border border-green-400 border-dashed p-4 mb-4 bg-gray-900 bg-opacity-20">
            <div className="ascii-art text-green-400">
                <div className="text-yellow-400 mb-2">
                    {dict.relation.loveCounter.loves.replace('{lover}', lover).replace('{lovee}', lovee)}
                </div>
                <div className="text-red-400 text-xl">
                    {counter}
                </div>
                <div className="text-yellow-400 mb-2">
                    {dict.relation.loveCounter.manyTimes}
                </div>
                {counter === 0 && (
                    <div className="text-gray-500 text-sm mt-1">
                        {dict.relation.loveCounter.noLove}
                    </div>
                )}
            </div>
        </div>
    );
}

function LoveButton({ relation, myself, setMyCount, dict }: { relation: RelationType; myself: PublicUser; setMyCount: React.Dispatch<React.SetStateAction<number>>; dict: any }) {
    const handleLove = async () => {
        setMyCount(c => c + 1); // Optimistically update UI
        await fetch('/api/relations/love-counters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ relation_id: relation.id, user_id: myself.id }),
        });
    };
    return (
        <div className="text-center">
            <Button 
                variant="love" 
                onClick={handleLove}
                className="text-lg px-8 py-4"
            >
                {dict.relation.loveButton.sendLove}
            </Button>
        </div>
    );
}

export default function RelationPageClient({ relationId, dict }: { relationId: string, dict: any }) {
    // Fetch myself
    const { data: myself, error: myselfError } = useSWR<PublicUser>('/api/users/myself', (url: string) => fetch(url).then(r => r.json()));
    // Fetch specific relation
    const { data: relationArr, error: relationError } = useSWR<RelationType[]>(
        myself?.id ? `/api/relations?user_id=${myself.id}` : null,
        (url: string) => fetch(url).then(r => r.json())
    );
    // Find the specific relation by ID
    const relation = relationArr?.find(r => r.id === relationId);
    // Get both member IDs from relation.members
    const memberIds = relation?.members?.map((m: RelationMember) => m.user_id) || [];
    // Find partnerId (the other member)
    const partnerId = memberIds.length === 2 ? memberIds.find((id: string) => id !== myself?.id) : null;
    // Fetch partner user
    const { data: partner, error: partnerError } = useSWR<PublicUser>(
        partnerId ? `/api/users?user_id=${partnerId}` : null,
        (url: string) => fetch(url).then(r => r.json())
    );
    const [myCount, setMyCount] = useState(0);
    const [partnerCount, setPartnerCount] = useState(0);
    React.useEffect(() => {
        if (relation && myself && partner) {
            const myCounter = relation.love_counters.find((c: LoveCounter) => c.from_user_id === myself.id);
            const partnerCounter = relation.love_counters.find((c: LoveCounter) => c.from_user_id === partner.id);
            setMyCount(myCounter?.count ?? 0);
            setPartnerCount(partnerCounter?.count ?? 0);
        }
    }, [relation, myself, partner]);
    if (myselfError || relationError || partnerError) {
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
    if (!myself || !relation || !partner) {
        return (
            <div className="min-h-screen bg-black text-green-400 font-mono p-8">
                <div className="text-center">
                    <div className="ascii-art text-yellow-400 cursor-blink">
                        {dict.relation.loading.loveTerminal}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-black text-green-400 font-mono p-8">
            {/* Navigation */}
            <div className="mb-6">
                <Link href="/relations">
                    <Button variant="ascii" className="mb-4">
                        {dict.relation.navigation.backToManager}
                    </Button>
                </Link>
            </div>
            {/* ASCII Art Header */}
            <div className="text-center mb-8">
                <div className="ascii-art text-green-400 mb-4">
                    {dict.relation.header}
                </div>
            </div>
            {/* Love Counters Display */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <LoveCounter 
                    lover={String(myself.first_name)} 
                    lovee={String(partner.first_name)} 
                    counter={myCount} 
                    dict={dict}
                />
                <LoveCounter 
                    lover={String(partner.first_name)} 
                    lovee={String(myself.first_name)} 
                    counter={partnerCount} 
                    dict={dict}
                />
            </div>
            {/* Love Button */}
            <LoveButton relation={relation} myself={myself} setMyCount={setMyCount} dict={dict} />
        </div>
    );
}
