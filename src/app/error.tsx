"use client";

import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { Result } from "antd";

export default function ErrorPage() {
    return (
        <main className="flex justify-center items-center h-screen flex-col">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<ButtonPrimary href="/">Back Home</ButtonPrimary>}
            />
        </main>
    );
}
