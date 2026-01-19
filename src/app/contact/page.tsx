import { ContactForm } from "@/components/contact/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container px-4 md:px-6 py-16 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">İletişime Geçin</h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Bir projeniz mi var? Veya sadece merhaba demek mi istiyorsunuz?
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>İletişim Bilgileri</CardTitle>
                            <CardDescription>Bize aşağıdaki kanallardan ulaşabilirsiniz.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>info@allvao.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-5 w-5 text-primary" />
                                <span>Yakında: WhatsApp Destek Hattı</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-5 w-5 text-primary" />
                                <div className="flex flex-col">
                                    <span>Allvao HQ, Dijital Evren, Sınırsızlık Koordinatları</span>
                                    <span className="text-xs text-muted-foreground opacity-70">Cloud City, Web3 Blvd, Node: 01</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="rounded-xl bg-muted/50 p-6">
                        <h3 className="font-medium mb-2">Çalışma Saatleri</h3>
                        <p className="text-sm text-muted-foreground">
                            Pazartesi - Cuma: 09:00 - 18:00<br />
                            Haftasonu: Kapalı (Sistemler 7/24 Aktif)
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Mesaj Gönder</CardTitle>
                            <CardDescription>Formu doldurun, en kısa sürede dönüş yapalım.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
