import BottomNav from "@/components/ui/BottomNav";
import DesktopSidebar from "@/components/ui/DesktopSidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className="flex min-h-dvh w-full bg-shetra-black">
                <DesktopSidebar />
                <div className="flex-1 relative flex flex-col w-full max-w-7xl mx-auto">
                    <div className="flex-1 pb-20 md:pb-8">{children}</div>
                    <BottomNav />
                </div>
            </div>
        </ProtectedRoute>
    );
}
