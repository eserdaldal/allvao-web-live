import Link from "next/link";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-8">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row">
                {/* Copyright & Source */}
                <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
                    <div className="text-sm text-muted-foreground">
                        © 2026 Allvao. All rights reserved.
                    </div>
                    <div className="text-xs text-muted-foreground/60">
                        <span className="font-medium underline underline-offset-4">Allvao Ekosistemi</span> · Kaynak kodları{" "}
                        <Link
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </Link>{" "}
                        üzerinde.
                    </div>
                </div>

                {/* Social & Legal */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    {/* Social Media */}
                    <div className="flex items-center gap-4">
                        <Link href="#" className="p-2 rounded-full hover:bg-[#E5DCC3]/20 text-muted-foreground hover:text-[#2A2D34] dark:hover:text-[#E5DCC3] transition-colors">
                            <Youtube className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full hover:bg-[#E5DCC3]/20 text-muted-foreground hover:text-[#2A2D34] dark:hover:text-[#E5DCC3] transition-colors">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full hover:bg-[#E5DCC3]/20 text-muted-foreground hover:text-[#2A2D34] dark:hover:text-[#E5DCC3] transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full hover:bg-[#E5DCC3]/20 text-muted-foreground hover:text-[#2A2D34] dark:hover:text-[#E5DCC3] transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                    {/* Legal Links */}
                    <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <Link href="/about/network" className="hover:underline hover:text-foreground transition-colors">Network</Link>
                        <Link href="/privacy" className="hover:underline hover:text-foreground transition-colors">Gizlilik Politikası</Link>
                        <Link href="/terms" className="hover:underline hover:text-foreground transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
