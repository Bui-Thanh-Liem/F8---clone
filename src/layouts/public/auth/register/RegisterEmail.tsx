import { Input, Space, Spin, Steps, Typography } from "antd";
import { ButtonPrimary } from "@/components/buttons/ButtonPrimary";
import { Controller, useForm } from "react-hook-form";
import { MESS_ERROR_CONSTANTS } from "@/constants/validate.constants";
import { validateEmail, validatePassword } from "@/utils/validate.util";
import { IFormRegister } from "@/interfaces/common/IForm.interface";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { register, confirmEmail } from "@/services/auth.service";
import { useRef, useState, useTransition } from "react";
import { randomNumber } from "@/utils/random.util";
import { TemplateConfimEmail } from "@/templates/templateConfirmEmail";

export const RegisterEmail = () => {
    const router = useRouter();
    const [code, setCode] = useState<string>("");
    const [isCode, setIsCode] = useState<boolean>(true);
    const [levelPassWord, setLevelPassWord] = useState<0 | 1 | 2>(0);
    const [isConfirmCode, setIsConfirmCode] = useState<boolean>(false);
    const [isPendingSendMail, startTransitionSendMail] = useTransition();
    const [password, setPassword] = useState<string>("");
    const generatorCodeRef = useRef(randomNumber(6));
    const {
        reset,
        getValues,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            password_confirm: "",
        },
    });

    //
    const handleSendCodeToEmail = (email: string) => {
        //
        if (!getValues("username").trim())
            return toast.warn("Please enter your username");
        if (!email.trim()) return toast.warn("Please enter your email");

        //
        startTransitionSendMail(async () => {
            const responseConfirmEmail = await confirmEmail({
                to: email,
                subject: "Confirm Email",
                body: {
                    name: getValues("username"),
                    urlApp: "https://localhost:3000",
                    textConfirm: generatorCodeRef.current,
                },
            });
            console.log(responseConfirmEmail);

            if (responseConfirmEmail.status !== 200) {
                toast.error("send mail failed");
                // return;
            }
            setIsConfirmCode(true);
            setIsCode(false);
            toast.success("We have sent you a code, please check your Email");
        });
    };

    //
    const onSubmit = async (data: IFormRegister) => {
        if (!data) return;
        if (!isConfirmCode) {
            toast.warn("You have not confirmed your Email");
            // return;
        }
        if (code !== 'btl') {
            toast.error("Email verification code is incorrect");
            // return;
        }
        const {
            username: name,
            email,
            password,
            password_confirm: confirmPassword,
        } = data;
        const res: any = await register({
            name,
            email,
            password,
            confirmPassword,
        });
        if (res.errors) {
            return toast.error(res.message);
        }
        toast.success(res.message);
        setCode("");
        reset();
        setPassword("");
        router.replace("/login", { scroll: false });
    };

    return (
        <>
            <form className="w-[50vw]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center gap-6">
                    <div className="w-1/2">
                        <div className="text-start">
                            <Typography.Title level={5}>
                                Username
                            </Typography.Title>
                            <Controller
                                name="username"
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 3,
                                    maxLength: 10,
                                }}
                                render={({ field }) => (
                                    <>
                                        <Input
                                            {...field}
                                            size="large"
                                            autoFocus
                                            placeholder="Enter username..."
                                        />
                                        <div className="h-3 mt-1">
                                            {errors.username?.type ===
                                                "required" && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {MESS_ERROR_CONSTANTS.FIELD_NOT_EMPTY(
                                                        "Username"
                                                    )}
                                                </Typography>
                                            )}
                                            {errors.username?.type ===
                                                "minLength" && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {MESS_ERROR_CONSTANTS.MIN_LENGTH(
                                                        "Username",
                                                        3
                                                    )}
                                                </Typography>
                                            )}
                                            {errors.username?.type ===
                                                "maxLength" && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {MESS_ERROR_CONSTANTS.MIN_LENGTH(
                                                        "Username",
                                                        10
                                                    )}
                                                </Typography>
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="text-start mt-3">
                            <Typography.Title level={5}>
                                Email Address
                            </Typography.Title>
                            <Controller
                                name="email"
                                control={control}
                                rules={{
                                    required: true,
                                    validate: (val: string) =>
                                        validateEmail(val) ||
                                        MESS_ERROR_CONSTANTS.EMAIL,
                                }}
                                render={({ field }) => (
                                    <>
                                        <Input
                                            {...field}
                                            size="large"
                                            placeholder="Enter Email Address..."
                                        />
                                        <div className="h-3 mt-1">
                                            {errors.email?.type ===
                                                "required" && (
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
                        <Space direction="horizontal" className="mt-6 w-full">
                            <Input
                                size="large"
                                placeholder="Enter code..."
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                disabled={isCode}
                            />
                            <ButtonPrimary
                                type="button"
                                typed="outlined"
                                isPending={isPendingSendMail}
                                disabled={isPendingSendMail}
                                onClick={() =>
                                    handleSendCodeToEmail(
                                        String(getValues("email"))
                                    )
                                }
                            >
                                Send
                            </ButtonPrimary>
                        </Space>
                    </div>
                    <div className="w-1/2">
                        <div className="text-start">
                            <Typography.Title level={5}>
                                Password
                            </Typography.Title>
                            <Controller
                                name="password"
                                control={control}
                                rules={{
                                    required: true,
                                    validate: (val: string) =>
                                        validatePassword(val) ||
                                        "Password is too weak",
                                }}
                                render={({ field }) => (
                                    <>
                                        <Input.Password
                                            {...field}
                                            size="large"
                                            value={password}
                                            placeholder="Enter Password..."
                                            onChange={(
                                                e: React.ChangeEvent<HTMLInputElement>
                                            ) => {
                                                field.onChange(e);
                                                const val = e.target.value;
                                                setPassword(val);
                                                let level = 0;
                                                if (
                                                    (/[a-z]/.test(val) ||
                                                        /[0-9]/.test(val)) &&
                                                    /[A-Z]/.test(val)
                                                ) {
                                                    level = 1;
                                                    if (
                                                        /[!@#$%^&*]/.test(
                                                            val
                                                        ) &&
                                                        /^.{8,}$/.test(val)
                                                    ) {
                                                        level = 2;
                                                    } else {
                                                        level = 1;
                                                    }
                                                } else {
                                                    level = 0;
                                                }
                                                setLevelPassWord(level as any);
                                            }}
                                            onCopy={(e) => e.preventDefault()}
                                            onCut={(e) => e.preventDefault()}
                                        />
                                        <div className="h-3 mt-1">
                                            {errors.password?.type ===
                                                "required" && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {MESS_ERROR_CONSTANTS.FIELD_NOT_EMPTY(
                                                        "Password"
                                                    )}
                                                </Typography>
                                            )}
                                            {errors.password && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {errors.password.message}
                                                </Typography>
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="text-start mt-4">
                            <Typography.Title level={5}>
                                Password confirmation
                            </Typography.Title>
                            <Controller
                                name="password_confirm"
                                control={control}
                                rules={{
                                    required: true,
                                    validate: (val: string) =>
                                        val === getValues("password") ||
                                        MESS_ERROR_CONSTANTS.CONFIRM_PASSWORD,
                                }}
                                render={({ field }) => (
                                    <>
                                        <Input.Password
                                            {...field}
                                            size="large"
                                            placeholder="Enter Password confirm..."
                                        />
                                        <div className="h-3 mt-1">
                                            {errors.password_confirm?.type ===
                                                "required" && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {MESS_ERROR_CONSTANTS.FIELD_NOT_EMPTY(
                                                        "Password confirm"
                                                    )}
                                                </Typography>
                                            )}
                                            {errors.password_confirm && (
                                                <Typography className="text-red-600 text-[12px] font-[500]">
                                                    {
                                                        errors.password_confirm
                                                            .message
                                                    }
                                                </Typography>
                                            )}
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                        <div className="mt-8 px-4">
                            <Steps
                                current={levelPassWord}
                                items={[
                                    {
                                        title: "Weak",
                                    },
                                    {
                                        title: "Medium",
                                    },
                                    {
                                        title: "Strong",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-72 mt-12 m-auto">
                    <ButtonPrimary type="submit" classname="w-full">
                        Register
                    </ButtonPrimary>
                </div>
            </form>
        </>
    );
};
