"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {
        label: "Home",
        href: "/dashboard",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        label: "Location",
        href: "/dashboard/location",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "SOS",
        href: "#sos",
        icon: () => null,
        isSOS: true,
    },
    {
        label: "Contacts",
        href: "/dashboard/contacts",
        icon: (active: boolean) => (
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50">
            <div className="bg-shetra-dark/95 backdrop-blur-lg border-t border-shetra-border px-2 pb-[env(safe-area-inset-bottom)]">
                <div className="flex items-center justify-around h-16 relative">
                    {navItems.map((item) => {
                        if (item.isSOS) {
                            return (
                                <div key="sos" className="relative -mt-7">
                                    <button
                                        className="w-[58px] h-[58px] rounded-full bg-shetra-neon flex items-center justify-center shadow-[0_0_25px_rgba(255,46,99,0.4)] animate-sos-pulse transition-transform active:scale-90 cursor-pointer"
                                        aria-label="SOS Emergency"
                                    >
                                        <span className="font-heading font-extrabold text-white text-sm tracking-widest">
                                            SOS
                                        </span>
                                    </button>
                                </div>
                            );
                        }

                        const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex flex-col items-center gap-0.5 py-1 px-3 transition-colors ${isActive ? "text-shetra-neon" : "text-shetra-text-muted"
                                    }`}
                            >
                                {item.icon!(isActive)}
                                <span className="text-[10px] font-body font-medium mt-0.5">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
