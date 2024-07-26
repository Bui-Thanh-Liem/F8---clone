import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IPropsLogoComponent } from "@/interfaces/components.interface";

export const LogoComponent = ({ title, size }: IPropsLogoComponent) => {
    return (
        <Link
            href={"/"}
            className="rounded-tl-2xl rounded-br-2xl overflow-hidden border-2 border-[--color-primary]"
        >
            <Image src={logo} alt="BTL" width={size || 60} height={size || 60} />
        </Link>
    );
};
