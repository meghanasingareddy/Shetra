"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-shetra-black relative overflow-hidden">
      {/* Immersive Glow Effect Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-shetra-neon/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center">

        {/* Shield Icon */}
        <div className="relative animate-fade-in mb-16 w-full flex justify-center px-4 py-8">
          <img src="/logo.png" alt="Shetra Logo" className="w-[360px] sm:w-[480px] max-w-full h-auto drop-shadow-[0_0_40px_rgba(255,46,99,0.3)] object-contain" />
        </div>

        {/* Loading indicator */}
        <div className="mt-16 animate-fade-in delay-4 w-32">
          <div className="w-full h-1 bg-shetra-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-shetra-neon rounded-full"
              style={{
                animation: "shimmer 2s ease-in-out infinite",
                backgroundSize: "200% 100%",
                backgroundImage:
                  "linear-gradient(90deg, transparent, #FF2E63, transparent)",
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
