"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getGuardians, deleteGuardian, Guardian } from "@/lib/firestore";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function ContactsPage() {
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

    const handleDelete = async (id: string) => {
        await deleteGuardian(id);
        setGuardians((prev) => prev.filter((g) => g.id !== id));
    };

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="Saved Guardians" showBack />

            <div className="px-5 py-4 space-y-3 animate-fade-in">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-6 h-6 border-2 border-shetra-neon border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : guardians.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-16 h-16 rounded-2xl bg-shetra-surface border border-shetra-border flex items-center justify-center mb-4">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B8D97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                            </svg>
                        </div>
                        <p className="font-body text-shetra-text-muted text-sm">
                            No guardians added yet
                        </p>
                    </div>
                ) : (
                    guardians.map((guardian, index) => (
                        <Card
                            key={guardian.id}
                            className="flex items-center justify-between animate-slide-up"
                            style={{ animationDelay: `${index * 0.08}s` }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-shetra-neon/10 border border-shetra-neon/20 flex items-center justify-center font-heading font-bold text-sm text-shetra-neon">
                                    {guardian.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-sm text-shetra-light">
                                        {guardian.name}
                                    </p>
                                    <p className="text-xs font-body text-shetra-text-muted mt-0.5">
                                        {guardian.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Call */}
                                <a
                                    href={`tel:${guardian.phone.replace(/\s/g, "")}`}
                                    className="w-9 h-9 rounded-full bg-shetra-surface flex items-center justify-center text-shetra-text-muted hover:text-shetra-neon transition-colors"
                                    aria-label={`Call ${guardian.name}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </a>
                                {/* Delete */}
                                <button
                                    onClick={() => guardian.id && handleDelete(guardian.id)}
                                    className="w-9 h-9 rounded-full bg-shetra-surface flex items-center justify-center text-shetra-text-muted hover:text-red-400 transition-colors cursor-pointer"
                                    aria-label={`Remove ${guardian.name}`}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                                    </svg>
                                </button>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {/* Add Guardian Button */}
            <div className="px-5 pt-4 pb-6">
                <Button
                    fullWidth
                    size="lg"
                    onClick={() => router.push("/dashboard/contacts/add")}
                >
                    Add Your Guardian
                </Button>
            </div>
        </div>
    );
}
