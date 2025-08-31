'use client';

import { Button } from '@/app/[lang]/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

type LoginFormProps = {
  dict: any;
};

export default function LoginForm({ dict }: LoginFormProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/relations';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="max-w-md mx-auto">
      {/* Login Terminal Header */}
      <div className="ascii-art text-center mb-8 text-green-400">
        {dict.login.header}
      </div>

      <div className="border border-green-400 border-dashed p-6 mb-4">
        <h1 className="text-lg mb-6 text-yellow-400 cursor-blink">
          {dict.login.prompt}
        </h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-green-400 mb-2" htmlFor="username">
              {dict.login.usernameLabel}
            </label>
            <input
              className="w-full bg-black text-green-400 border border-green-400 px-3 py-2 font-mono
                        focus:outline-none focus:border-yellow-400 focus:bg-gray-900"
              id="username"
              type="text"
              name="username"
              placeholder={dict.login.usernamePlaceholder}
              required
            />
          </div>
          <div>
            <label className="block text-green-400 mb-2" htmlFor="password">
              {dict.login.passwordLabel}
            </label>
            <input
              className="w-full bg-black text-green-400 border border-green-400 px-3 py-2 font-mono
                        focus:outline-none focus:border-yellow-400 focus:bg-gray-900"
              id="password"
              type="password"
              name="password"
              placeholder={dict.login.passwordPlaceholder}
              required
              minLength={6}
            />
          </div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <Button 
            variant="ascii" 
            className="w-full mt-6" 
            aria-disabled={isPending}
            disabled={isPending}
          >
            {isPending ? dict.login.authenticating : dict.login.loginButton}
          </Button>
        </form>
      </div>

      {/* Error Display */}
      {errorMessage && (
        <div className="border border-red-500 border-dashed p-4 bg-red-900 bg-opacity-20 mb-4">
          <div className="ascii-art text-red-400">
            {dict.login.errorPrefix}{errorMessage}
          </div>
        </div>
      )}

      {/* ASCII Status */}
      <div className="text-center">
        <div className="ascii-art text-green-600">
          {dict.login.status}
        </div>
      </div>
    </div>
  );
}