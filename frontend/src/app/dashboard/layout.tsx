import BottomNav from "@/components/ui/BottomNav";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className="mx-auto min-h-dvh w-full max-w-[430px] relative flex flex-col bg-shetra-black">
                <div className="flex-1 pb-20">{children}</div>
                <BottomNav />
            </div>
        </ProtectedRoute>
    );
}
