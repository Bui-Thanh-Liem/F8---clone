import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IPropNavlink {
    href: string;
    children: React.ReactNode | string;
}
export const NavLink = ({href, children}: IPropNavlink) => {
    const pathname = usePathname();
    
    return (
        <Link
            href={href}
            className={`cursor-pointer rounded-[8px] p-3 flex flex-col justify-center items-center w-full min-h-min-w-16 transition-all duration-300 ${
                pathname === href
                    ? "bg-[var(--color-third)]"
                    : "hover:bg-[var(--color-third)]"
            }`}
        >
            {children}
        </Link>
    );
};
