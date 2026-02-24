"use client";

interface SOSButtonProps {
    size?: "sm" | "lg" | "xl";
    onClick?: () => void;
    className?: string;
}

export default function SOSButton({ size = "lg", onClick, className = "" }: SOSButtonProps) {
    const sizeClasses =
        size === "xl"
            ? "w-48 h-48 text-5xl"
            : size === "lg"
                ? "w-36 h-36 text-3xl"
                : "w-20 h-20 text-base";

    const outerGlowClasses =
        size === "xl"
            ? "w-72 h-72"
            : size === "lg"
                ? "w-52 h-52"
                : "w-28 h-28";

    const innerGlowClasses =
        size === "xl"
            ? "w-60 h-60"
            : size === "lg"
                ? "w-44 h-44"
                : "w-24 h-24";

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Outer glow rings */}
            <div
                className={`absolute rounded-full bg-shetra-neon/5 animate-sos-pulse ${outerGlowClasses}`}
            />
            <div
                className={`absolute rounded-full bg-shetra-neon/8 ${innerGlowClasses}`}
            />
            {/* Main button */}
            <button
                onClick={onClick}
                className={`
          relative z-10 rounded-full bg-shetra-neon flex items-center justify-center
          font-heading font-extrabold text-white tracking-[0.15em]
          shadow-[0_0_40px_rgba(255,46,99,0.35),0_0_80px_rgba(255,46,99,0.15)]
          transition-transform duration-150 active:scale-90
          cursor-pointer
          ${sizeClasses}
        `}
                aria-label="SOS Emergency"
            >
                SOS
            </button>
        </div>
    );
}
