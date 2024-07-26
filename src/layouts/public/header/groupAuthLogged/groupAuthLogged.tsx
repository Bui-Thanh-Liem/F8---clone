import { Avatar, Button, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import { BsBell } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { ICustomer } from "@/interfaces/models/customer.interface";
import { convertFullNameToCharacter } from "@/utils/convert.util";

import "./style.scss";

export const GroupAuthLogged = ({ user }: { user: ICustomer }) => {
    const handleClickLogout = () => {
        signOut({ callbackUrl: "/login" });
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <div className="flex justify-between items-center">
                    <div>
                        {user?.image ? (
                            <Image
                                src={user?.image as string}
                                alt={user?.name as string}
                                width={36}
                                height={36}
                                className="rounded-full cursor-pointer"
                            />
                        ) : (
                            <Avatar className="bg-[--color-primary] cursor-pointer">
                                {convertFullNameToCharacter(user?.name)}
                            </Avatar>
                        )}
                    </div>
                    <div>
                        <p className="font-bold text-xl">{user?.name}</p>
                        {user?.id && (
                            <p className="font-bold text-xs text-gray-100">
                                {user?.id}
                            </p>
                        )}
                    </div>
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.aliyun.com"
                >
                    2nd menu item
                </a>
            ),
        },
        {
            key: "3",
            label: (
                <Button danger onClick={handleClickLogout}>
                    Logout
                </Button>
            ),
        },
    ];
    return (
        <>
            <BsBell size={24} className="self-center mr-4 cursor-pointer" />
            <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
            >
                {user?.image ? (
                    <Image
                        src={user?.image as string}
                        alt={user?.name as string}
                        width={36}
                        height={36}
                        className="rounded-full cursor-pointer"
                    />
                ) : (
                    <Avatar className="bg-[--color-primary] cursor-pointer">
                        {convertFullNameToCharacter(user?.name)}
                    </Avatar>
                )}
            </Dropdown>
        </>
    );
};
