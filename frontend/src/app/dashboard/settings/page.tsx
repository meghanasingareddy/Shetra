"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/ui/Header";
import ToggleSwitch from "@/components/ui/ToggleSwitch";

const menuItems = [
    {
        label: "Share App",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
            </svg>
        ),
    },
    {
        label: "About Us",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
            </svg>
        ),
    },
    {
        label: "Feedback",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
    },
];

export default function SettingsPage() {
    const router = useRouter();
    const { logout } = useAuth();
    const [notifications, setNotifications] = useState(true);

    const handleLogout = async () => {
        await logout();
        router.push("/auth/login");
    };

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="Settings" showBack />

            <div className="px-5 py-4 animate-fade-in">
                {/* Notifications toggle */}
                <div className="flex items-center justify-between py-4 border-b border-shetra-border">
                    <div className="flex items-center gap-3">
                        <span className="text-shetra-text-muted">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 01-3.46 0" />
                            </svg>
                        </span>
                        <span className="font-body text-sm text-shetra-light font-medium">
                            Notification
                        </span>
                    </div>
                    <ToggleSwitch checked={notifications} onChange={setNotifications} />
                </div>

                {/* Menu items */}
                {menuItems.map((item, index) => (
                    <button
                        key={item.label}
                        className="w-full flex items-center gap-3 py-4 border-b border-shetra-border text-shetra-light hover:text-shetra-neon transition-colors cursor-pointer animate-slide-up"
                        style={{ animationDelay: `${(index + 1) * 0.08}s` }}
                    >
                        <span className="text-shetra-text-muted">{item.icon}</span>
                        <span className="font-body text-sm font-medium">{item.label}</span>
                        <svg
                            className="ml-auto text-shetra-text-muted/50"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                ))}

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 py-4 text-red-400 hover:text-red-300 transition-colors cursor-pointer animate-slide-up"
                    style={{ animationDelay: "0.4s" }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                        <polyline points="16,17 21,12 16,7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <span className="font-body text-sm font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
}
