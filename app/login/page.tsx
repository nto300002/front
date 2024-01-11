import React from 'react';
import MainContent from '../components/layout/MainContent';
import LoginForm from '../components/login/LoginForm';
import { LoginButton, LogoutButton } from '../components/layout/GoogleAuth';
import { getServerSession } from 'next-auth';
import { options } from '../Authoptions';
import Provider from '../components/auth/Provider';

const Login = async () => {
  const session = await getServerSession(options);
  return (
    <MainContent>
      {session?.user ? (
        <>
          <Provider>
            <h1>ようこそ, {session.user && session.user.email}さん</h1>
          </Provider>

          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </MainContent>
  );
};

export default Login;
