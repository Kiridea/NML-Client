import axios from "axios";

const listApiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export const getLists = () => {
    return listApiClient.get('/lists');
};

export const getList = (id) => {
    return listApiClient.get(`/lists/${id}`);
};

export const addList = (data) => {
    return listApiClient.post('/lists', data);
};

export const updateList = (id, data) => {
    return listApiClient.put(`/lists/${id}`, data);
};

export const deleteList = (id) => {
    return listApiClient.delete(`/lists/${id}`);
};