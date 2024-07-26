import { Result } from "antd";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";

export default function NotFoundPage() {
    return (
        <main className="flex justify-center items-center h-screen flex-col">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<ButtonPrimary href="/">Back Home</ButtonPrimary>}
            ></Result>
        </main>
    );
}
