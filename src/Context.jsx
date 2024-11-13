import React, {createContext, useContext, useEffect, useState} from 'react';
import {getDataUsers, getUserIndexById, setDataUsers} from "./services/StorageService.js";
import {useNavigate} from "react-router-dom";

export const ContextData = createContext('')

export function ProviderContext({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate()
    const toggleTheme = () => {
        setDarkMode(prevState => !prevState)
    }


    const deleteAll = () => {
        localStorage.clear()
        setUsers(null)
    }

    const deleteUserId = (dataId) => {
        const savedUsers = getDataUsers();
        const newUsers = savedUsers.filter(user => user.id !== dataId);
        setUsers(newUsers);
        setDataUsers(newUsers);
    }

    const navigateUserId = (dataId) => {
        navigate(`/${dataId}`)
    }

    const getUserById = (id) => {
        const savedUsers = getDataUsers();
        return savedUsers.find(user => user.id === id);
    }

    const updateUserById = (user) => {
        const savedUsers = getDataUsers();
        const index = getUserIndexById(user.id)

        if(index === -1){
            return;
        }

        savedUsers[index] = user;
        setDataUsers(savedUsers);
    }

    return (
        <ContextData.Provider value={{darkMode, toggleTheme, deleteAll, deleteUserId, navigateUserId, getUserById, updateUserById, getUserIndexById}}>
            {children}
        </ContextData.Provider>
    );
}

export const useTheme = () => useContext(ContextData)

