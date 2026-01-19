"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Optional: prevent touch move events on iOS if needed, but overflow hidden usually suffices for modern browsers
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden'; // Restore default overflow-x hidden for app
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden';
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[80px] items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                        {/* Dark logo for Light Mode */}
                        <div className="dark:hidden h-14 w-auto">
                            <Image src="/logo-dark.svg" alt="Allvao Logo" width={0} height={0} sizes="100vw" className="h-full w-auto object-contain" priority />
                        </div>
                        {/* Light logo for Dark Mode */}
                        <div className="hidden dark:block h-14 w-auto">
                            <Image src="/logo-light.svg" alt="Allvao Logo" width={0} height={0} sizes="100vw" className="h-full w-auto object-contain" priority />
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-auto mr-4">
                    <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projeler</Link>
                    <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">Hakkımızda</Link>
                    <Link href="/about/network" className="transition-colors hover:text-foreground/80 text-foreground/60">Network</Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">İletişim</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button size="sm" className="bg-[#E5DCC3] text-[#2A2D34] hover:bg-[#F0E9D6] transition-transform hover:scale-105 active:scale-95" asChild>
                        <Link href="/waitlist">Waitlist</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Portal into document.body */}
            {mounted && isMenuOpen && createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile Menu"
                    className="md:hidden fixed inset-0 z-[100] bg-background text-foreground animate-in slide-in-from-top-5 fade-in duration-300 flex flex-col w-screen h-screen m-0 p-0"
                >
                    {/* Overlay Header Row */}
                    <div className="container mx-auto px-4 sm:px-6 flex min-h-[80px] flex-none items-center justify-between border-b bg-background">
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                            <div className="dark:hidden h-12 w-auto">
                                <Image src="/logo-dark.svg" alt="Allvao Logo" width={0} height={0} sizes="100vw" className="h-full w-auto object-contain" priority />
                            </div>
                            <div className="hidden dark:block h-12 w-auto">
                                <Image src="/logo-light.svg" alt="Allvao Logo" width={0} height={0} sizes="100vw" className="h-full w-auto object-contain" priority />
                            </div>
                        </Link>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                                aria-label="Close Menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="container mx-auto px-6 py-8 flex-1 flex flex-col gap-8 overflow-y-auto">
                        <nav className="flex flex-col gap-6 text-xl font-light">
                            <Link
                                href="/projects"
                                className="border-b border-border/40 pb-4 text-foreground/80 hover:text-primary transition-colors flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projeler
                                <span className="text-muted-foreground/40 text-sm">→</span>
                            </Link>
                            <Link
                                href="/blog"
                                className="border-b border-border/40 pb-4 text-foreground/80 hover:text-primary transition-colors flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                                <span className="text-muted-foreground/40 text-sm">→</span>
                            </Link>
                            <Link
                                href="/about"
                                className="border-b border-border/40 pb-4 text-foreground/80 hover:text-primary transition-colors flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Hakkımızda
                                <span className="text-muted-foreground/40 text-sm">→</span>
                            </Link>
                            <Link
                                href="/about/network"
                                className="border-b border-border/40 pb-4 text-foreground/80 hover:text-primary transition-colors flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Network
                                <span className="text-muted-foreground/40 text-sm">→</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="border-b border-border/40 pb-4 text-foreground/80 hover:text-primary transition-colors flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                İletişim
                                <span className="text-muted-foreground/40 text-sm">→</span>
                            </Link>
                        </nav>
                        <div className="mt-auto pt-8 pb-12">
                            <Button size="lg" className="w-full h-12 text-lg bg-[#E5DCC3] text-[#2A2D34] hover:bg-[#F0E9D6]" asChild onClick={() => setIsMenuOpen(false)}>
                                <Link href="/waitlist">Waitlist'e Katıl</Link>
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
}
