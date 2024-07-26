import {
    REGEX_EMAIL_CONSTANTS,
    REGEX_PHONENUMBER_CONSTANTS,
    REGEX_USERNAME_CONSTANTS,
    REGEX_PASSWORD_CONSTANTS
} from "@/constants/validate.constants";

export const validateEmail = (email: string): boolean => {
    return !!REGEX_EMAIL_CONSTANTS.test(email);
};

export const validatePassword = (pass: string): boolean => {
    return !!REGEX_PASSWORD_CONSTANTS.test(pass);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
    return !!REGEX_PHONENUMBER_CONSTANTS.test(phoneNumber);
};

export const validateNormalText = (name: string) => {
    return !!REGEX_USERNAME_CONSTANTS.test(name);
};  // Bui thanh liem
