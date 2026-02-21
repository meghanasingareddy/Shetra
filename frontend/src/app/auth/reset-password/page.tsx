"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        // Real implementation would parse the oobCode from the URL and pass it to Firebase confirmPasswordReset
        setTimeout(() => {
            setLoading(false);
            router.push("/auth/password-changed");
        }, 1500);
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
                        Reset password
                    </h1>
                    <p className="font-body text-shetra-text-muted text-sm mt-3 leading-relaxed px-4">
                        Please type something you'll remember.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up text-center">
                        <p className="text-sm text-red-400 font-body">{error}</p>
                    </div>
                )}

                <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in delay-2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Must be at least 8 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={8}
                        />

                        <Input
                            type="password"
                            placeholder="Both passwords must match"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            minLength={8}
                        />

                        <Button type="submit" fullWidth size="lg" disabled={loading} className="mt-4 shadow-lg shadow-shetra-neon/20">
                            {loading ? "Resetting..." : "Reset password"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
