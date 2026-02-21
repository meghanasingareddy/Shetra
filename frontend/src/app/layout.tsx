import type { Metadata, Viewport } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shetra — Stay Aware. Stay Protected. Stay Shetra.",
  description:
    "Shetra is a women's safety application designed to protect, alert, and empower. SOS emergency triggers, live location sharing, guardian contacts, and helpline access — all in one place.",
  keywords: ["women safety", "SOS", "emergency", "location sharing", "guardian"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0B0C10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body bg-shetra-black text-shetra-light antialiased min-h-dvh">
        <AuthProvider>
          <div className="w-full min-h-dvh relative overflow-hidden">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
