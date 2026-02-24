import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-dvh w-full bg-shetra-black overflow-hidden relative">
            {/* Decorative background blurs for the whole page */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-shetra-neon/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Modern Desktop Split Screen - Left side branding */}
            <div className="hidden lg:flex flex-col flex-1 relative bg-gradient-to-br from-shetra-black to-shetra-dark/90 border-r border-white/5 items-center justify-center p-12 z-10">

                {/* Animated Background Gradients specifically for the brand panel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-shetra-neon/20 blur-[100px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

                <div className="relative z-20 flex flex-col items-center max-w-lg text-center gap-6">
                    <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl mb-8">
                        <img src="/logo.png" alt="Shetra Logo" className="w-[300px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,46,99,0.3)]" />
                    </div>

                    <h1 className="text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                        Stay Aware.
                        <br />
                        <span className="bg-gradient-to-r from-shetra-neon to-purple-400 bg-clip-text text-transparent">Stay Protected.</span>
                        <br />
                        Stay Shetra.
                    </h1>

                    <p className="text-lg text-shetra-text-muted font-body mt-4">
                        Shetra is a unified women's safety ecosystem designed to protect, alert, and empower in real-time.
                    </p>
                </div>
            </div>

            {/* Right side - Dynamic Auth Content */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-12 relative z-10 mt-safe">
                {/* Mobile Logo Fallback */}
                <div className="lg:hidden mb-12 flex justify-center">
                    <img src="/logo.png" alt="Shetra Logo" className="w-[200px] h-auto object-contain" />
                </div>

                {/* Auth Box Container */}
                <div className="w-full max-w-md lg:max-w-lg mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
