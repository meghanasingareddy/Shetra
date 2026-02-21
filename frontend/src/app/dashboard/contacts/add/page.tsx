"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { addGuardian } from "@/lib/firestore";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function AddGuardianPage() {
    const router = useRouter();
    const { user } = useAuth();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;
        setError("");
        setLoading(true);
        try {
            await addGuardian({ name, phone, userId: user.uid });
            router.push("/dashboard/contacts");
        } catch {
            setError("Failed to add guardian. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="Add Guardian" showBack />

            <div className="px-5 py-8 animate-fade-in">
                {error && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 animate-slide-up">
                        <p className="text-sm text-red-400 font-body">{error}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <Input
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <div className="pt-4">
                        <Button type="submit" fullWidth size="lg" disabled={loading}>
                            {loading ? "Adding..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
