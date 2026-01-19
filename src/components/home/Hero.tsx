import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Added Image import

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 text-center md:py-20 overflow-hidden bg-background">
            {/* Background Gradient/Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background opacity-40"></div>

            <div className="container px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8 md:pt-12">
                <div className="flex flex-col items-start text-left space-y-6">
                    <span className="text-sm font-normal tracking-widest uppercase text-[#2A2D34]/80 dark:text-[#E5DCC3]">ALLVAO</span>
                    <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[#2A2D34] dark:text-[#F7F6F2] leading-tight">
                        Dijital Dünyaların <br />
                        Kesişim Noktası
                    </h1>
                    <p className="text-base md:text-lg text-[#2A2D34] dark:text-[#E5DCC3] max-w-xl leading-relaxed text-justify font-light">
                        Dijital evrenin farklı köşelerinde uzmanlaşan, her biri kendi alanında derinleşen projelerin tek bir çatı altında buluştuğu stratejik bir merkezdesiniz. Allvao, bilginin şeffaflığını, teknolojinin dinamizmini ve dijital araçların pratikliğini bir araya getiren çok katmanlı bir ekosistemin öncüsüdür. Kripto dünyasının karmaşık verilerinden teknoloji yayıncılığının heyecan verici gelişmelerine, yapay zekanın sunduğu akıllı çözümlerden hayatı kolaylaştıran dijital araçlara kadar geniş bir yelpazede, kullanıcılarımıza rehberlik ediyoruz. Allvao olarak amacımız, bu farklı dünyalar arasında sarsılmaz bir köprü kurarak, aradığınız güvenilir bilgiye ve ihtiyaç duyduğunuz inovatif çözümlere en yalın ve en etkili şekilde ulaşmanızı sağlamaktır.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button asChild size="lg" className="px-8 bg-[#2A2D34] text-[#E5DCC3] hover:bg-[#3C414B] dark:bg-[#E5DCC3] dark:text-[#2A2D34] dark:hover:bg-[#F0E9D6]">
                            <Link href="/projects">Projeleri Keşfet</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="border-[#2A2D34]/20 text-[#2A2D34] hover:bg-[#2A2D34]/5 dark:border-[#E5DCC3]/20 dark:text-[#E5DCC3] dark:hover:bg-[#E5DCC3]/5">
                            <Link href="/about">Manifestoyu Oku</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative w-full h-full flex items-center justify-center lg:mt-16">
                    <div className="w-full aspect-[16/10] relative rounded-sm border border-[#E5DCC3]/30 overflow-hidden">
                        <Image
                            src="/images/home.png"
                            alt="Allvao Hero"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
