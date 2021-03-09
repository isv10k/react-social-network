const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }

        default:
            return state;
    }
};

export function setUserAuthData(userId, email, login) {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login },
    };
}

export default authReducer;
