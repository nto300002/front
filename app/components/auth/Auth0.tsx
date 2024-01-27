'use client';
import { BASE_URL } from '@/app/api/auth/client';
import { Auth0Provider } from '@auth0/auth0-react';
type Props = {
  children?: React.ReactNode;
};
const Auth0 = ({ children }: Props) => {
  return (
    <Auth0Provider
      domain={process.env['NEXT_PUBLIC_AUTH0_DOMAIN']!}
      clientId={process.env['NEXT_PUBLIC_AUTH0_CLIENT_ID']!}
      authorizationParams={{
        redirect_uri: BASE_URL,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0;
