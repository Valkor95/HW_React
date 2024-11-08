import React, {createContext, useContext, useState} from 'react';

export const ContextTheme = createContext('')

function ThProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevState => !prevState)
    }

    return (
        <ContextTheme.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ContextTheme.Provider>
    );
}

export const useTheme = () => useContext(ContextTheme)

