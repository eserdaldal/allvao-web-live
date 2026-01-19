import { ContactTemplate } from '@/components/email/contact-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY is missing in environment variables.");
        return Response.json({ error: { message: "Server configuration error: Missing API Key" } }, { status: 500 });
    }

    try {
        const { username, email, message } = await request.json();

        // Log the attempt


        const { data, error } = await resend.emails.send({
            from: 'Allvao İletişim <info@allvao.com>',
            to: ['info@allvao.com'],
            subject: `Yeni Mesaj: ${username}`,
            react: ContactTemplate({ username, email, message }) as any,
            replyTo: email,
        });

        if (error) {
            console.error("Resend API Usage Error:", JSON.stringify(error, null, 2));
            return Response.json({ error }, { status: 500 });
        }


        return Response.json(data);
    } catch (error: any) {
        console.error("Resend API Unexpected Error:", error);
        return Response.json({ error: { message: error.message || "Unknown error occurred" } }, { status: 500 });
    }
}
