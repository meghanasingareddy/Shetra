"use client";

import React, { useRef } from "react";

interface OTPInputProps {
    length?: number;
    onChange?: (otp: string) => void;
}

export default function OTPInput({ length = 6, onChange }: OTPInputProps) {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const input = inputsRef.current[index];
        if (input) input.value = value.slice(-1);

        // Auto-focus next
        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        // Collect OTP
        const otp = inputsRef.current.map((el) => el?.value || "").join("");
        onChange?.(otp);
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !inputsRef.current[index]?.value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
        paste.split("").forEach((char, i) => {
            if (inputsRef.current[i]) {
                inputsRef.current[i]!.value = char;
            }
        });
        const focusIdx = Math.min(paste.length, length - 1);
        inputsRef.current[focusIdx]?.focus();
        onChange?.(paste);
    };

    return (
        <div className="flex gap-3 justify-center">
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    ref={(el) => { inputsRef.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    onPaste={i === 0 ? handlePaste : undefined}
                    className="w-12 h-14 text-center text-xl font-heading font-bold bg-shetra-surface border border-shetra-border rounded-xl text-shetra-light transition-all duration-200 focus:border-shetra-neon focus:shadow-[0_0_0_2px_rgba(255,46,99,0.15)]"
                    aria-label={`OTP digit ${i + 1}`}
                />
            ))}
        </div>
    );
}
