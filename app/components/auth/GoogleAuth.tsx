'use client';

import { signIn, signOut } from 'next-auth/react';

// ログインボタン
export const LoginButton = () => {
  return (
    <button
      className="border-2 border-gray-600 p-2 rounded-md text-md hover:bg-gray-300 text-gray-800"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

// ログアウトボタン
export const LogoutButton = () => {
  return (
    <button
      className="border-2 border-gray-600 p-2 rounded-md text-md hover:bg-gray-300 text-gray-800"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
