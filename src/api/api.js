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

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getUserStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then((response) => response.data);
    },
    updateUserStatus(newStatus) {
        return instance
            .put(`profile/status`, { status: newStatus })
            .then((response) => response.data);
    },
};

export const authAPI = {
    getAuthData() {
        return instance.get('auth/me').then((response) => response.data);
    },
};
