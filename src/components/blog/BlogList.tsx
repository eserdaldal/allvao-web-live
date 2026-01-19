import Link from "next/link";
import { BlogPost } from "@/lib/data/blog-posts";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogListProps {
    posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-[#2A2D34]/60 font-light">Bu kategoride henüz yazı bulunmuyor.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
                    <Card className="h-full bg-card border-border hover:shadow-md hover:bg-[#E5DCC3]/10 hover:border-[#E5DCC3]/30 transition-all duration-300 flex flex-col">
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="outline" className="font-normal text-muted-foreground border-border bg-transparent">
                                    {post.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground font-light">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-normal text-foreground group-hover:text-primary leading-tight transition-colors">
                                {post.title}
                            </h3>
                        </CardHeader>
                        <CardContent className="flex-1 pb-4">
                            <p className="text-muted-foreground font-light text-sm line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </CardContent>
                        <CardFooter className="pt-0 text-xs text-muted-foreground font-light mt-auto">
                            {post.date}
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
