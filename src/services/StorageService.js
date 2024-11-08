export function getData(){
    return JSON.parse(localStorage.getItem('users')) || [];
}

export function setDataUsers(data){
    localStorage.setItem('users', JSON.stringify(data))
}