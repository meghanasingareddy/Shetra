"use client";

interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export default function ToggleSwitch({
    checked,
    onChange,
    label,
}: ToggleSwitchProps) {
    return (
        <label className="flex items-center gap-3 cursor-pointer select-none">
            <button
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`
          relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer
          ${checked ? "bg-shetra-neon" : "bg-shetra-surface border border-shetra-border"}
        `}
            >
                <span
                    className={`
            absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md
            transition-transform duration-200
            ${checked ? "translate-x-5" : "translate-x-0"}
          `}
                />
            </button>
            {label && (
                <span className="text-sm font-body text-shetra-light">{label}</span>
            )}
        </label>
    );
}
