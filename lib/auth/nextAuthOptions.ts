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
				return null;
			},
		}),
	],
	pages: {
		signIn: "/login", // ✅ CUSTOM LOGIN URL
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
