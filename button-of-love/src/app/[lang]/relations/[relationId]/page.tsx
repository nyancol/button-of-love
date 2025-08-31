/**
 * Individual Relation Page
 *
 * This page displays the love counter interface for a specific relationship.
 * Users can increment their love counter by pressing the "SEND LOVE" button.
 */
import { getDictionary } from '@/app/[lang]/dictionaries';
import RelationPageClient from './relation-page-client';

export default async function RelationPageServer({ params }: { params: Promise<{ lang: 'en' | 'fr', relationId: string }> }) {
    const { lang, relationId } = await params;
    const dict = await getDictionary(lang);
    return <RelationPageClient relationId={relationId} dict={dict} />;
}
