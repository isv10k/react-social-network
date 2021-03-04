const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

function onFollowF(state, userId) {
    return {
        ...state,
        users: state.users.map((user) => {
            if (user.id === userId) return { ...user, followed: true };
            return user;
        }),
    };
}

function onUnFollowF(state, userId) {
    return {
        ...state,
        users: state.users.map((user) => {
            if (user.id === userId) return { ...user, followed: false };
            return user;
        }),
    };
}

function setUsersF(state, users) {
    return { ...state, users: [...users] };
}

function setCurrentPageF(state, page) {
    return { ...state, currentPage: page };
}

function setTotalUsersCountF(state, totalUsersCount) {
    return { ...state, totalUsersCount: totalUsersCount };
}
function toggleIsFetchingF(state, isFetching) {
    return { ...state, isFetching: isFetching };
}
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    ifFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return onFollowF(state, action.userId);
        case UNFOLLOW:
            return onUnFollowF(state, action.userId);
        case SET_USERS:
            return setUsersF(state, action.users);
        case SET_CURRENT_PAGE:
            return setCurrentPageF(state, action.page);
        case SET_TOTAL_USERS_COUNT:
            return setTotalUsersCountF(state, action.totalUsersCount);
        case TOGGLE_IS_FETCHING:
            return toggleIsFetchingF(state, action.isFetching);
        default:
            return state;
    }
};

export default usersReducer;

export const onFollow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
};
export const onUnFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
};
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page,
    };
};
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    };
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};
