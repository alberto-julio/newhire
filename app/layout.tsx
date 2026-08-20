import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import SideNav from "@/components/SideNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "New Hire Guide",
  description: "Used to help new hires with their on boarding process, act as a supplement for regular training",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Upload", href: "/upload" },
  { name: "Employees", href: "/employees" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Top Navbar */}
        <header className="sticky top-0 z-50 w-full">
          <nav className="flex flex-row gap-6 p-4 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </header>

        <div className="flex flex-1 flex-row">
          <SideNav />
          <main className="flex-1">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}