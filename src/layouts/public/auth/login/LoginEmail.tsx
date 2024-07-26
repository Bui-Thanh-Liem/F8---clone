import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { MESS_ERROR_CONSTANTS } from "@/constants/validate.constants";
import { IFormLogin } from "@/interfaces/common/IForm.interface";
import { login } from "@/services/auth.service";
import { validateEmail } from "@/utils/validate.util";
import { Checkbox, Input, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const LoginEmail = () => {
    const router = useRouter();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    //
    const handleSubmitForm = async (data: IFormLogin) => {
        const resLogin = await login(data);
        if (resLogin.errors) {
            return toast.error(resLogin.errors[0].message);
        }

        // Login success then set-cookie
        await fetch(`/api/auth/set-token`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resLogin),
            method: "POST",
        });

        //
        toast.success(resLogin.message);
        reset();
        router.replace("/", { scroll: true });
    };

    return (
        <form
            className="w-full transition-all duration-300"
            onSubmit={handleSubmit(handleSubmitForm)}
        >
            <div className="text-start">
                <Typography.Title level={5}>Email</Typography.Title>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: true,
                        validate: (val: string) =>
                            validateEmail(val) || MESS_ERROR_CONSTANTS.EMAIL,
                    }}
                    render={({ field }) => (
                        <>
                            <Input
                                {...field}
                                size="large"
                                autoFocus
                                placeholder="Enter Email Address..."
                            />
                            <div className="h-3 mt-1">
                                {errors.email?.type === "required" && (
                                    <Typography className="text-red-600 text-[12px] font-[500]">
                                        {MESS_ERROR_CONSTANTS.FIELD_NOT_EMPTY(
                                            "Email"
                                        )}
                                    </Typography>
                                )}
                                {errors.email && (
                                    <Typography className="text-red-600 text-[12px] font-[500]">
                                        {errors.email.message}
                                    </Typography>
                                )}
                            </div>
                        </>
                    )}
                />
            </div>
            <div className="text-start mt-4">
                <Typography.Title level={5}>Password</Typography.Title>
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => (
                        <>
                            <Input.Password
                                {...field}
                                size="large"
                                placeholder="Enter Password..."
                                onCopy={(e) => e.preventDefault()}
                                onCut={(e) => e.preventDefault()}
                            />
                            <div className="h-3 mt-1">
                                {errors.password?.type === "required" && (
                                    <Typography className="text-red-600 text-[12px] font-[500]">
                                        {MESS_ERROR_CONSTANTS.FIELD_NOT_EMPTY(
                                            "Password"
                                        )}
                                    </Typography>
                                )}
                            </div>
                        </>
                    )}
                />
            </div>
            <div className="text-start mb-6 mt-4">
                <Checkbox className="items-start">Remember password ?</Checkbox>
            </div>
            <div>
                <ButtonPrimary type="submit" classname="w-full">
                    Login
                </ButtonPrimary>
            </div>
        </form>
    );
};
