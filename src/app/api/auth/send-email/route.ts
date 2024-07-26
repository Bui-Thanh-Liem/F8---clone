import { TemplateConfimEmail } from "@/templates/templateConfirmEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.CONFIRM_EMAIL_KEY);

export async function POST(request: Request) {
    try {
        const { to, subject, body } = await request.json();

        const resultResponse = await resend.emails.send({
            from: process.env.SMTP_EMAIL as string,
            to: `${to}`,
            subject: subject,
            react: TemplateConfimEmail(body),
        });
        console.log("resultResponse:::", resultResponse);

        if (resultResponse?.error) {
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in send-email API:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
