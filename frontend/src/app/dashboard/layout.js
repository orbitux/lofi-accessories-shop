import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />
            <main className="flex flex-col items-center w-full gap-10"><DashboardHeader />{children}</main>

        </div>
    );
}