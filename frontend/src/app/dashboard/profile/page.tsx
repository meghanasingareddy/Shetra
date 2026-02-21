"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getUserProfile, saveUserProfile } from "@/lib/firestore";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
    const router = useRouter();
    const { user, logout } = useAuth();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (user) {
            getUserProfile(user.uid).then((p) => {
                if (p) {
                    setName(p.name);
                    setPhone(p.phone);
                } else {
                    setName(user.displayName || "");
                }
            });
        }
    }, [user]);

    const handleSave = async () => {
        if (!user) return;
        setSaving(true);
        await saveUserProfile(user.uid, {
            name,
            phone,
            email: user.email || "",
        });
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleLogout = async () => {
        await logout();
        router.push("/auth/login");
    };

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="User Profile" showBack />

            <div className="px-5 py-8 animate-fade-in">
                {/* Avatar */}
                <div className="flex flex-col items-center mb-10">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-shetra-neon/10 border-2 border-shetra-neon/30 flex items-center justify-center">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF2E63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                    </div>
                    {user?.email && (
                        <p className="mt-3 text-xs font-body text-shetra-text-muted">{user.email}</p>
                    )}
                </div>

                {/* Form */}
                <div className="space-y-5 animate-fade-in delay-1">
                    <Input
                        placeholder="User Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* Success */}
                {saved && (
                    <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 animate-slide-up">
                        <p className="text-sm text-green-400 font-body text-center">Profile saved!</p>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-10 space-y-3 animate-fade-in delay-2">
                    <Button fullWidth size="lg" onClick={handleSave} disabled={saving}>
                        {saving ? "Saving..." : "Save"}
                    </Button>
                    <Button
                        variant="danger"
                        fullWidth
                        size="md"
                        onClick={handleLogout}
                    >
                        Log out
                    </Button>
                </div>
            </div>
        </div>
    );
}
