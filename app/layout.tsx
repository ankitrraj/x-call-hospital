import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HospitalProvider } from "@/context/HospitalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WithCaring - Hospital Management Platform",
  description: "India's leading hospital management platform for seamless healthcare operations",
  keywords: "hospital management, healthcare, appointments, patient management, WithCaring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <HospitalProvider>
          {children}
        </HospitalProvider>
      </body>
    </html>
  );
}
