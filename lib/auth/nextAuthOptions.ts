import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (
					credentials?.email === "admin@gmail.com" &&
					credentials?.password === "123456"
				) {
					return {
						id: "1",
						name: "Admin",
						email: credentials.email,
						role: "admin",
					};
				}

                if (
					credentials?.email === "user@gmail.com" &&
					credentials?.password === "123456"
				) {
					return {
						id: "1",
						name: "User",
						email: credentials.email,
						role: "user",
					};
				}
				return null;
			},
		}),
	],
	// pages: {
	// 	signIn: '/auth/signin'
	// },
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user && (user as any).role) {
				token.role = (user as any).role;
			}
			return token;
		},
		async session({ session, token }) {
			(session.user as any).role = (token as any).role ?? "user";
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
