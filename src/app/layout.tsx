import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import MixpanelProvider from "@/components/providers/MixpanelProvider";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    display: "swap", // optional: helps improve font loading
});  

export const metadata: Metadata = {
  title: "Nexora TLX - The Future of STEAM Education",
  description: "Shaping The Future of STEAM Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
            className={`${sora.variable} antialiased overflow-x-hidden`}
        >
            <MixpanelProvider>
                {children}
                <Toaster position="bottom-right" richColors />
            </MixpanelProvider>
        </body>
    </html>
  );
}
