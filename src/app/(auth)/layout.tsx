import { ReactNode } from "react";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import { Button } from "antd";

export default function LayoutAuth({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <div className="bg-[--color-second] h-screen flex justify-evenly items-center text-center relative">
                <Link href={"/"} className="absolute top-4 left-4 text-white">
                    <Button
                        type="primary"
                        className="rounded-[8px] bg-[--color-priamry]"
                    >
                        <TbArrowBackUp size={32} />
                    </Button>
                </Link>
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
