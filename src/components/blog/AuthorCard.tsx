import { TeamMember } from "@/lib/data/team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AuthorCardProps {
    author: TeamMember;
}

export function AuthorCard({ author }: AuthorCardProps) {
    if (!author) return null;

    // Initials for avatar fallback
    const initials = author.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
            <Avatar className="h-12 w-12 border border-border">
                <AvatarImage src={`/team/${author.id}.jpg`} alt={author.name} /> {/* Placeholder assumption */}
                <AvatarFallback className="bg-muted text-foreground text-sm font-medium">
                    {initials}
                </AvatarFallback>
            </Avatar>
            <div>
                <h4 className="text-lg font-normal text-foreground">{author.name}</h4>
                <p className="text-sm text-muted-foreground font-light mb-1">{author.role}</p>
                <p className="text-sm text-foreground/80 italic font-light">
                    "{author.tagline}"
                </p>
            </div>
        </div>
    );
}
