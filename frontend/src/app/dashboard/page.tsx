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
        <div className="min-h-dvh relative bg-shetra-black overflow-hidden flex flex-col">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-shetra-neon/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="flex items-center justify-between px-6 md:px-10 py-5 bg-shetra-black/60 backdrop-blur-xl border-b border-shetra-border sticky top-0 z-50 transition-all duration-300">
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="Shetra Logo" className="h-[46px] w-auto object-contain drop-shadow-md hidden md:block" />
                    <img src="/logo.png" alt="Shetra Logo" className="h-[40px] w-auto object-contain drop-shadow-md md:hidden" />
                </div>
                <div className="flex items-center gap-4">
                    {/* Optional Desktop greeting */}
                    <div className="hidden md:block text-right mr-2">
                        <p className="text-xs text-shetra-text-muted font-body">Welcome back</p>
                        <p className="text-sm font-heading font-semibold text-white">Guardian</p>
                    </div>
                    <button
                        onClick={() => router.push("/dashboard/settings")}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-shetra-surface/80 border border-white/5 text-shetra-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-lg transition-all duration-300 cursor-pointer active:scale-95"
                        aria-label="Settings"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                        </svg>
                    </button>
                </div>
            </header>

            <div className="px-5 md:px-8 lg:px-12 py-8 space-y-12 relative z-10 w-full max-w-7xl mx-auto flex-1">

                {/* Desktop layout wrapper: 2 columns on lg */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* Left Column (Contacts & Tools) */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-12">
                        {/* Saved Contacts Section */}
                        <section className="animate-fade-in delay-1 w-full bg-shetra-surface/20 border border-white/5 rounded-3xl p-6 lg:p-8 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="font-heading font-bold text-xl lg:text-2xl text-shetra-light tracking-wide flex items-center gap-3">
                                    <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-shetra-neon/10 flex items-center justify-center border border-shetra-neon/20">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2E63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                        </svg>
                                    </div>
                                    Quick Contacts
                                </h2>
                                <button
                                    onClick={() => router.push("/dashboard/contacts")}
                                    className="text-sm font-heading font-semibold text-shetra-neon hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-shetra-neon/10"
                                >
                                    View all
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 min-h-[100px] snap-x hide-scrollbar">
                                {loading ? (
                                    <div className="flex w-full items-center justify-center py-4">
                                        <span className="w-8 h-8 border-2 border-shetra-neon border-t-transparent rounded-full animate-spin" />
                                    </div>
                                ) : (
                                    <>
                                        {guardians.map((contact, i) => {
                                            const color = contactColors[i % contactColors.length];
                                            return (
                                                <button
                                                    key={contact.id}
                                                    onClick={() => router.push("/dashboard/contacts")}
                                                    className="flex flex-col items-center gap-3 cursor-pointer group snap-start animate-slide-up shrink-0 min-w-[72px] lg:min-w-[80px]"
                                                    style={{ animationDelay: `${i * 0.1}s` }}
                                                >
                                                    <div
                                                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-xl md:text-2xl transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 text-white border"
                                                        style={{
                                                            backgroundColor: color + "15",
                                                            border: `1px solid ${color}40`,
                                                            boxShadow: `0 8px 25px ${color}20`
                                                        }}
                                                    >
                                                        {contact.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <span className="text-sm font-heading font-medium text-shetra-text-muted group-hover:text-shetra-light transition-colors max-w-[72px] lg:max-w-[80px] truncate px-1">
                                                        {contact.name}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                        <button
                                            onClick={() => router.push("/dashboard/contacts/add")}
                                            className="flex flex-col items-center gap-3 cursor-pointer group snap-start animate-slide-up shrink-0 min-w-[72px] lg:min-w-[80px]"
                                            style={{ animationDelay: `${guardians.length * 0.1}s` }}
                                        >
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl md:text-3xl transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 border border-dashed border-white/20 text-shetra-text-muted bg-white/5 hover:bg-white/10 hover:text-white hover:border-shetra-neon/50">
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
                        <section className="animate-fade-in delay-2 flex-1">
                            <h2 className="font-heading font-bold text-xl lg:text-2xl text-shetra-light tracking-wide mb-8 flex items-center gap-3">
                                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="3" width="7" height="7" rx="1" />
                                        <rect x="14" y="14" width="7" height="7" rx="1" />
                                        <rect x="3" y="14" width="7" height="7" rx="1" />
                                    </svg>
                                </div>
                                Tools & Features
                            </h2>
                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
                                {widgets.map((widget, i) => (
                                    <Card
                                        key={widget.title}
                                        hoverable
                                        glass
                                        onClick={() => widget.href && router.push(widget.href)}
                                        className="flex flex-col gap-4 animate-slide-up group border-white/5 bg-white/[0.02] hover:bg-white/5 p-5 lg:p-6"
                                        style={{ animationDelay: `${(i * 0.1) + 0.2}s` }}
                                    >
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-shetra-black border border-white/10 flex items-center justify-center text-shetra-light group-hover:text-shetra-neon group-hover:border-shetra-neon/30 transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:rotate-3">
                                            {widget.icon}
                                        </div>
                                        <div className="space-y-2 mt-2">
                                            <h3 className="font-heading font-bold text-base lg:text-lg text-shetra-light group-hover:text-white transition-colors">
                                                {widget.title}
                                            </h3>
                                            <p className="text-xs lg:text-sm font-body text-shetra-text-muted leading-relaxed">
                                                {widget.description}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Prominent SOS Section) */}
                    <div className="lg:col-span-5 xl:col-span-4 lg:h-full">
                        <section className="flex flex-col items-center justify-center pt-8 pb-12 lg:py-16 animate-fade-in delay-3 relative h-full bg-shetra-surface/10 border border-shetra-neon/10 rounded-3xl backdrop-blur-md overflow-hidden group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-shetra-neon/10 rounded-full blur-[80px] -z-10 group-hover:bg-shetra-neon/20 transition-colors duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-shetra-neon/5 -z-10" />

                            <div className="flex flex-col items-center gap-6 text-center px-6 mb-12 lg:mb-16">
                                <div className="inline-flex items-center gap-3 bg-shetra-surface/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-shetra-neon/20 shadow-[0_0_20px_rgba(255,46,99,0.15)]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-shetra-neon animate-ping" />
                                    <p className="text-sm font-heading font-bold text-white uppercase tracking-[0.2em]">
                                        Emergency Action
                                    </p>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold font-heading text-shetra-light leading-tight">
                                    Need Help <br className="hidden lg:block" /> Immediately?
                                </h3>
                                <p className="text-shetra-text-muted text-sm lg:text-base max-w-[280px]">
                                    Press the SOS button. We will alert your guardians and emergency services instantly.
                                </p>
                            </div>

                            <SOSButton size="xl" className="scale-100 hover:scale-110 active:scale-95 transition-transform duration-300 shadow-[0_0_80px_rgba(255,46,99,0.3)]" />
                        </section>
                    </div>

                </div>
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
