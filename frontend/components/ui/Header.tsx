"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
    title: string;
    showBack?: boolean;
    showSettings?: boolean;
    onSettingsClick?: () => void;
    rightElement?: React.ReactNode;
}

export default function Header({
    title,
    showBack = false,
    showSettings = false,
    onSettingsClick,
    rightElement,
}: HeaderProps) {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between px-5 py-4 bg-shetra-black/80 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                {showBack && (
                    <button
                        onClick={() => router.back()}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-shetra-surface/60 text-shetra-light hover:bg-shetra-surface transition-colors cursor-pointer"
                        aria-label="Go back"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                )}
                <h1 className="font-heading font-bold text-lg tracking-tight text-shetra-light">
                    {title}
                </h1>
            </div>
            <div className="flex items-center gap-2">
                {rightElement}
                {showSettings && (
                    <button
                        onClick={onSettingsClick}
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-shetra-surface/60 text-shetra-text-muted hover:text-shetra-light hover:bg-shetra-surface transition-colors cursor-pointer"
                        aria-label="Settings"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                    </button>
                )}
            </div>
        </header>
    );
}
