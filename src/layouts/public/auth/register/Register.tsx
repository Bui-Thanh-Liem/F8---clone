"use client";
import "./style.scss";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { ButtonHandleAuth } from "@/layouts/public/auth/ButtonHandleAuth";
import { TbArrowBackUp } from "react-icons/tb";
import { LogoComponent } from "@/components/logo/LogoComponent";
import { RegisterEmail } from "./RegisterEmail";

//
export const RegisterLayout = () => {
    const [isShowFormEmail, setIsShowFormEmail] = useState<boolean>(false);
    
    return (
        <div className="p-8 rounded-[8px] bg-white flex-1 flex flex-col items-center justify-center gap-2 relative transition-all duration-300">
            {isShowFormEmail && (
                <p
                    className="cursor-pointer absolute top-4 left-8 flex justify-center items-center gap-1 hover:text-[--color-primary]"
                    onClick={() => setIsShowFormEmail(!isShowFormEmail)}
                >
                    <TbArrowBackUp size={20} />
                </p>
            )}
            <LogoComponent size={58} />
            <p className="font-bold text-2xl text-[--color-primary]">
                Register BTL
            </p>
            <p className="w-96 text-[12px] font-thin text-red-600 mb-4">
                Each person should use a separate account and multiple user
                accounts will be locked.
            </p>

            {/*  */}
            {!isShowFormEmail ? (
                <>
                    <ButtonHandleAuth
                        title="Use with email"
                        icon={<FaRegUser />}
                        onClick={() => setIsShowFormEmail(!isShowFormEmail)}
                    />
                    <ButtonHandleAuth
                        title="Register with Google"
                        icon={<FcGoogle />}
                    />
                    <ButtonHandleAuth
                        title="Register with Facebook"
                        icon={<ImFacebook2 className="text-blue-600" />}
                    />
                    <ButtonHandleAuth
                        title="Register with GitHub"
                        icon={<BsGithub />}
                    />
                </>
            ) : (
                <RegisterEmail />
            )}

            {/*  */}
            <p className="mt-2 text-[12px]">
                You have an account ?
                <Link
                    href={"/login"}
                    className="font-bold text-[--color-primary]"
                >
                    {" "}
                    Login
                </Link>
            </p>
            <p className="max-w-96 mt-4 text-[10px]">
                Your continued use of this website means you agree to{" "}
                <a
                    target=""
                    href={"https://btl.com/terms"}
                    className="underline"
                >
                    our terms
                </a>{" "}
                of use.
            </p>
        </div>
    );
};
