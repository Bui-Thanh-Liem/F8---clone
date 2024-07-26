import { IPropsButtonHandleAuth } from "@/interfaces/components.interface";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";

export const ButtonHandleAuth = ({
    title,
    icon,
    onClick,
}: IPropsButtonHandleAuth) => {
    return (
        <ButtonPrimary
            classname="w-[90%] flex justify-between items-center mt-4"
            onClick={onClick}
        >
            {icon}
            <span>{title}</span>
        </ButtonPrimary>
    );
};
