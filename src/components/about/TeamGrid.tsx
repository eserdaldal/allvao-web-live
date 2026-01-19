"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { teamMembers, ProjectId } from "@/lib/data/team";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type FilterId = 'all' | ProjectId;

export function TeamGrid() {
    const [filter, setFilter] = useState<FilterId>('all');

    const filteredMembers = filter === 'all'
        ? teamMembers
        : teamMembers.filter(member => member.projects.includes(filter as ProjectId));

    const filters: { id: FilterId; label: string }[] = [
        { id: 'all', label: 'Tümü' },
        { id: 'allvao', label: 'Allvao Core' },
        { id: 'omniafeed', label: 'Omniafeed' },
        { id: 'shelvyn', label: 'Shelvyn' },
        { id: 'toolvana', label: 'Toolvana' },
    ];

    return (
        <section className="space-y-12">
            {/* Filter */}
            <div className="flex flex-wrap gap-4 justify-center">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-light transition-all duration-200 border",
                            filter === f.id
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                        )}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredMembers.map((member) => (
                    <Dialog key={member.id}>
                        <DialogTrigger asChild>
                            <div className="h-full cursor-pointer group">
                                <div className="h-full p-6 rounded-sm bg-card border border-border transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 flex flex-col items-center text-center">
                                    {/* Image Container with "Sakin Taş" Hover Effects */}
                                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-[#E5DCC3] transition-colors duration-500">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                                            sizes="(max-width: 768px) 128px, 128px"
                                        />
                                        {/* Soft Overlay */}
                                        <div className="absolute inset-0 bg-[#E5DCC3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>

                                    <div className="mb-2 flex items-center justify-center gap-2">
                                        <h3 className="text-lg font-normal text-foreground">{member.name}</h3>
                                        {member.type === 'human' && (
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-primary mb-0.5" title="Allvao Kurucu" />
                                        )}
                                    </div>
                                    <p className="text-sm text-primary font-normal mb-1">{member.role}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4 opacity-70">
                                        {member.type === 'persona' ? 'Sanal Uzman' : 'Kurucu'}
                                    </p>
                                    <p className="text-sm font-light text-muted-foreground italic mt-auto leading-relaxed">
                                        "{member.tagline}"
                                    </p>
                                </div>
                            </div>
                        </DialogTrigger>

                        {/* Modal Content - Sakin Taş Premium */}
                        <DialogContent className="max-w-4xl bg-[#FBF9F6] border-none shadow-2xl p-0 overflow-hidden gap-0">
                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left/Top Side - Image */}
                                <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-[#E5DCC3]/20">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-center grayscale-0 transition-all duration-1000"
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F6] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#FBF9F6] opacity-90" />
                                </div>

                                {/* Right/Bottom Side - Details */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <DialogTitle className="text-3xl font-light text-[#2A2D34]">
                                                {member.name}
                                            </DialogTitle>
                                            {member.type === 'human' && (
                                                <span className="flex h-2 w-2 rounded-full bg-primary" title="Allvao Kurucu" />
                                            )}
                                        </div>
                                        <DialogDescription className="text-lg text-primary/80 font-normal">
                                            {member.role}
                                        </DialogDescription>
                                    </div>

                                    {/* Bio */}
                                    <div className="mb-8">
                                        <p className="text-[#2A2D34]/80 leading-relaxed font-light text-base md:text-lg">
                                            "{member.bio}"
                                        </p>
                                    </div>

                                    {/* Expertise Badges */}
                                    <div className="mb-8">
                                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium opacity-60">Uzmanlık Alanları</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.expertise.map((exp, i) => (
                                                <Badge
                                                    key={i}
                                                    variant="secondary"
                                                    className="bg-[#E5DCC3] hover:bg-[#D4CBB0] text-[#2A2D34] font-normal px-3 py-1 text-sm rounded-md transition-colors"
                                                >
                                                    {exp}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Socials & Projects */}
                                    <div className="mt-auto pt-6 border-t border-[#2A2D34]/10 flex flex-wrap items-center justify-between gap-4">
                                        {/* Social Links */}
                                        <div className="flex gap-4">
                                            {member.socials.linkedin && (
                                                <Link href={member.socials.linkedin} target="_blank" className="text-sm text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-0.5">
                                                    LinkedIn
                                                </Link>
                                            )}
                                            {member.socials.twitter && (
                                                <Link href={member.socials.twitter} target="_blank" className="text-sm text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-0.5">
                                                    X (Twitter)
                                                </Link>
                                            )}
                                            {member.socials.email && (
                                                <Link href={`mailto:${member.socials.email}`} className="text-sm text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-0.5">
                                                    Email
                                                </Link>
                                            )}
                                            {member.socials.github && (
                                                <Link href={member.socials.github} target="_blank" className="text-sm text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-0.5">
                                                    GitHub
                                                </Link>
                                            )}
                                            {member.socials.instagram && (
                                                <Link href={member.socials.instagram} target="_blank" className="text-sm text-muted-foreground hover:text-primary border-b border-transparent hover:border-primary transition-all duration-300 pb-0.5">
                                                    Instagram
                                                </Link>
                                            )}
                                            {!member.socials.linkedin && !member.socials.twitter && !member.socials.email && !member.socials.github && !member.socials.instagram && (
                                                <span className="text-sm text-muted-foreground/50 italic">Sosyal medya profili yok</span>
                                            )}
                                        </div>

                                        {/* Project Tags (Mini) */}
                                        <div className="flex gap-1">
                                            {member.projects.map((p) => (
                                                <span key={p} className="text-[10px] uppercase text-muted-foreground/60 border border-border px-1.5 py-0.5 rounded-sm">
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </section>
    );
}
