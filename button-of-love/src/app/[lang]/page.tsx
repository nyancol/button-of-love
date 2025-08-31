import { getDictionary } from './dictionaries';
import WelcomePageClient from './welcome-page-client';

export default async function WelcomePageServer({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang === 'en' ? 'en' : 'fr');
  return <WelcomePageClient dict={dict} />;
}