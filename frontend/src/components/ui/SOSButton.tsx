"use client";

interface SOSButtonProps {
    size?: "sm" | "lg";
    onClick?: () => void;
}

export default function SOSButton({ size = "lg", onClick }: SOSButtonProps) {
    const sizeClasses =
        size === "lg"
            ? "w-36 h-36 text-3xl"
            : "w-20 h-20 text-base";

    return (
        <div className="relative flex items-center justify-center">
            {/* Outer glow rings */}
            <div
                className={`absolute rounded-full bg-shetra-neon/5 animate-sos-pulse ${size === "lg" ? "w-52 h-52" : "w-28 h-28"
                    }`}
            />
            <div
                className={`absolute rounded-full bg-shetra-neon/8 ${size === "lg" ? "w-44 h-44" : "w-24 h-24"
                    }`}
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
