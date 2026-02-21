"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: React.ReactNode;
    error?: string;
}

export default function Input({
    label,
    icon,
    error,
    className = "",
    ...props
}: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-body text-shetra-text-muted mb-1.5 tracking-wide">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-shetra-text-muted">
                        {icon}
                    </span>
                )}
                <input
                    className={`
            w-full bg-shetra-surface border border-shetra-border
            rounded-xl px-4 py-3.5 text-shetra-light font-body text-base
            placeholder:text-shetra-text-muted/60
            transition-all duration-200
            ${icon ? "pl-11" : ""}
            ${error ? "border-red-500/50" : ""}
            ${className}
          `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-xs text-red-400 font-body">{error}</p>
            )}
        </div>
    );
}
