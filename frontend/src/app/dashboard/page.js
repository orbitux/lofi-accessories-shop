import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";
import RecentOrders from "@/components/dashboard/RecentOrders";

export default function Dashboard() {
    return (
        <main>
            <DashboardWelcome />
            <DashboardStats />
            <RecentOrders />
        </main>
    )
} 