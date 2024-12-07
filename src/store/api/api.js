import axios from 'axios';

const BASE_URL = 'http://localhost:3000/todolist';

export const getTodos = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при получении списка todos');
    }
};

export const createTodo = async (newTodo) => {
    try {
        const response = await axios.post(BASE_URL, newTodo);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при добавлении todos');
    }
};

export const updateTodo = async (todo) => {
    try {
        const response = await axios.put(`${BASE_URL}/${todo.id}`, todo);
        return response.data;
    } catch (error) {
        throw new Error('Ошибка при обновлении todo');
    }
};

export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw new Error('Ошибка при удалении todo');
    }
};