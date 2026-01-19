import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Shelvyn - Güncel Teknoloji Haberleri ve Rehberler | Allvao",
    description: "Teknoloji dünyasına dair en güncel haberler, ürün incelemeleri ve adım adım rehberlerle Türkçe içerik odaklı teknoloji platformu.",
};

export default function ShelvynPage() {
    return (
        <main className="min-h-screen py-16 lg:py-20">
            <div className="container mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-16">
                    <Button variant="ghost" className="mb-8 pl-0 text-[#2A2D34]/60 dark:text-[#E5DCC3]/60 hover:text-[#2A2D34] dark:hover:text-[#E5DCC3] hover:bg-transparent" asChild>
                        <Link href="/#projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Projelere Dön
                        </Link>
                    </Button>
                    <h1 className="text-4xl lg:text-5xl font-light text-[#2A2D34] dark:text-[#E5DCC3] mb-6">
                        Shelvyn
                    </h1>
                    <p className="text-xl font-light text-[#2A2D34]/80 dark:text-[#F5F5F7]/90 leading-relaxed max-w-2xl">
                        Teknoloji dünyasını sade, anlaşılır ve Türkçe öncelikli bir dille ele alan içerik ve inceleme platformu.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-6 border-b border-[#E5DCC3] pb-4">
                                Proje Özeti
                            </h2>
                            <p className="text-[#2A2D34]/80 dark:text-[#F5F5F7]/80 leading-relaxed">
                                Shelvyn, karmaşık teknoloji dünyasını son kullanıcı için basitleştirmeyi hedefler.
                                Haberler, detaylı ürün incelemeleri ve adım adım rehberler ile teknoloji okuryazarlığını artırır.
                                Önceliği her zaman kaliteli Türkçe içerik üretimidir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-6 border-b border-[#E5DCC3] pb-4">
                                Değer Önerisi
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-2">Son Kullanıcı İçin</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[#2A2D34]/80 dark:text-[#A1A1AA]">
                                        <li>Güncel ve anlaşılır Türkçe kaynak</li>
                                        <li>Mobil uyumlu, hızlı arayüz</li>
                                        <li>SEO odaklı kolay gezinim</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-2">İş Ortakları İçin</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[#2A2D34]/80 dark:text-[#A1A1AA]">
                                        <li>Türkçe pazarına doğrudan erişim</li>
                                        <li>Teknoloji markalarıyla işbirliği köprüsü</li>
                                        <li>Ortak etkinlik ve röportaj fırsatları</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-2xl font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-6 border-b border-[#E5DCC3] pb-4">
                                Ekosistem Konumu
                            </h2>
                            <div className="bg-[#F7F6F2] dark:bg-[#E5DCC3]/5 p-8 rounded-lg border border-[#E5DCC3]/20">
                                <p className="mb-4 text-[#2A2D34]/80 dark:text-[#F5F5F7]/90">
                                    <strong className="font-medium text-[#2A2D34] dark:text-[#E5DCC3]">Domain:</strong>{" "}
                                    <Link
                                        href="https://shelvyn.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#2A2D34] dark:text-[#E5DCC3] hover:text-[#2A2D34]/70 dark:hover:text-[#E5DCC3]/80 border-b border-[#E5DCC3] hover:border-[#2A2D34] dark:hover:border-[#E5DCC3] transition-colors pb-0.5"
                                    >
                                        shelvyn.com
                                    </Link>
                                </p>
                                <p className="text-[#2A2D34]/80 dark:text-[#F5F5F7]/80 leading-relaxed">
                                    Allvao ekosisteminin teknoloji dikeyi olarak konumlanır. Kullanıcı deneyimi (UX)
                                    ve içerik kalitesi konusunda topluluğun standartlarını belirler.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-6 border-b border-[#E5DCC3] pb-4">
                                Yayın Politikası
                            </h2>
                            <ul className="space-y-4 text-[#2A2D34]/80 dark:text-[#A1A1AA]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>Türkçe içerik ana odaktır.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>İncelemelerde objektiflik esastır.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>Kaynak belirtimi zorunludur.</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
