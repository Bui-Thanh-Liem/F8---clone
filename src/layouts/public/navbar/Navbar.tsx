"use client";
import { AiFillHome } from "react-icons/ai";
import { FaPlus, FaRoad } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useUniqueKeyGenerator } from "@/hooks/useUniqueKeyGenerator";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { NavLink } from "./NavLink";

const itemNavbar = [
    {
        icon: <AiFillHome className="text-2xl" />,
        description: "Home",
        path: "/",
    },
    {
        icon: <FaRoad className="text-2xl" />,
        description: "Roadmaps",
        path: "/roadmaps",
    },
    {
        icon: <FaPeopleGroup className="text-2xl" />,
        description: "Blogs",
        path: "/blogs",
    },
];

export const NavbarLayout = () => {
    const generatorKey = useUniqueKeyGenerator();
    return (
        <nav className="flex flex-col gap-6 items-center h-[80vh] px-8 py-5">
            {itemNavbar.map((item, index) => (
                <NavLink key={generatorKey(item, index)} href={item.path}>
                    {item.icon}
                    <p className="text-[10px]">{item.description}</p>
                </NavLink>
            ))}
            <ButtonPrimary>
                <FaPlus className="text-xl group-hover:scale-x-110 transition-transform duration-300" />
            </ButtonPrimary>
        </nav>
    );
};
