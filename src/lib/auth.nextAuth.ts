import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET!,
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        // async signIn({ account, profile }) {
        //     if (account?.provider === "google") {
        //         return (
        //             (profile)?.email_verified &&
        //             profile?.email?.endsWith("@example.com")
        //         );
        //     }
        //     return true;
        // }
    },
};
