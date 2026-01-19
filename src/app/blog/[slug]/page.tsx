import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data/blog-posts";
import { teamMembers } from "@/lib/data/team";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { Badge } from "@/components/ui/badge";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | Allvao Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const mainAuthor = teamMembers.find((m) => m.id === post.authorId);

    // Find additional authors if any
    const additionalTeamMembers = post.additionalAuthors
        ? teamMembers.filter(m => post.additionalAuthors?.includes(m.id))
        : [];

    // Combine all authors
    const allAuthors = mainAuthor
        ? [mainAuthor, ...additionalTeamMembers]
        : additionalTeamMembers;

    return (
        <main className="min-h-screen py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8">
                        {/* Back Button */}
                        <Button variant="ghost" className="mb-8 pl-0 text-muted-foreground hover:text-foreground hover:bg-transparent" asChild>
                            <Link href="/blog">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Blog'a Dön
                            </Link>
                        </Button>

                        <article>
                            {/* Header */}
                            <div className="mb-12">
                                <div className="flex gap-2 mb-6">
                                    <Badge variant="outline" className="font-normal text-muted-foreground border-border">
                                        {post.category}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground font-light flex items-center">
                                        {post.date} • {post.readTime} okuma
                                    </span>
                                </div>
                                <h1 className="text-3xl lg:text-4xl font-normal text-foreground leading-tight mb-6">
                                    {post.title}
                                </h1>

                                {post.featuredImage && (
                                    <div className="w-full max-w-2xl mx-auto mb-8 aspect-[21/9] bg-[#F7F6F2] border border-[#E5DCC3]/50 rounded-sm overflow-hidden relative">
                                        <Image
                                            src={post.featuredImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                <p className="text-xl font-light text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
                                    {post.excerpt}
                                </p>
                            </div>

                            {/* Content Rendered with ReactMarkdown */}
                            <div className="mb-16">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ node, ...props }) => <h1 className="text-3xl font-normal mt-10 mb-6 text-foreground" {...props} />,
                                        h2: ({ node, ...props }) => <h2 className="text-2xl font-normal mt-10 mb-4 text-foreground" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xl font-normal mt-8 mb-3 text-foreground" {...props} />,
                                        p: ({ node, ...props }) => <p className="mb-6 leading-relaxed text-muted-foreground font-light" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2 font-light" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 text-muted-foreground space-y-2 font-light" {...props} />,
                                        li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                        strong: ({ node, ...props }) => <strong className="font-medium text-foreground" {...props} />,
                                        blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground my-8 py-1" {...props} />,
                                        a: ({ node, ...props }) => <a className="text-foreground underline decoration-[#E5DCC3] underline-offset-4 hover:text-primary transition-colors" {...props} />,
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>

                            {/* CTA for Network Page (Specific to Team Post) */}
                            {post.slug === 'allvao-ekibini-taniyin' && (
                                <div className="mb-16 p-6 md:p-8 bg-[#F7F6F2] dark:bg-card border border-[#E5DCC3]/50 rounded-sm flex flex-col items-center text-center gap-4">
                                    <h3 className="text-xl font-normal text-foreground">
                                        Ekibimizin tamamını yakından tanıyın
                                    </h3>
                                    <p className="text-muted-foreground font-light max-w-lg mb-2">
                                        Allvao Network dizininde tüm ekibi projelerine göre filtreleyerek inceleyebilirsiniz.
                                    </p>
                                    <Button asChild variant="outline" className="border-[#2A2D34]/20 hover:bg-[#E5DCC3]/20">
                                        <Link href="/about/network">
                                            Allvao Network'ü Keşfet
                                        </Link>
                                    </Button>
                                </div>
                            )}

                            {/* Authors Section */}
                            {allAuthors.length > 0 && (
                                <div className="space-y-6 pt-8 border-t border-border">
                                    <h3 className="text-xs font-normal uppercase tracking-widest text-muted-foreground mb-4">
                                        KATKI SAĞLAYANLAR
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        {allAuthors.map(author => (
                                            <div key={author.id} className="[&>div]:mt-0 [&>div]:pt-0 [&>div]:border-0">
                                                <AuthorCard author={author} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>
                    </div>

                    {/* Divider & Sidebar (4 cols) */}
                    <div className="lg:col-span-4 relative sticky top-24">
                        {/* Vertical Separator */}
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-border" />

                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </main>
    );
}
