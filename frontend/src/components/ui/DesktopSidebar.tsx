"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label: "Home",
        href: "/dashboard",
        icon: (active: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        label: "Location",
        href: "/dashboard/location",
        icon: (active: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "SOS",
        href: "#sos",
        icon: (_active?: boolean) => (
            <div className="w-12 h-12 rounded-full bg-shetra-neon flex items-center justify-center shadow-[0_0_20px_rgba(255,46,99,0.5)] animate-sos-pulse transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                <span className="font-heading font-bold text-white text-sm tracking-wider">
                    SOS
                </span>
            </div>
        ),
        isSOS: true,
    },
    {
        label: "Contacts",
        href: "/dashboard/contacts",
        icon: (active: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
    },
    {
        label: "Profile",
        href: "/dashboard/profile",
        icon: (active: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

export default function DesktopSidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-60 h-dvh sticky top-0 bg-shetra-dark/50 backdrop-blur-xl border-r border-shetra-border z-40 py-6 px-4 overflow-y-auto">
            {/* Logo area */}
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-shetra-neon to-purple-600 flex items-center justify-center shadow-lg shadow-shetra-neon/20">
                    <img src="/logoonly.png" alt="Logo Icon" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <h1 className="font-heading font-bold text-2xl tracking-wide bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Shetra
                </h1>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

                    if (item.isSOS) {
                        return (
                            <div key="sos" className="my-6 flex justify-center w-full">
                                {item.icon!(false)}
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group ${isActive
                                ? "bg-shetra-neon/10 text-shetra-neon shadow-[inset_0_0_15px_rgba(255,46,99,0.05)] border border-shetra-neon/20"
                                : "text-shetra-text-muted hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <div className={`${isActive ? "scale-110" : "group-hover:scale-110"} transition-transform duration-300`}>
                                {item.icon!(isActive)}
                            </div>
                            <span className="font-body font-medium text-[15px]">
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section (e.g., Settings or User mini-profile) */}
            <div className="mt-8 pt-6 border-t border-white/5 px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-shetra-surface border border-shetra-border flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shetra-text-muted">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">Guardian</div>
                    <div className="text-xs text-shetra-text-muted truncate">Stay protected</div>
                </div>
            </div>
        </aside>
    );
}
