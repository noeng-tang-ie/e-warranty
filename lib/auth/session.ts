import { getServerSession } from "next-auth";
import { authOptions } from "./nextAuthOptions";
import type { Session } from "next-auth";

/**
 * Returns the NextAuth session on the server using the project's `authOptions`.
 */
export async function getServerAuthSession(): Promise<Session | null> {
	return (await getServerSession(authOptions)) as Session | null;
}

/**
 * Helper to extract a user's role from a session object (defaults to 'user').
 */
export function getRoleFromSession(
	session: Session | null | undefined
): string {
	return (session?.user as any)?.role ?? "user";
}

export default getServerAuthSession;
