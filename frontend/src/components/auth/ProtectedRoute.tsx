"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/auth/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-dvh bg-shetra-black flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-shetra-neon border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
}
