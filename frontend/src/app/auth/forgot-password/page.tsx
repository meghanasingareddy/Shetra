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
        <div className="w-full animate-fade-in z-20">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-shetra-surface/50 border border-shetra-border/50 text-white hover:bg-shetra-surface transition-colors backdrop-blur-md z-20 shadow-lg"
                aria-label="Go back"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            {/* Header Text */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-white tracking-wide">Forgot password?</h2>
                <p className="text-shetra-text-muted text-sm mt-2">Don't worry! It happens. Please enter the email associated with your account.</p>
            </div>

            {/* Error / Success States */}
            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up text-center shadow-lg shadow-red-500/5">
                    <p className="text-sm text-red-400 font-body">{error}</p>
                </div>
            )}
            {success && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 animate-slide-up text-center shadow-lg shadow-green-500/5">
                    <p className="text-sm text-green-400 font-body">Reset link sent! Check your email inbox.</p>
                </div>
            )}

            {/* Form Container */}
            <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Button type="submit" fullWidth size="lg" disabled={loading || success} className="mt-4 shadow-[0_0_15px_rgba(255,46,99,0.3)]">
                        {loading ? "Sending..." : success ? "Email Sent" : "Send Reset Link"}
                    </Button>
                </form>

                {/* Login link */}
                <p className="mt-8 text-center text-sm font-body text-shetra-text-muted group">
                    Remember password?{" "}
                    <Link href="/auth/login" className="text-shetra-light font-medium group-hover:text-shetra-neon transition-colors duration-300 relative inline-block">
                        Log in
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-shetra-neon transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </p>
            </div>
        </div>
    );
}
