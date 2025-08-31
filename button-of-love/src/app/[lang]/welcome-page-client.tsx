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
      <div className="max-w-4xl mx-auto mb-12">
        <div className="border border-green-400 border-dashed p-6 mb-6 bg-gray-900 bg-opacity-20">
          <h2 className="text-lg mb-4">
            {dict.systemDescription.title}
          </h2>
          <div className="space-y-2 text-sm">
            {dict.systemDescription.items.map((item: string, i: number) => <p key={i}>{item}</p>)}
          </div>
        </div>

        <div className="border border-green-400 border-dashed p-6 mb-6 bg-gray-900 bg-opacity-20">
          <h2 className="text-lg mb-4">
            {dict.howToPlay.title}
          </h2>
          <div className="space-y-2 text-sm">
            {dict.howToPlay.items.map((item: string, i: number) => <p key={i}>{item}</p>)}
          </div>
        </div>

        <div className="border border-green-400 border-dashed p-6 mb-6 bg-gray-900 bg-opacity-20">
          <h2 className="text-lg mb-4">
            {dict.features.title}
          </h2>
          <div className="space-y-2 text-sm">
            {dict.features.items.map((item: string, i: number) => <p key={i}>{item}</p>)}
          </div>
        </div>
      </div>

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