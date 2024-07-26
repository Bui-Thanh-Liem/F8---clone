"use client";
import { IPropsButtonPrimary } from "@/interfaces/components.interface";
import styled from "styled-components";
import Link from "next/link";
import { VscLoading } from "react-icons/vsc";

const ButtonStyled = styled.button<{
    $typed: "link" | "primary" | "outlined";
    $disabled: boolean;
}>`
    border: ${({ $typed }) => {
        return $typed === "outlined"
            ? "2px solid var(--color-primary)"
            : "none";
    }};
    pointer-events: ${({ $disabled }) => ($disabled ? "none" : "all")};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "all")};
    border-radius: 8px;
    height: 36px;
    padding: 0 12px;
    font-weight: bold;
    background: ${({ $typed }) => {
        return $typed === "outlined" || $typed === "link"
            ? "#fff"
            : "linear-gradient(135deg,var(--color-second),var(--color-primary) 75%)";
    }};
    color: ${({ $typed }) => {
        return (
            $typed == "link" || $typed == "outlined"
                ? "var(--color-primary)"
                : "#fff"
        ) as string;
    }};
    box-shadow: ${({ $typed }) => {
        if ($typed === "outlined") return "2px 2px 0px var(--color-primary)";
        return "2px 2px 0px #999";
    }};
    &:hover {
        background: ${({ $typed }) => {
            return $typed === "link" || $typed === "outlined"
                ? "#fff"
                : "linear-gradient(135deg,var(--color-second),var(--color-primary) 50%)";
        }};
    }
    &:active {
        box-shadow: unset;
        transform: translateY(2px);
    }
`;

const LinkStyled = styled(Link)<{ $typed: "link" | "primary" | "outlined" }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ $typed }) => {
        return $typed === "outlined"
            ? "2px solid var(--color-primary)"
            : "none";
    }};
    outline: none;
    border-radius: 8px;
    height: 36px;
    padding: 0 12px;
    font-weight: bold;
    background: ${({ $typed }) => {
        return $typed === "outlined" || $typed === "link"
            ? "#fff"
            : "linear-gradient(135deg,var(--color-second),var(--color-primary) 75%)";
    }};
    color: ${({ $typed }) => {
        return (
            $typed == "link" || $typed == "outlined"
                ? "var(--color-primary)"
                : "#fff"
        ) as string;
    }};

    box-shadow: ${({ $typed }) => {
        if ($typed === "outlined") return "2px 2px 0px var(--color-second)";
        return "2px 2px 0px #999";
    }};
    &:hover {
        background: ${({ $typed }) => {
            return $typed === "link" || $typed === "outlined"
                ? "#fff"
                : "linear-gradient(135deg,var(--color-second),var(--color-primary) 50%)";
        }};
    }
    &:active {
        box-shadow: unset;
        transform: translateY(2px);
    }
`;

export const ButtonPrimary = ({
    children,
    classname,
    href,
    typed = "primary",
    type = "button",
    disabled,
    isPending,
    onClick,
    ...props
}: IPropsButtonPrimary) => {
    if (href)
        return (
            <LinkStyled $typed={typed} href={href} onClick={onClick} {...props}>
                {children}
            </LinkStyled>
        );
    return (
        <ButtonStyled
            $typed={typed}
            className={classname}
            onClick={onClick}
            type={type}
            $disabled={disabled || false}
            {...props}
        >
            {isPending ? (
                <VscLoading
                    color="#1677FF"
                    size={24}
                    className="animate-spin"
                />
            ) : (
                children
            )}
        </ButtonStyled>
    );
};
