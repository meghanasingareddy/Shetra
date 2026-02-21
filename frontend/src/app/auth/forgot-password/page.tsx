"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { resetPassword } = useAuth();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await resetPassword(email);
            setSuccess(true);
        } catch {
            setError("Could not send reset email. Please check the address.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-shetra-black px-6 py-12 lg:px-8 relative overflow-y-auto">
            {/* Glow Effect Background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-shetra-neon/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md mx-auto z-10">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-shetra-surface/50 border border-shetra-border/50 text-white hover:bg-shetra-surface transition-colors animate-fade-in backdrop-blur-md z-20"
                    aria-label="Go back"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Hero Copy */}
                <div className="text-center mb-8 animate-fade-in delay-1 mt-10 w-full flex flex-col items-center">
                    <div className="flex justify-center mb-6 w-full">
                        <img src="/logo.png" alt="Shetra Logo" className="w-[200px] h-auto object-contain drop-shadow-md" />
                    </div>
                    <h1 className="font-heading font-extrabold text-white text-3xl tracking-tight">
                        Forgot password?
                    </h1>
                    <p className="font-body text-shetra-text-muted text-sm mt-3 leading-relaxed px-4">
                        Don&apos;t worry! It happens. Please enter the email associated with your account.
                    </p>
                </div>

                {/* Error / Success States */}
                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up text-center">
                        <p className="text-sm text-red-400 font-body">{error}</p>
                    </div>
                )}
                {success && (
                    <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 animate-slide-up text-center shadow-lg shadow-green-500/5">
                        <p className="text-sm text-green-400 font-body">Reset link sent! Check your email inbox.</p>
                    </div>
                )}

                {/* Form Container */}
                <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in delay-2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Button type="submit" fullWidth size="lg" disabled={loading || success} className="mt-4">
                            {loading ? "Sending..." : success ? "Email Sent" : "Send Reset Link"}
                        </Button>
                    </form>

                    {/* Login link */}
                    <p className="mt-8 text-center text-sm/6 font-body text-shetra-text-muted">
                        Remember password?{" "}
                        <Link href="/auth/login" className="text-shetra-neon font-semibold hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
