"use client";

import Header from "@/components/ui/Header";
import Card from "@/components/ui/Card";

const helplines = [
    { name: "Police", number: "100", color: "#FF2A5F", icon: "shield" },
    { name: "Pregnancy Medic", number: "102", color: "#EC4899", icon: "heart" },
    { name: "Ambulance", number: "108", color: "#10B981", icon: "activity" },
    { name: "Fire Service", number: "101", color: "#F59E0B", icon: "flame" },
    { name: "Women Helpline", number: "1091", color: "#D13A5C", icon: "users" },
    { name: "Child Helpline", number: "1098", color: "#8B5CF6", icon: "smile" },
];

export default function HelplinePage() {
    return (
        <div className="min-h-dvh bg-shetra-black relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-shetra-neon/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <Header title="Emergency Contacts" showBack />

                <div className="px-5 py-6 space-y-4 animate-fade-in relative">
                    <p className="text-shetra-text-muted text-sm font-body mb-6 text-center">
                        Tap any number for immediate assistance
                    </p>

                    {helplines.map((item, index) => (
                        <Card
                            key={item.number}
                            hoverable
                            glass
                            className={`flex items-center justify-between animate-slide-up`}
                            style={{ animationDelay: `${index * 0.1}s` } as React.CSSProperties}
                        >
                            <div className="flex items-center gap-4">
                                {/* Color indicator / Icon placeholder */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-inner relative overflow-hidden group"
                                    style={{ backgroundColor: item.color + "15", border: `1px solid ${item.color}30` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span
                                        className="font-heading font-bold text-sm z-10"
                                        style={{ color: item.color, textShadow: `0 0 10px ${item.color}50` }}
                                    >
                                        {item.number}
                                    </span>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="font-heading font-semibold text-base text-shetra-light tracking-wide">
                                        {item.name}
                                    </p>
                                    <p className="text-xs font-body text-shetra-text-muted mt-1 uppercase tracking-wider flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        24/7 Available
                                    </p>
                                </div>
                            </div>

                            {/* Call button */}
                            <a
                                href={`tel:${item.number}`}
                                className="w-12 h-12 rounded-full bg-shetra-dark/50 border border-shetra-border flex items-center justify-center text-shetra-light hover:text-white hover:bg-shetra-neon hover:border-shetra-neon hover:shadow-[0_0_20px_rgba(255,42,95,0.4)] transition-all duration-300 active:scale-95"
                                aria-label={`Call ${item.name}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </a>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
