import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

export default function Card({
    children,
    className = "",
    onClick,
    hoverable = false,
}: CardProps) {
    return (
        <div
            onClick={onClick}
            className={`
        bg-shetra-surface/80 border border-shetra-border rounded-2xl p-4
        ${hoverable ? "hover:bg-shetra-surface hover:border-shetra-text-muted/20 cursor-pointer transition-all duration-200" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
