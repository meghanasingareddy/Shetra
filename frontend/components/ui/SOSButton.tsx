"use client";

interface SOSButtonProps {
    size?: "sm" | "lg";
    onClick?: () => void;
}

export default function SOSButton({ size = "lg", onClick }: SOSButtonProps) {
    const sizeClasses =
        size === "lg"
            ? "w-36 h-36 md:w-44 md:h-44 text-3xl md:text-4xl"
            : "w-20 h-20 text-base md:text-lg";

    return (
        <div className="relative flex items-center justify-center animate-float">
            {/* Ambient Background Glow */}
            <div
                className={`absolute rounded-full bg-shetra-neon/10 blur-2xl ${size === "lg" ? "w-64 h-64 md:w-80 md:h-80" : "w-32 h-32"}`}
            />

            {/* Outer expanding rings */}
            <div
                className={`absolute rounded-full border border-shetra-neon animate-sos-ring-1 ${size === "lg" ? "w-36 h-36 md:w-44 md:h-44" : "w-20 h-20"}`}
            />
            <div
                className={`absolute rounded-full border border-shetra-neon animate-sos-ring-2 ${size === "lg" ? "w-36 h-36 md:w-44 md:h-44" : "w-20 h-20"}`}
            />

            {/* Inner pulsating core ring */}
            <div
                className={`absolute rounded-full bg-shetra-neon/15 backdrop-blur-sm animate-sos-core ${size === "lg" ? "w-44 h-44 md:w-56 md:h-56" : "w-24 h-24 md:w-28 md:h-28"}`}
            />

            {/* Main button */}
            <button
                onClick={onClick}
                className={`
                    relative z-10 rounded-full flex items-center justify-center
                    font-heading font-black text-white tracking-[0.2em]
                    bg-gradient-to-br from-[#FF4D79] to-[#FF003C]
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_10px_30px_rgba(255,42,95,0.5)]
                    hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_15px_40px_rgba(255,42,95,0.7)]
                    transition-all duration-300 active:scale-95 active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.2),0_5px_15px_rgba(255,42,95,0.4)]
                    cursor-pointer
                    ${sizeClasses}
                `}
                aria-label="SOS Emergency"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90 drop-shadow-md">
                    SOS
                </span>
            </button>
        </div>
    );
}
