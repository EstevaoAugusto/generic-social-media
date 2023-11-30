import React, {createContext, useState} from "react";

export const NameContext = createContext({})

export const NameProvider = ({children}) => {
    return (
        <NameContext.Provider value={{
            name: 'Estevao Augusto'

        }}>
            {children}
        </NameContext.Provider>
    )
}