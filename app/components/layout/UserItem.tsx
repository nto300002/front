import React from 'react';
import Provider from '../auth/Provider';
import { getServerSession } from 'next-auth';
import { options } from '@/app/Authoptions';
import { LoginButton, LogoutButton } from '../auth/GoogleAuth';
import Link from 'next/link';

const UserItem = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <Provider>
        {session?.user ? (
          <ul className="text-sm flex items-center">
            <li className="text-gray-800">
              ようこそ、{session.user && session.user.email}さん
            </li>
            <li className="opacity-0">| | |</li>
            <li className="border-2 border-gray-600 p-2 rounded-md hover:bg-gray-300 text-md text-gray-800">
              <Link href="/history">
                <p>履歴</p>
              </Link>
            </li>
            <li className="opacity-0">| | |</li>
            <li className="">
              <LogoutButton />
            </li>
          </ul>
        ) : (
          <>
            <LoginButton />
          </>
        )}
      </Provider>
    </div>
  );
};

export default UserItem;
