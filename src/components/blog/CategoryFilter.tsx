"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BlogCategory } from "@/lib/data/blog-posts";

const categories: (BlogCategory | 'Tümü')[] = [
    'Tümü',
    'Sektör',
    'Şirket',
    'Proje',
    'Ekip',
    'Tasarım',
    'Sözlük'
];

export function CategoryFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentCategory = searchParams.get("category") || "Tümü";

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams);
        if (category === "Tümü") {
            params.delete("category");
        } else {
            params.set("category", category);
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={cn(
                        "px-4 py-2 rounded-full text-sm font-light transition-all duration-200 border",
                        currentCategory === cat
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                    )}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
