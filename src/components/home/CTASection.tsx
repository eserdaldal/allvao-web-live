import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container flex flex-col items-center justify-center gap-4 text-center">
                <div className="space-y-3">
                    <h2 className="text-3xl font-normal tracking-tighter md:text-4xl">
                        Sistemin Bir Parçası Olun.
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Allvao evrenine katılarak dijital geleceğinizi inşa etmeye başlayın. Bekleme listesi açıldı.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" asChild>
                        <Link href="/waitlist">Bekleme Listesine Katıl</Link>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                        <Link href="/contact">İletişime Geç</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
