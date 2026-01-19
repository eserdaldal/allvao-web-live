import { Search } from "lucide-react";
import { glossaryTerms } from "@/lib/data/glossary";

export function BlogSidebar() {
    // Pick a random term for the 'Weekly Term' simulation
    const randomIndex = Math.floor(Math.random() * glossaryTerms.length);
    const randomTerm = glossaryTerms[randomIndex];

    return (
        <aside className="space-y-12">
            {/* SEARCH */}
            <div className="relative">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Blog Ara"
                    className="w-full pl-6 pr-4 py-2 bg-transparent border-b border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light"
                />
            </div>

            {/* ROADMAP */}
            <div>
                <h3 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-6">
                    EYLEM TAKVİMİ
                </h3>
                <ul className="space-y-4">
                    <li className="flex gap-3 items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm font-light text-foreground/80">Toolvana: ADR + Env Parity</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-light text-foreground/80">Shelvyn: Stil Rehberi v1</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm font-light text-foreground/80">Omniafeed: Eğitim Serisi</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span className="text-sm font-light text-foreground/80">Allvao: Team Grid Bileşeni</span>
                    </li>
                </ul>
            </div>

            {/* WEEKLY TERM - DYNAMIC */}
            <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-3 border-b border-border/20 pb-2">
                    HAFTALIK TERİM
                </h3>
                <h4 className="text-lg font-normal text-foreground mb-2">{randomTerm.term}</h4>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {randomTerm.definition}
                </p>
            </div>

            {/* PHILOSOPHY NOTE */}
            <div className="pt-8 border-t border-border">
                <blockquote className="text-sm font-light italic text-muted-foreground">
                    "İyi süreç, iyi ekipleri rahat bırakır."
                    <footer className="mt-2 text-xs normal-case not-italic opacity-50">— Eser Daldal</footer>
                </blockquote>
            </div>
        </aside>
    );
}
