import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a8d363bf-0485-46a4-b6b1-a422d50931cf',
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unFollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },
};
