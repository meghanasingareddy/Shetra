"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SOSButton from "@/components/ui/SOSButton";
import Card from "@/components/ui/Card";
import { useAuth } from "@/context/AuthContext";
import { getGuardians, Guardian } from "@/lib/firestore";

const contactColors = ["#FF2A5F", "#3B82F6", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"];

const widgets = [
    {
        title: "Safety Tips",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        description: "Stay informed",
    },
    {
        title: "Video Recording",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        description: "Record evidence",
    },
    {
        title: "Helpline",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
        ),
        description: "Emergency numbers",
        href: "/dashboard/helpline",
    },
    {
        title: "SOS Contacts",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        description: "Manage guardians",
        href: "/dashboard/contacts",
    },
];

export default function DashboardPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [guardians, setGuardians] = useState<Guardian[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            getGuardians(user.uid)
                .then(setGuardians)
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user]);

    return (
        <div className="min-h-dvh relative bg-shetra-black overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-shetra-neon/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <header className="flex items-center justify-between px-5 py-4 bg-shetra-black/60 backdrop-blur-xl border-b border-shetra-border sticky top-0 z-50 transition-all duration-300">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Shetra Logo" className="h-[46px] w-[110px] object-contain drop-shadow-md" />
                </div>
                <button
                    onClick={() => router.push("/dashboard/settings")}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-shetra-surface/80 border border-transparent text-shetra-text-muted hover:text-white hover:bg-shetra-surface hover:border-shetra-border hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
                    aria-label="Settings"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                </button>
            </header>

            <div className="px-5 py-6 space-y-8 relative z-10 w-full max-w-2xl mx-auto">
                {/* Saved Contacts Section */}
                <section className="animate-fade-in delay-1">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-heading font-bold text-xl text-shetra-light tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-shetra-neon rounded-full inline-block"></span>
                            Quick Contacts
                        </h2>
                        <button
                            onClick={() => router.push("/dashboard/contacts")}
                            className="text-sm font-heading font-medium text-shetra-neon hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                            View all
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x hide-scrollbar">
                        {loading ? (
                            <div className="flex w-full items-center justify-center py-4">
                                <span className="w-5 h-5 border-2 border-shetra-neon border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : (
                            <>
                                {guardians.map((contact, i) => {
                                    const color = contactColors[i % contactColors.length];
                                    return (
                                        <button
                                            key={contact.id}
                                            onClick={() => router.push("/dashboard/contacts")}
                                            className="flex flex-col items-center gap-3 cursor-pointer group snap-start animate-slide-up shrink-0 min-w-[72px]"
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        >
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-xl transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 text-white"
                                                style={{
                                                    backgroundColor: color + "15",
                                                    border: `1px solid ${color}40`,
                                                    boxShadow: `0 4px 15px ${color}20`
                                                }}
                                            >
                                                {contact.name.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-sm font-heading font-medium text-shetra-text-muted group-hover:text-shetra-light transition-colors max-w-[72px] truncate px-1">
                                                {contact.name}
                                            </span>
                                        </button>
                                    );
                                })}
                                <button
                                    onClick={() => router.push("/dashboard/contacts/add")}
                                    className="flex flex-col items-center gap-3 cursor-pointer group snap-start animate-slide-up shrink-0 min-w-[72px]"
                                    style={{ animationDelay: `${guardians.length * 0.1}s` }}
                                >
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-xl transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 border-2 border-dashed border-shetra-border text-shetra-text-muted bg-shetra-surface/40 hover:bg-shetra-surface hover:text-white hover:border-shetra-neon/50">
                                        +
                                    </div>
                                    <span className="text-sm font-heading font-medium text-shetra-text-muted group-hover:text-shetra-light transition-colors">
                                        Add
                                    </span>
                                </button>
                            </>
                        )}
                    </div>
                </section>

                {/* Main Action Widgets */}
                <section className="animate-fade-in delay-2">
                    <h2 className="font-heading font-bold text-xl text-shetra-light tracking-wide mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
                        Tools & Features
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {widgets.map((widget, i) => (
                            <Card
                                key={widget.title}
                                hoverable
                                glass
                                onClick={() => widget.href && router.push(widget.href)}
                                className="flex flex-col gap-4 animate-slide-up group"
                                style={{ animationDelay: `${(i * 0.1) + 0.2}s` }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-shetra-surface border border-shetra-border flex items-center justify-center text-shetra-light group-hover:text-shetra-neon group-hover:border-shetra-neon/30 transition-all duration-300 shadow-inner">
                                    {widget.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-heading font-bold text-base text-shetra-light group-hover:text-white transition-colors">
                                        {widget.title}
                                    </h3>
                                    <p className="text-sm font-body text-shetra-text-muted/80 leading-snug">
                                        {widget.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Prominent SOS Section */}
                <section className="flex flex-col items-center justify-center pt-8 pb-12 animate-fade-in delay-3 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-shetra-neon/5 rounded-full blur-3xl -z-10" />

                    <div className="flex items-center gap-3 mb-8 bg-shetra-surface/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-shetra-border shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-shetra-neon animate-pulse" />
                        <p className="text-sm font-heading font-semibold text-shetra-light uppercase tracking-[0.15em]">
                            Emergency? Press SOS
                        </p>
                        <span className="w-2 h-2 rounded-full bg-shetra-neon animate-pulse" />
                    </div>

                    <SOSButton size="lg" />
                </section>
            </div>

            {/* Global Hide Scrollbar Utility */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
