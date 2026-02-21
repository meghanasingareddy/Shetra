"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-shetra-neon text-white hover:bg-shetra-muted-rose active:scale-[0.97] shadow-[0_0_20px_rgba(255,46,99,0.25)]",
    secondary:
        "bg-transparent border border-shetra-border text-shetra-light hover:bg-shetra-surface active:scale-[0.97]",
    ghost:
        "bg-transparent text-shetra-text-muted hover:text-shetra-light hover:bg-shetra-surface/50",
    danger:
        "bg-red-600/15 text-red-400 border border-red-500/20 hover:bg-red-600/25",
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    className = "",
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
        font-heading font-semibold tracking-wide
        transition-all duration-200 ease-out
        disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
        cursor-pointer
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}
