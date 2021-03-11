const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';

// function onFollowF(state, userId) {
//     return {
//         ...state,
//         users: state.users.map((user) => {
//             if (user.id === userId) return { ...user, followed: true };
//             return user;
//         }),
//     };
// }

// function onUnFollowF(state, userId) {
//     return {
//         ...state,
//         users: state.users.map((user) => {
//             if (user.id === userId) return { ...user, followed: false };
//             return user;
//         }),
//     };
// }

// function setUsersF(state, users) {
//     return { ...state, users: [...users] };
// }

// function setCurrentPageF(state, page) {
//     return { ...state, currentPage: page };
// }

// function setTotalUsersCountF(state, totalUsersCount) {
//     return { ...state, totalUsersCount: totalUsersCount };
// }
// function toggleIsFetchingF(state, isFetching) {
//     return { ...state, isFetching: isFetching };
// }
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    idsOfFollowProcess: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return { ...user, followed: true };
                    return user;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return { ...user, followed: false };
                    return user;
                }),
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                idsOfFollowProcess: action.isFetching
                    ? [...state.idsOfFollowProcess, action.userId]
                    : state.idsOfFollowProcess.filter(
                          (id) => id !== action.userId
                      ),
            };

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
export const toggleIsFollowing = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching: isFetching,
        userId: userId,
    };
};
