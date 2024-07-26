const env = {
    APP_ENDPOINT: "",
    API_ENDPOINT: "",
};

if (
    !process.env.NEXT_PUBLIC_APP_ENDPOINT ||
    !process.env.NEXT_PUBLIC_API_ENDPOINT
) {
    console.error("Error: No environment variable");
    // throw new Error("Error at .env");
}

env.APP_ENDPOINT = process.env.NEXT_PUBLIC_APP_ENDPOINT as string;
env.API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT as string;

export default env;
