"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function VerifyOTPPage() {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // ... (OTP logic remains the same, assuming it's standard. Just focusing on layout)

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            setLoading(false);
            router.push("/auth/email-verified");
        }, 1500);
    };

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) value = value.slice(-1); // Only allow 1 char

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-shetra-black px-6 py-12 lg:px-8 relative overflow-y-auto">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-shetra-neon/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md mx-auto z-10">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-shetra-surface/50 border border-shetra-border/50 text-white hover:bg-shetra-surface transition-colors animate-fade-in backdrop-blur-md z-20"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="text-center mb-8 animate-fade-in delay-1 mt-10">
                    <div className="flex justify-center mb-6 w-full">
                        <img src="/logo.png" alt="Shetra Logo" className="w-[200px] h-auto drop-shadow-[0_0_15px_rgba(255,46,99,0.3)] object-contain" />
                    </div>
                    <h1 className="font-heading font-extrabold text-white text-3xl tracking-tight">
                        Verify Email
                    </h1>
                    <p className="font-body text-shetra-text-muted text-sm mt-3 leading-relaxed px-4">
                        We've sent a 6-digit verification code to your email. Enter it below to continue.
                    </p>
                </div>

                <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in delay-2">
                    <form onSubmit={handleVerify} className="space-y-6">
                        <div className="flex justify-between gap-2 max-w-[320px] mx-auto">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-14 sm:w-14 sm:h-16 bg-shetra-black border border-shetra-border rounded-xl text-center text-xl font-heading font-bold text-white focus:border-shetra-neon focus:ring-1 focus:ring-shetra-neon transition-all select-all focus:outline-none"
                                    required
                                />
                            ))}
                        </div>

                        <Button type="submit" fullWidth size="lg" disabled={loading || otp.join("").length !== 6}>
                            {loading ? "Verifying..." : "Verify"}
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-sm/6 font-body text-shetra-text-muted">
                        Didn't receive the code?{" "}
                        <button className="text-shetra-neon font-semibold hover:underline">
                            Resend Code
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
