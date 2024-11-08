import React, {createContext, useContext, useState} from 'react';

export const ContextData = createContext('')

export function Provider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevState => !prevState)
    }

    return (
        <ContextData.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ContextData.Provider>
    );
}

export const useTheme = () => useContext(ContextData)

