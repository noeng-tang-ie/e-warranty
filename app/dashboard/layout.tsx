import '../globals.css'
import { ReactNode } from 'react'
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import Footer from '@/components/common/Footer';
import { getServerAuthSession, getRoleFromSession } from '@/lib/auth/session';

export default async function RootLayout({ children }: { children: ReactNode }) {

  const session = await getServerAuthSession()
  const role = getRoleFromSession(session)

  console.log("role", role)

  return (
    <html lang="en">
      <body className="bg-gray-100">

        <div className="flex h-screen">
          <Sidebar role={role} />

          <div className="flex-1">
            <Header />

            <main className="p-6 min-h-[calc(100vh-128px)]">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
