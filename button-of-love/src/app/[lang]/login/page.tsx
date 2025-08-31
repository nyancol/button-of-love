import LoginForm from '@/app/[lang]/login/login-form';
import { getDictionary } from '../dictionaries';

export default async function LoginPage({
  params
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <LoginForm dict={dict} />;
}