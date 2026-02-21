"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

export default function LocationPage() {
    const router = useRouter();

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="Location Tracker" showBack showSettings />

            <div className="px-5 py-4 animate-fade-in">
                {/* Map placeholder */}
                <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-shetra-border bg-shetra-surface">
                    {/* Dark styled map simulation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-shetra-dark to-shetra-surface">
                        {/* Grid lines */}
                        <div className="absolute inset-0 opacity-10">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="absolute w-full h-px bg-shetra-text-muted"
                                    style={{ top: `${(i + 1) * 8}%` }}
                                />
                            ))}
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={`v-${i}`}
                                    className="absolute h-full w-px bg-shetra-text-muted"
                                    style={{ left: `${(i + 1) * 12}%` }}
                                />
                            ))}
                        </div>

                        {/* Road-like lines */}
                        <div className="absolute top-[30%] left-0 w-full h-0.5 bg-shetra-text-muted/20 rotate-12" />
                        <div className="absolute top-[50%] left-[10%] w-[80%] h-0.5 bg-shetra-text-muted/15" />
                        <div className="absolute top-[20%] left-[40%] w-0.5 h-[60%] bg-shetra-text-muted/20 rotate-6" />
                        <div className="absolute top-[35%] left-[20%] w-[40%] h-0.5 bg-shetra-text-muted/15 -rotate-6" />
                        <div className="absolute top-[65%] left-[30%] w-[50%] h-0.5 bg-shetra-text-muted/15 rotate-3" />

                        {/* Location pin */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                            {/* Pin shadow */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-6 h-2 bg-shetra-neon/30 rounded-full blur-sm" />
                            {/* Pin */}
                            <svg width="36" height="44" viewBox="0 0 24 30" fill="none">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0z"
                                    fill="#FF2E63"
                                />
                                <circle cx="12" cy="12" r="5" fill="#0B0C10" />
                                <circle cx="12" cy="12" r="2.5" fill="#FF2E63" />
                            </svg>
                        </div>

                        {/* Accuracy circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-shetra-neon/20 bg-shetra-neon/5 animate-sos-pulse" />
                    </div>

                    {/* Map type badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-shetra-dark/80 backdrop-blur-sm border border-shetra-border text-[10px] font-body text-shetra-text-muted">
                        Live
                    </div>
                </div>

                {/* Location info */}
                <div className="mt-5 p-4 rounded-2xl bg-shetra-surface/80 border border-shetra-border animate-fade-in delay-1">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-shetra-neon/10 flex items-center justify-center shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-heading font-semibold text-sm text-shetra-light">
                                Current Location
                            </p>
                            <p className="text-xs font-body text-shetra-text-muted mt-0.5">
                                Koramangala, Bangalore, India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="mt-5 space-y-3 animate-fade-in delay-2">
                    <Button fullWidth size="lg">
                        Share Live Location
                    </Button>
                    <Button
                        variant="secondary"
                        fullWidth
                        size="md"
                        onClick={() => router.push("/dashboard/location/details")}
                    >
                        Add Required Details
                    </Button>
                </div>
            </div>
        </div>
    );
}
