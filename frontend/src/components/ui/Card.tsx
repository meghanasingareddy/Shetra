import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
    style?: React.CSSProperties;
    glass?: boolean;
}

export default function Card({
    children,
    className = "",
    onClick,
    hoverable = false,
    style,
    glass = false,
}: CardProps) {
    // If not explicitly glass, use a subtle surface card, otherwise use the premium glass-panel
    const baseClass = glass
        ? "glass-panel p-4"
        : "bg-shetra-surface/80 border border-shetra-border rounded-2xl p-4 shadow-lg";

    return (
        <div
            onClick={onClick}
            style={style}
            className={`
                ${baseClass}
                ${hoverable && !glass ? "hover:bg-shetra-surface hover:border-shetra-text-muted/20 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""}
                ${onClick ? "cursor-pointer" : ""}
                ${className}
            `}
        >
            {children}
        </div>
    );
}
