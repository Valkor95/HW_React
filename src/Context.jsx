import React, {createContext, useContext, useEffect, useState} from 'react';
import {getDataUsers, setDataUsers} from "./services/StorageService.js";

export const ContextData = createContext('')

export function Provider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const [users, setUsers] = useState(null)

    const toggleTheme = () => {
        setDarkMode(prevState => !prevState)
    }

    const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json()
                const quantity = +prompt('Скількі юзерів ви бажаєте викликати? (1-10)')
                const selectedUsers = result.slice(0, quantity);
                setUsers(selectedUsers)
                setDataUsers(selectedUsers);
            } catch (e){
                console.error('Помилка при отримані даних:', e);
            }
    }

    useEffect(() => {
        const savedUsers = getDataUsers();
        if (savedUsers.length === 0){
            setUsers(null)
        } else if (savedUsers){
            setUsers(savedUsers)
        } else {
            fetchData()
        }
    }, []);

    const deleteAll = () => {
        localStorage.clear()
        setUsers(null)
    }

    return (
        <ContextData.Provider value={{darkMode, toggleTheme, fetchData, users, setUsers, deleteAll}}>
            {children}
        </ContextData.Provider>
    );
}

export const useTheme = () => useContext(ContextData)

