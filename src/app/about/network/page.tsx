import { Metadata } from "next";
import { TeamGrid } from "@/components/about/TeamGrid";

export const metadata: Metadata = {
    title: "Allvao Ağı - Uzman Ekipler ve Liderler | Allvao",
    description: "Allvao ekosistemine hayat veren, farklı disiplinlerden bir araya gelmiş uzman kadroyu tanıyın.",
};

export default function NetworkPage() {
    return (
        <main className="min-h-screen py-16 lg:py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl lg:text-5xl font-light text-foreground mb-6">
                        Uzmanlık Ağı
                    </h1>
                    <p className="text-xl font-light text-muted-foreground leading-relaxed">
                        Teknolojiden finansa, tasarımdan hukuka; her biri kendi alanında derinleşmiş,
                        Allvao'nun "sakin üretim" vizyonunu paylaşan ekip arkadaşlarımız.
                    </p>
                </div>

                <TeamGrid />
            </div>
        </main>
    );
}
