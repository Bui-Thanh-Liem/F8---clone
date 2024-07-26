export const REGEX_PASSWORD_CONSTANTS =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{8,}$/;

export const REGEX_EMAIL_CONSTANTS =
    /^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const REGEX_PHONENUMBER_CONSTANTS = /^(84|0[3|5|7|8|9])[0-9]{8}$/;

export const REGEX_USERNAME_CONSTANTS = /^[A-Za-zÀ-ỹà-ỹ0-9 ]+$/g;

export const MESS_ERROR_CONSTANTS = {
    ROLE: "Permissions do not match",
    EMAIL: "Email is not in the correct format, eg: abc@gmail.com",
    PHONE_NUMBER:
        "The phone number is not in the correct format, eg: 0988777666",
    PASSWORD:
        "Password must have at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and at least 8 characters",
    CONFIRM_PASSWORD: "Re-enter incorrect password",

    FIELD_NOT_EMPTY: (field: string) => `${field} is required`,

    MIN_LENGTH: (field: string, length: number) =>
        `${field} must have at least ${length} characters`,

    MAX_LENGTH: (field: string, length: number) =>
        `${field} maximum ${length} characters`,

    // MIN_VALUE: ({ field, val }: { field: string; val: number }) =>
    //     `${field} phải lớn hơn ${val}`,
    // MIN_EQUAL_VALUE: ({ field, val }: { field: string; val: number }) =>
    //     `${field} phải lớn hơn hoặc bằng ${val}`,

    // MAX_VALUE: ({ field, val }: { field: string; val: number }) =>
    //     `${field} phải bé hơn ${val}`,
    // MAX_EQUAL_VALUE: ({ field, val }: { field: string; val: number }) =>
    //     `${field} phải bé hơn hoặc bằng ${val}`,
};
