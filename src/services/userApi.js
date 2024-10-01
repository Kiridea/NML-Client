import axios from "axios";

const userApiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const getUsers = () => {
    return userApiClient.get('/users');
};

export const getUser = (id) => {
    return userApiClient.get(`/users/${id}`);
};

export const addUser = (data) => {
    return userApiClient.post('/users', data);
};

export const updateUser = (id, data) => {
    return userApiClient.put(`/users/${id}`, data);
};

export const deleteUser = (id) => {
    return userApiClient.delete(`/users/${id}`);
};