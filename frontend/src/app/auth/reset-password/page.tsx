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
        <div className="w-full animate-fade-in z-20">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-shetra-surface/50 border border-shetra-border/50 text-white hover:bg-shetra-surface transition-colors backdrop-blur-md z-20 shadow-lg"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <div className="text-center mb-8">
                <h2 className="text-2xl font-heading font-bold text-white tracking-wide">Reset password</h2>
                <p className="text-shetra-text-muted text-sm mt-2">Please type something you'll remember.</p>
            </div>

            {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up text-center shadow-lg shadow-red-500/5">
                    <p className="text-sm text-red-400 font-body">{error}</p>
                </div>
            )}

            <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
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

                    <Button type="submit" fullWidth size="lg" disabled={loading} className="mt-4 shadow-[0_0_15px_rgba(255,46,99,0.3)]">
                        {loading ? "Resetting..." : "Reset password"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
