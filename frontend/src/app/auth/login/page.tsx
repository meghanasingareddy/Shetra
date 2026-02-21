"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function LoginPage() {
    const router = useRouter();
    const { login, loginWithGoogle } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await login(email, password);
            router.push("/dashboard");
        } catch (err: any) {
            setError(
                err.message?.includes("invalid") || err.message?.includes("wrong-password")
                    ? "Invalid email or password"
                    : "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError("");
        try {
            await loginWithGoogle();
            router.push("/dashboard");
        } catch (err: any) {
            setError("Google sign-in failed. Please try again.");
        }
    };

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-shetra-black px-6 py-12 lg:px-8 relative overflow-y-auto">
            {/* Glow Effect Background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-shetra-neon/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md mx-auto z-10">

                {/* Hero Branding */}
                <div className="flex flex-col items-center text-center mb-12 animate-fade-in w-full">
                    <div className="relative w-full flex justify-center px-2 py-8">
                        <div className="absolute inset-x-8 inset-y-4 bg-shetra-neon/20 blur-3xl rounded-full scale-125" />
                        <img src="/logo.png" alt="Shetra Logo" className="relative z-10 w-[320px] sm:w-[400px] max-w-[90%] h-auto drop-shadow-[0_0_25px_rgba(255,46,99,0.5)] object-contain" />
                    </div>
                </div>

                {/* Error State */}
                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up text-center shadow-lg shadow-red-500/5">
                        <p className="text-sm text-red-400 font-body">{error}</p>
                    </div>
                )}

                {/* Form Container */}
                <div className="bg-shetra-surface/50 backdrop-blur-xl border border-shetra-border/50 rounded-2xl p-6 sm:p-8 shadow-2xl animate-fade-in delay-2">
                    <form onSubmit={handleLogin} className="space-y-5">
                        <Input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div>
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="flex justify-end mt-2">
                                <Link
                                    href="/auth/forgot-password"
                                    className="text-sm font-body text-shetra-text-muted hover:text-shetra-neon transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>

                        <Button type="submit" fullWidth size="lg" disabled={loading} className="mt-2 shadow-lg shadow-shetra-neon/20">
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px bg-shetra-border" />
                        <span className="text-xs font-body text-shetra-text-muted uppercase tracking-widest">
                            or continue with
                        </span>
                        <div className="flex-1 h-px bg-shetra-border" />
                    </div>

                    {/* Google Login */}
                    <Button variant="secondary" fullWidth size="lg" onClick={handleGoogleLogin}>
                        <span className="flex items-center justify-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </span>
                    </Button>

                    {/* Register link */}
                    <p className="mt-8 text-center text-sm/6 font-body text-shetra-text-muted">
                        Don't have an account?{" "}
                        <Link href="/auth/register" className="text-shetra-neon font-semibold hover:underline">
                            Register now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
