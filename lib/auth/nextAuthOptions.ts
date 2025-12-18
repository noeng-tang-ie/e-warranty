import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {},
            async authorize(credentials:any) {
                if (
                    credentials?.email === "admin@gmail.com" &&
                    credentials?.password === "123456"
                ) {
                    console.log("login success");
                    return {
                        id: "1",
                        name: "Admin",
                        email: credentials.email,
                        role: "admin",
                    };
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
