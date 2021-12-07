import React, { createContext, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({children}) => {

    const [cargando, setCargando] = useState(false);

    return (
        <LoaderContext.Provider value = {{
            cargando, setCargando
        }}>
            { children}
        </LoaderContext.Provider>
    )
}