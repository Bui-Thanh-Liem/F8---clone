"use server";
import env from "@/configs/env.config";
import { cookies } from "next/headers";
import { api } from "@/helper/api.helper";

export const register = async (payload: any) => {
    const res = await api(`${env.API_ENDPOINT}/auth/register`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
    });

    return res;
};

export const confirmEmail = async (payload: any) => {
    const res = await api(`${env.APP_ENDPOINT}/api/auth/send-email`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
    });
    return res;
};

export const login = async (payload: any) => {
    const res = await api(`${env.API_ENDPOINT}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
    });
    return res;
};

// Call at server component (Response set-Cookie) -> cookies().get()
export const getMe = async () => {
    const res = await api(`${env.API_ENDPOINT}/account/me`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies().get("sessionToken")?.value}`,
        },
        method: "GET",
    });
    return res;
};

export const logout = async (payload: any) => {
    const res = await api(`${env.API_ENDPOINT}/auth/login`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        method: "POST",
    });
    return res;
};
