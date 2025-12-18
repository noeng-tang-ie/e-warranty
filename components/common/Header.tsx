'use client'

import { signOut } from 'next-auth/react'
import { Button } from 'rsuite'

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-3 border-b">
      <h1 className="font-semibold">Admin Dashboard</h1>

      <Button appearance="ghost" onClick={() => signOut()}>
        Logout
      </Button>
    </header>
  )
}
