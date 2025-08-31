import LoginForm from '@/app/[lang]/login/login-form';
import { getDictionary } from '../dictionaries';
import { Suspense } from 'react';

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang === 'en' ? 'en' : 'fr');
    
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold">
                        Login
                    </h2>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <LoginForm dict={dict} />
                </Suspense>
            </div>
        </div>
    );
}