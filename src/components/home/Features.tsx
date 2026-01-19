import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, Layers, Zap } from "lucide-react";

const features = [
    {
        title: "Merkezi Yönetim",
        description: "Tüm dijital varlıklarınız tek bir çatı altında. Toolvana, Shelvyn ve diğerleri.",
        icon: Layers,
    },
    {
        title: "Sistematik Akış",
        description: "Karmaşadan uzak, net ve sürdürülebilir bir içerik ve proje yönetim mimarisi.",
        icon: Grid,
    },
    {
        title: "Fütüristik Vizyon",
        description: "Yapay zeka entegrasyonları ve modern teknolojilerle geleceğe hazır altyapı.",
        icon: Zap,
    },
];

export function Features() {
    return (
        <section className="container py-12 md:py-16 lg:py-20">
            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur border-muted/60">
                        <CardHeader>
                            <feature.icon className="h-10 w-10 text-primary mb-4" />
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
