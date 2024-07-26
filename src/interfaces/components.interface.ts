import { ReactNode } from "react";
import { ICourse } from "./models/course.interface";

export interface IPropsButtonPrimary {
    children: ReactNode | string;
    classname?: string;
    typed?: "link" | "primary" | "outlined";
    href?: string;
    size?: "small" | "medium" | "large";
    props?: any;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    isPending?: boolean;
    onClick?: () => void;
}

export interface ICourses<C> {
    title?: string;
    courses?: C[];
    status?: {
        color: string;
        text: string;
    };
}

export interface IInputGroup {
    label?: string;
    classname?: string;
    placeholder?: string;
    type?: string;
    messageError?: string;
}

export interface IPropsButtonHandleAuth {
    title: string;
    icon: ReactNode;
    onClick?: () => void;
}

export interface IPropsLogoComponent {
    title?: string;
    size?: number;
}
