"use server";
export const api = async (url: string, options: RequestInit) => {
    const res = await fetch(url, options);
    const results = await res.json();
    return results;
};
