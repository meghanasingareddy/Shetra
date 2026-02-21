"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function PasswordChangedPage() {
    const router = useRouter();

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-shetra-black px-6 py-12 lg:px-8 relative overflow-y-auto">
            {/* Glow Effect Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md mx-auto z-10">

                <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-8 shadow-2xl animate-fade-in flex flex-col items-center text-center">

                    {/* Success Icon */}
                    <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-8">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>

                    <h1 className="font-heading font-extrabold text-white text-3xl tracking-tight mb-3">
                        Password Changed!
                    </h1>

                    <p className="font-body text-shetra-text-muted text-base leading-relaxed mb-8">
                        Your password has been changed successfully. You can now log in with your new credentials.
                    </p>

                    <Button
                        fullWidth
                        size="lg"
                        onClick={() => router.push("/auth/login")}
                        className="shadow-lg shadow-shetra-neon/20"
                    >
                        Back to Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
