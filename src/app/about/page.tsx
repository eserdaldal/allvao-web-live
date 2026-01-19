import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, History, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#FBF9F6] dark:bg-background py-12 md:py-16 transition-colors duration-300">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-light tracking-tighter sm:text-5xl md:text-6xl text-[#2A2D34] dark:text-foreground">
                            Misyonumuz & <span className="text-primary font-normal">Vizyonumuz</span>
                        </h1>
                        <p className="text-muted-foreground md:text-xl leading-relaxed">
                            Dijital dünyada kaybolan projeler değil, yaşayan ekosistemler inşa ediyoruz.
                            Allvao, karmaşayı düzene, fikirleri gerçeğe dönüştürür.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hikayemiz (Story) & Image */}
            <section className="py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        {/* Left Column: Story Content */}
                        <div className="space-y-8 text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-normal">
                                    <History className="mr-2 h-4 w-4" />
                                    Hikayemiz
                                </div>
                                <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
                                    Bütünsel Bir Vizyonun Hikayesi
                                </h2>
                                <p className="text-muted-foreground text-lg text-justify leading-relaxed">
                                    Allvao, dijital yayıncılık ve teknoloji çözümlerinde yeni bir standart belirlemek amacıyla, uzmanlık alanları farklı ama vizyonları ortak olan projeleri bir araya getiren kapsayıcı bir çatı olarak doğdu. Bünyemizde barındırdığımız finans odaklı tarafsız haber platformu, teknoloji dünyasının nabzını tutan rehber içerikler ve günlük iş akışlarını dönüştüren yapay zeka destekli araçlarla, modern kullanıcının dijital ihtiyaçlarını tek bir merkezden yönetiyoruz. Bizim hikayemiz; bilginin doğrulanabilirliğini, içeriğin erişilebilirliğini ve teknolojinin insan odaklı kullanımını en üst seviyede tutma disipliniyle yazılıyor. Her bir alt projemizde uyguladığımız yüksek kalite standartları ve sürdürülebilir büyüme hedefiyle, Allvao ismi altında dijital geleceği inşa ederken hem son kullanıcılarımız hem de iş ortaklarımız için güven veren, yenilikçi ve bütünleşik bir ekosistem sunmaya devam ediyoruz.
                                </p>
                                <p className="text-muted-foreground text-lg text-justify leading-relaxed">
                                    Yönetim felsefemiz ise "İnce Yönetişim" (Lean Governance) üzerine kuruludur. Bürokrasiyi dışlayan, asenkron ve çevik karar alma süreçleriyle, ekiplerimizin sadece işine odaklanmasını sağlıyoruz.
                                </p>
                                <div className="pt-2 w-full text-center md:text-left">
                                    <Link
                                        href="/about/network"
                                        className="text-foreground font-light text-lg border-b border-[#E5DCC3] hover:border-primary transition-colors pb-0.5"
                                    >
                                        Bu yapıyı hayata geçiren ekosistem üyeleriyle tanışın: Allvao Network
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Static Image */}
                        <div className="w-full relative group">
                            <div className="overflow-hidden rounded-2xl relative aspect-video border border-[#E5DCC3]/20 shadow-2xl bg-[#FBF9F6] dark:bg-transparent transition-all duration-500 hover:shadow-2xl">
                                <Image
                                    src="/images/about/allvao-master.png"
                                    alt="Allvao Master Digital Ecosystem Architecture"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Değerlerimiz (Values) */}
            <section className="py-12 md:py-16 bg-muted/20 dark:bg-muted/5">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-normal tracking-tighter md:text-4xl mb-4">Değerlerimiz</h2>
                        <p className="text-muted-foreground">Bizi biz yapan temel prensipler.</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-background/60 hover:bg-[#E5DCC3]/10 transition-colors duration-300 dark:bg-background/40 dark:hover:bg-[#E5DCC3]/5">
                            <CardHeader>
                                <Target className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>Odaklanma</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Gürültüyü filtreleyip, sadece önemli olana enerji harcarız.
                            </CardContent>
                        </Card>
                        <Card className="bg-background/60 hover:bg-[#E5DCC3]/10 transition-colors duration-300 dark:bg-background/40 dark:hover:bg-[#E5DCC3]/5">
                            <CardHeader>
                                <Heart className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>Süreklilik</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Anlık başarılar değil, yaşayan ve gelişen sistemler kurarız.
                            </CardContent>
                        </Card>
                        <Card className="bg-background/60 hover:bg-[#E5DCC3]/10 transition-colors duration-300 dark:bg-background/40 dark:hover:bg-[#E5DCC3]/5">
                            <CardHeader>
                                <ArrowRight className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>İlerleme</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Dünden daha iyi, yarına hazır. Sürekli gelişim DNA'mızda var.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-10 text-center">
                <Button asChild size="lg" className="bg-[#2A2D34] text-[#E5DCC3] hover:bg-[#3E424B] dark:bg-primary dark:text-primary-foreground">
                    <Link href="/contact">Bizimle İletişime Geçin</Link>
                </Button>
            </section>
        </div>
    );
}
