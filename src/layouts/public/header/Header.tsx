"use client";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GroupAuthLogged } from "./groupAuthLogged/groupAuthLogged";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { ICustomer } from "@/interfaces/models/customer.interface";
import { LogoComponent } from "@/components/logo/LogoComponent";

export const HeaderLayout = ({ user }: { user: ICustomer }) => {
    return (
        <header className="border-b-2 border-gray-100 px-8 sticky top-0 bg-white z-50">
            <div className="flex justify-between items-center h-16">
                <div className="ms-1 flex-1 flex items-center h-full gap-7">
                    <LogoComponent />
                    <p className="font-bold">
                        Learn how to prepare to go to work
                    </p>
                </div>
                <div className="w-96">
                    <Input
                        size="large"
                        placeholder="Search courses, blogs, videos, and..."
                        prefix={<CiSearch className="cursor-pointer" />}
                    />
                </div>
                <div className="flex-1 flex gap-4 justify-end">
                    {!user ? (
                        <>
                            <ButtonPrimary href="/login" typed="link">
                                Login
                            </ButtonPrimary>
                            <ButtonPrimary href="/register">
                                Register
                            </ButtonPrimary>
                        </>
                    ) : (
                        <GroupAuthLogged user={user} />
                    )}
                </div>
            </div>
        </header>
    );
};
