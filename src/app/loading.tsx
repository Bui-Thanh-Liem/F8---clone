import { Spin } from "antd";

export default function LoadingPage() {
    return (
        <main className="h-screen flex justify-center items-center">
            <Spin size="large" />
        </main>
    );
}
