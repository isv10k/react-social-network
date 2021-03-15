import { authAPI } from '../api/api';

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

export const getAuthData = () => {
    return (dispatch) => {
        authAPI.getAuthData().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserAuthData(id, email, login));
            }
        });
    };
};

export default authReducer;
