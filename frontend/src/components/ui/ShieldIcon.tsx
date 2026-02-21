export default function ShieldIcon({
    size = 28,
    className = "",
}: {
    size?: number;
    className?: string;
}) {
    const height = Math.round(size * 1.15);
    return (
        <svg
            width={size}
            height={height}
            viewBox="0 0 100 116"
            fill="none"
            className={className}
        >
            {/* Outer shield */}
            <path
                d="M50 4L8 22V54C8 82 28 106 50 112C72 106 92 82 92 54V22L50 4Z"
                fill="#1C1E26"
                stroke="#FF2E63"
                strokeWidth="3"
            />
            {/* Inner shield */}
            <path
                d="M50 16L18 30V54C18 76 34 96 50 102C66 96 82 76 82 54V30L50 16Z"
                fill="#14151B"
                stroke="rgba(255,46,99,0.2)"
                strokeWidth="1"
            />
            {/* Checkmark — protection symbol */}
            <path
                d="M38 55L47 64L64 45"
                stroke="#FF2E63"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    );
}
