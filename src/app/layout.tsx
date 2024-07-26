import { AppContextProvider } from "@/context/AppContext";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import { cookies } from "next/headers";

// === Fonts ===
// 1. CDN
// 2. Google Fonts in next js
// 3. local Fonts in next js
const roboto = Roboto_Mono({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-roboto",
});

//  === metadata ===
export const metadata: Metadata = {
    title: "Learn how to prepare to go to work",
    description: "Learn how to prepare to go to work",
    icons: {
        icon: "/favicon.icon",
    },
};

// === layouts globally ===
export default function RootLayoutPage({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const sessionStore = cookies();
    const token = sessionStore.get("sessionToken");

    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body suppressHydrationWarning={true} className={roboto.className}>
                <link rel="icon" href="/favicon.ico" />

                <AppContextProvider initialToken={token?.value as string}>
                    {children}
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </AppContextProvider>
            </body>
        </html>
    );
}
