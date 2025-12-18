import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white border-t py-4">
            <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="text-sm text-gray-600">© {new Date().getFullYear()} e-Warranty. All rights reserved.</div>

                <nav className="flex items-center gap-4 text-sm" aria-label="Footer navigation">
                    <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
                    <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
                    <a href="mailto:support@e-warranty.example" className="text-gray-600 hover:text-gray-900">Support</a>
                </nav>
            </div>
        </footer>
    )
}
