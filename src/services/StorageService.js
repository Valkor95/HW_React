export function getDataUsers(){
    return JSON.parse(localStorage.getItem('users')) || [];
}

export function addNewId(){
    const users = getDataUsers();
    const newId = users.length > 0
        ? users.sort((a, b) => a.id - b.id)[users.length - 1].id + 1
        : 1;
    return newId
}

export const getUserIndexById = (id) => {
    const savedUsers = getDataUsers();
    return savedUsers.findIndex(user => user.id === id);
}

export function setDataUsers(data){
    localStorage.setItem('users', JSON.stringify(data))
}

export function newIdUser(){
    const currentData = getDataUsers() || [];
    const newId = currentData.length > 0
        ? Math.max(...currentData.map(user => user.id)) + 1
        : 1;
    return newId
}