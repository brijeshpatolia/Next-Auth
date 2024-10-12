/* eslint-disable @typescript-eslint/no-explicit-any */

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "email",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials: any) {
          console.log(credentials);
          return {
            id: "123",
            name: "brijesh patoliya",
            email: "brijesh@example.com"
          }
        }
      }),
      GoogleProvider({ 
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""  // Replace with your own Google OAuth2 Client Secret
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: async ({ session, token }: any) => {
        session.user.id = token.sub;
        return session;
      }
    }
}

export default NEXT_AUTH;