import { DefaultSession } from "next-auth";

/**
 * Application-specific user object stored on the session.
 * Extends NextAuth's default session user to include `id` and `role`.
 */
type DefaultSessionUser = DefaultSession["user"];

export type AppUser = DefaultSessionUser & {
	id: string;
	role?: "admin" | "user" | string;
};

declare module "next-auth" {
	interface Session {
		user: AppUser;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		role?: string;
		id?: string;
	}
}

export type Role = AppUser["role"];
