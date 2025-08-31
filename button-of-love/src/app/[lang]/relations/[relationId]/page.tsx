/**
 * Individual Relation Page
 *
 * This page displays the love counter interface for a specific relationship.
 * Users can increment their love counter by pressing the "SEND LOVE" button.
 */
import { getDictionary } from '@/app/[lang]/dictionaries';
import RelationPageClient from './relation-page-client';

export default async function RelationPageServer({ params }: { params: Promise<{ lang: string, relationId: string }> }) {
    const { lang, relationId } = await params;
    const dict = await getDictionary(lang === 'en' ? 'en' : 'fr');
    return <RelationPageClient relationId={relationId} dict={dict} />;
}
