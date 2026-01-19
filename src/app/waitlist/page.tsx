"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

export default function WaitlistPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [projectInterest, setProjectInterest] = useState("General");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const interestValue = projectInterest === "Tümü" ? "General" : projectInterest.split(" ")[0]; // Clean up display value to DB value if needed, or just send what user selected.
            // User requested mapping:
            // "Omniafeed (Finans)" -> "Omniafeed" ? Or full string? "Kullanıcının seçtiği değeri... gönder" implies the value.
            // Let's settle on mapped values for cleaner DB:
            let dbValue = "General";
            if (projectInterest.includes("Omniafeed")) dbValue = "Omniafeed";
            else if (projectInterest.includes("Toolvana")) dbValue = "Toolvana";
            else if (projectInterest.includes("Shelvyn")) dbValue = "Shelvyn";

            const { error } = await supabase
                .from('waitlist')
                .insert([{ email, name, project_interest: dbValue, created_at: new Date().toISOString() }]);

            if (error) {
                if (error.code === '23505') { // Unique violation
                    toast({
                        title: "Zaten Kayıtlısınız",
                        description: "Bu email adresi zaten listemizde mevcut.",
                        variant: "destructive",
                        duration: 3000,
                    });
                } else {
                    throw error;
                }
            } else {
                toast({
                    title: "Kayıt Başarılı",
                    description: "Bekleme listesine başarıyla eklendiniz.",
                    className: "bg-[#2A2D34] text-[#E5DCC3] border-[#E5DCC3]/20",
                    duration: 3000,
                });
                setEmail("");
                setName("");
                setProjectInterest("General");
            }
        } catch (error: any) {
            console.error("Waitlist Error:", error);
            const errorMessage = error?.message || "Bir sorun oluştu. Lütfen tekrar deneyin.";
            toast({
                title: "Hata",
                description: errorMessage,
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl py-16 px-4">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-light">Bekleme Listesine Katıl</CardTitle>
                    <CardDescription className="text-lg mt-2">
                        Allvao evrenine erken erişim sağlamak için yerinizi ayırtın.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email Adresi</label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="ornek@email.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">İsim (Opsiyonel)</label>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Adınız"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">İlgi Duyduğunuz Alan</label>
                            <Select value={projectInterest} onValueChange={setProjectInterest}>
                                <SelectTrigger className="w-full bg-[#F4F1E8] text-[#2A2D34] border-input">
                                    <SelectValue placeholder="Bir proje seçin" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#F4F1E8] text-[#2A2D34]">
                                    <SelectItem value="General">Tümü</SelectItem>
                                    <SelectItem value="Omniafeed">Omniafeed (Finans)</SelectItem>
                                    <SelectItem value="Toolvana">Toolvana (AI Araçları)</SelectItem>
                                    <SelectItem value="Shelvyn">Shelvyn (Teknoloji)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full" size="lg" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin text-[#E5DCC3]" />
                                    <span>Ekleniyor...</span>
                                </>
                            ) : (
                                "Listeye Ekle"
                            )}
                        </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                        *Spam yapmıyoruz. Sadece önemli güncellemeler için haber vereceğiz.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
