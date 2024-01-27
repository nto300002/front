import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      console.log(account);
      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async signIn({ user, account, profile }) {
      const provider = account?.provider;
      const uid = user?.id;
      const name = user?.name;
      const email = user?.email;
      try {
        const response = await axios.post(
          `${apiUrl}/auth/${provider}/callback/`,
          {
            provider,
            uid,
            name,
            email,
          }
        );
        if (response.status === 200) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.log('エラー', error);
        console.log(account);
        return false;
      }
    },
    session: ({ session, token }) => {
      console.log('in session', { session, token });
      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
};
