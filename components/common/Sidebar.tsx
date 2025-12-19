import Link from 'next/link'
import { FaUsers, FaCog, FaHome, FaWarehouse } from 'react-icons/fa'
import { defineAbilityFor } from '../../lib/casl/ability'

type SidebarProps = {
    role?: string
}

export default function Sidebar({ role = 'user' }: SidebarProps) {
    const ability = defineAbilityFor(role)

    return (
        <aside className="w-64 bg-white border-r p-4">
            <h2 className="font-bold text-lg mb-6">Admin</h2>

            <nav className="space-y-3">
                {(ability.can('read', 'Dashboard') || ability.can('manage', 'all')) && (
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <FaHome /> Dashboard
                    </Link>
                )}

                {(ability.can('manage', 'Warranties') || ability.can('manage', 'all')) && (
                    <Link href="/dashboard/warranties" className="flex items-center gap-2">
                        <FaWarehouse /> Warranties
                    </Link>
                )}

                {(ability.can('manage', 'Customers') || ability.can('manage', 'all')) && (
                    <Link href="/dashboard/customers" className="flex items-center gap-2">
                        <FaUsers /> Customers
                    </Link>
                )}

                {(ability.can('manage', 'Settings') || ability.can('manage', 'all')) && (
                    <Link href="/dashboard/settings" className="flex items-center gap-2">
                        <FaCog /> Settings
                    </Link>
                )}
            </nav>
        </aside>
    )
}
