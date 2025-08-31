'use client';

import { useState, Suspense } from 'react';
import { Button } from '@/app/[lang]/ui/button';
import LoginForm from '@/app/[lang]/login/login-form';

type WelcomePageClientProps = {
  dict: any;
};

export default function WelcomePageClient({ dict }: WelcomePageClientProps) {
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return (
      <div className="min-h-screen bg-black font-mono">
        <div className="p-8">
          <Button 
            variant="ascii" 
            onClick={() => setShowLogin(false)}
            className="mb-6"
          >
            {dict.welcome.back}
          </Button>
          <Suspense fallback={
            <div className="text-center">
              <div className="ascii-art">
                {dict.loading.loginTerminal}
              </div>
            </div>
          }>
            <LoginForm dict={dict} />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-mono p-8">
      {/* ASCII Art Welcome Header */}
      <div className="text-center mb-12">
        <div className="ascii-art mb-8">
          {dict.welcome.asciiArt}
        </div>
        <div className="text-xl mb-4 cursor-blink">
          {dict.welcome.title}
        </div>
        <div className="mb-8">
          {dict.welcome.version}
        </div>
      </div>

      {/* Game Description */}

      {/* Action Buttons */}
      <div className="text-center mb-12">
        <div className="space-y-4">
          <Button 
            variant="love" 
            onClick={() => setShowLogin(true)}
            className="text-xl px-12 py-4"
          >
            {dict.action.enter}
          </Button>
          <div className="text-sm">
            {dict.action.hint}
          </div>
        </div>
      </div>

      {/* ASCII Footer */}
      <div className="text-center">
        <div className="ascii-art">
          {dict.footer}
        </div>
      </div>
    </div>
  );
}