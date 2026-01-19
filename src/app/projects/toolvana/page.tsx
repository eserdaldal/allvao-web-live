import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Toolvana - AI Destekli Pratik Araçlar | Allvao",
    description: "Günlük dijital ihtiyaçlar için yapay zeka destekli, hızlı ve pratik araçlar sunan teknoloji platformu.",
};

export default function ToolvanaPage() {
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
                        Toolvana
                    </h1>
                    <p className="text-xl font-light text-[#2A2D34]/80 dark:text-[#F5F5F7]/90 leading-relaxed max-w-2xl">
                        İş akışlarını hızlandırmak ve günlük sorunları çözmek için tasarlanmış AI destekli araç seti.
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
                                Toolvana, modern dijital ihtiyaçlara anlık çözümler sunar. Next.js altyapısı ve
                                yapay zeka entegrasyonları ile güçlendirilen platform, karmaşık işlemleri
                                basit, hızlı ve erişilebilir araçlara dönüştürür.
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
                                        <li>Hızlı ve güvenilir online araçlar</li>
                                        <li>Türkçe ve İngilizce dil desteği</li>
                                        <li>Kayıt gerektirmeyen pratik kullanım</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-2">İş Ortakları İçin</h3>
                                    <ul className="list-disc list-inside space-y-2 text-[#2A2D34]/80 dark:text-[#A1A1AA]">
                                        <li>Ölçeklenebilir API entegrasyonları</li>
                                        <li>Sürdürülebilir teknoloji altyapısı</li>
                                        <li>Gelir paylaşımı modelleri</li>
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
                                        href="https://toolvana.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#2A2D34] dark:text-[#E5DCC3] hover:text-[#2A2D34]/70 dark:hover:text-[#E5DCC3]/80 border-b border-[#E5DCC3] hover:border-[#2A2D34] dark:hover:border-[#E5DCC3] transition-colors pb-0.5"
                                    >
                                        toolvana.app
                                    </Link>
                                </p>
                                <p className="text-[#2A2D34]/80 dark:text-[#F5F5F7]/80 leading-relaxed">
                                    Allvao'nun SaaS ve araç geliştirme laboratuvarı olarak işlev görür.
                                    Kullanışlılık ve inovasyonu bir araya getirerek ekosisteme teknolojik derinlik katar.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-normal text-[#2A2D34] dark:text-[#E5DCC3] mb-6 border-b border-[#E5DCC3] pb-4">
                                Temel Özellikler
                            </h2>
                            <ul className="space-y-4 text-[#2A2D34]/80 dark:text-[#A1A1AA]">
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>AI Asistan Entegrasyonu</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>Kullanıcı dostu, modüler dashboard</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-[#E5DCC3]">•</span>
                                    <span>JSON tabanlı genişletilebilir yapı</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
