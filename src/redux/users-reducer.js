const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

function onFollow(state, userId) {
    return {
        ...state,
        users: state.users.map((user) => {
            if (user.id === userId) return { ...user, followed: true };
            return user;
        }),
    };
}

function onUnFollow(state, userId) {
    return {
        ...state,
        users: state.users.map((user) => {
            if (user.id === userId) return { ...user, followed: false };
            return user;
        }),
    };
}

function setUsers(state, users) {
    return { ...state, users: [...users] };
}

function setCurrentPage(state, page) {
    return { ...state, currentPage: page };
}

function setTotalUsersCount(state, totalUsersCount) {
    return { ...state, totalUsersCount: totalUsersCount };
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return onFollow(state, action.userId);
        case UNFOLLOW:
            return onUnFollow(state, action.userId);
        case SET_USERS:
            return setUsers(state, action.users);
        case SET_CURRENT_PAGE:
            return setCurrentPage(state, action.page);
        case SET_TOTAL_USERS_COUNT:
            return setTotalUsersCount(state, action.totalUsersCount);
        default:
            return state;
    }
};

export default usersReducer;

export const onFollowAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
};
export const onUnFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    };
};
export const onSetUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
};
export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page,
    };
};
export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    };
};
