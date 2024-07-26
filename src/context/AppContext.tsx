"use client";
import React, { createContext, useContext, useState } from "react";

//
const AppContext = createContext({
    sessionToken: "",
    setSessionToken: (token: string) => {},
});

//
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("Error useAppContext");
    }
    return context;
};

//
export const AppContextProvider = ({
    children,
    initialToken,
}: {
    children: React.ReactNode;
    initialToken: string;
}) => {
    const [sessionToken, setSessionToken] = useState(initialToken);

    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken }}>
            {children}
        </AppContext.Provider>
    );
};
