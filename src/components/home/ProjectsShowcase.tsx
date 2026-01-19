import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        title: "Omniafeed",
        subtitle: "Finansın Şeffaf Yüzü",
        description: "Tarafsız haber, analiz ve veri kaynağı. Finansal okuryazarlığı artıran şeffaf ekosistem.",
        logo: "/omniafeed_logo.png",
        href: "/projects/omniafeed",
    },
    {
        title: "Toolvana",
        subtitle: "Akıllı Çözümler Atölyesi",
        description: "Günlük dijital ihtiyaçlar için AI destekli pratik araçlar ve verimlilik çözümleri.",
        logo: "/ToolVana_logo.png",
        href: "/projects/toolvana",
    },
    {
        title: "Shelvyn",
        subtitle: "Teknolojiye Yerel Bakış",
        description: "Türkçe teknoloji kütüphanesi. Yerel kaynakları küresel standartlarla buluşturan arşiv.",
        logo: "/Shelvyn_Logo.png",
        href: "/projects/shelvyn",
    },
];

export function ProjectsShowcase() {
    return (
        <section id="projects" className="container py-16 md:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-normal tracking-tighter md:text-4xl mb-4">Girişimlerimiz</h2>
                <p className="text-muted-foreground text-lg">Allvao çatısı altındaki uzmanlık alanları.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col h-full bg-card border-border hover:shadow-lg transition-all duration-300 hover:bg-[#E5DCC3]/10 hover:border-[#E5DCC3]/30">
                        <CardHeader className="flex-1 pb-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-12 relative w-auto min-w-[120px]">
                                    <Image
                                        src={project.logo}
                                        alt={`${project.title} Logo`}
                                        fill
                                        className="object-contain object-left"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <CardDescription className="text-primary font-medium mt-1">
                                {project.subtitle}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-muted-foreground">{project.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full gap-2 group bg-transparent border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                <Link href={project.href}>
                                    İncele <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
