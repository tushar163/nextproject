import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      pages: {
        signIn: '/login',
      },
      callbacks: {
        async redirect({ url, baseUrl }) {
          // Allow callbackUrl to be passed through
          return url.startsWith(baseUrl) ? url : baseUrl + '/dashboard';
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
