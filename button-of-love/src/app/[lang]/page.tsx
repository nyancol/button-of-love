import { getDictionary } from './dictionaries';
import WelcomePageClient from './welcome-page-client';

export default async function WelcomePageServer({
  params
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <WelcomePageClient dict={dict} />;
}