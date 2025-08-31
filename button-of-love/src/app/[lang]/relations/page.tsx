/**
 * Relationship Manager Page
 *
 * This is the main hub where users can:
 * - View their existing relationships
 * - Navigate to specific relationship love counters
 * 
 * Note: The current schema is simplified. Invitation system would need
 * schema updates to be fully functional.
 */
import { getDictionary } from '../dictionaries';
import RelationshipManagerClient from './relationship-manager-client';

export default async function RelationshipManagerServer({ params }: { params: Promise<{ lang: 'en' | 'fr' }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return <RelationshipManagerClient dict={dict} />;
}