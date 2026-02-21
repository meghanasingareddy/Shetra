"use client";

import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({
    label,
    error,
    className = "",
    onFocus,
    onBlur,
    ...props
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="w-full relative group">
            {label && (
                <label
                    className={`block text-sm font-heading mb-1.5 tracking-wide transition-colors duration-200
                        ${isFocused ? "text-shetra-light" : "text-shetra-text-muted group-hover:text-shetra-light/80"}
                    `}
                >
                    {label}
                </label>
            )}
            <input
                onFocus={(e) => {
                    setIsFocused(true);
                    onFocus?.(e);
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    onBlur?.(e);
                }}
                className={`
                    w-full bg-shetra-dark/50 border border-shetra-border
                    rounded-xl px-4 py-3.5 text-white font-body text-base
                    placeholder:text-shetra-text-muted/50
                    hover:bg-shetra-surface/80 hover:border-shetra-border/80
                    focus:bg-shetra-surface focus:outline-none focus:ring-0 focus:border-shetra-neon
                    transition-all duration-300 shadow-inner
                    ${error ? "border-red-500/50 bg-red-500/5 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : ""}
                    ${className}
                `}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-xs text-red-400 font-heading tracking-wide flex items-center gap-1 animate-fade-in">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    );
}
