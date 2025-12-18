import Link from 'next/link'
import { FaUsers, FaCog, FaHome } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="font-bold text-lg mb-6">Admin</h2>

      <nav className="space-y-3">
        <Link href="/dashboard" className="flex items-center gap-2">
          <FaHome /> Dashboard
        </Link>

        <Link href="/dashboard/users" className="flex items-center gap-2">
          <FaUsers /> Users
        </Link>

        <Link href="/dashboard/settings" className="flex items-center gap-2">
          <FaCog /> Settings
        </Link>
      </nav>
    </aside>
  )
}
