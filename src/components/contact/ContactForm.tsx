"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "İsim en az 2 karakter olmalıdır.",
    }),
    email: z.string().email({
        message: "Geçerli bir e-posta adresi giriniz.",
    }),
    message: z.string().min(10, {
        message: "Mesajınız en az 10 karakter olmalıdır.",
    }),
})

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })

    const { toast } = useToast()

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error?.message || 'Bir hata oluştu');
            }

            toast({
                title: "Mesajınız iletildi",
                description: "Teşekkürler, en kısa sürede dönüş yapacağız.",
                className: "bg-[#2A2D34] text-[#E5DCC3] border-[#E5DCC3]/20",
                duration: 3000,
            });
            form.reset();
        } catch (error: any) {
            console.error("Contact Form Error:", error);
            const errorMessage = error?.message || "Mesaj gönderilemedi. Lütfen tekrar deneyin.";
            toast({
                title: "Hata",
                description: errorMessage,
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>İsim Soyisim</FormLabel>
                            <FormControl>
                                <Input placeholder="Adınız" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-posta</FormLabel>
                            <FormControl>
                                <Input placeholder="ornek@allvao.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mesajınız</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Bize projenizden bahsedin..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={loading}>
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin text-[#E5DCC3]" />
                            <span>Gönderiliyor...</span>
                        </>
                    ) : (
                        "Gönder"
                    )}
                </Button>
            </form>
        </Form>
    )
}
