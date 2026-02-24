"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function EmailVerifiedPage() {
    const router = useRouter();

    return (
        <div className="w-full animate-fade-in z-20">
            <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-8">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                </div>

                <h1 className="font-heading font-extrabold text-white text-3xl tracking-tight mb-3">
                    Email Verified!
                </h1>

                <p className="font-body text-shetra-text-muted text-base leading-relaxed mb-8">
                    Your email address has been successfully verified. You now have full access to Shetra's safety features.
                </p>

                <Button
                    fullWidth
                    size="lg"
                    onClick={() => router.push("/dashboard")}
                    className="shadow-[0_0_15px_rgba(255,46,99,0.3)]"
                >
                    Continue to Dashboard
                </Button>
            </div>
        </div>
    );
}
