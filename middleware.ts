import { withAuth } from "next-auth/middleware"

export default withAuth({
  // options here if needed
})

export const config = {
  matcher: ['/dashboard/:path*'],
}
