import { Metadata } from "next";
import { Suspense } from "react";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogList } from "@/components/blog/BlogList";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
    title: "Blog - Analizler, Haberler ve Şirket Kültürü | Allvao",
    description: "Allvao ekosisteminden en güncel haberler, tasarım felsefemiz ve sektör analizleri.",
};

interface BlogPageProps {
    searchParams: {
        category?: string;
    };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
    const category = searchParams.category;

    const filteredPosts = category
        ? blogPosts.filter((post) => post.category === category)
        : blogPosts;

    const sortedPosts = [...filteredPosts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className="min-h-screen py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-2xl">
                    <h1 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
                        Blog
                    </h1>
                    <p className="text-xl font-light text-muted-foreground leading-relaxed">
                        Teknoloji, tasarım ve girişimcilik üzerine derinlemesine analizler ve güncellemeler.
                    </p>
                </div>

                <Suspense fallback={<div className="h-10 w-full animate-pulse bg-muted/20 rounded-full mb-12" />}>
                    <CategoryFilter />
                </Suspense>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8">
                        <BlogList posts={sortedPosts} />
                    </div>

                    {/* Divider & Sidebar (4 cols) */}
                    <div className="lg:col-span-4 relative">
                        {/* Vertical Separator (Only visible on large screens) */}
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-border" />

                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </main>
    );
}
