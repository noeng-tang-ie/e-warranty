import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";


export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1">
                <Header />

                <main className="p-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-gray-600 mt-2">
                        Welcome to Admin Dashboard
                    </p>
                </main>
            </div>
        </div>
    )
}
