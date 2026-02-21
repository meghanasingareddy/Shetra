"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/Header";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LocationDetailsPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/location");
    };

    return (
        <div className="min-h-dvh bg-shetra-black">
            <Header title="Add Required Details" showBack />

            <div className="px-5 py-8 animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <Input
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <div className="pt-4">
                        <Button type="submit" fullWidth size="lg">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
