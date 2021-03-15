import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DRAFT_POST_UPDATE = 'DRAFT-POST-UPDATE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    posts: [
        { id: 1, message: 'hey yo', likeCount: 15 },
        { id: 2, message: 'it is happening', likeCount: 1 },
    ],
    draftPost: {
        id: 0,
        message: '',
        likeCount: 0,
    },
    userProfile: null,
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.draftPost.message !== '') {
                let stateCopy = {
                    ...state,
                    posts: [...state.posts],
                };

                let newId = stateCopy.posts[stateCopy.posts.length - 1].id + 1;
                stateCopy.posts.push({
                    id: newId,
                    message: state.draftPost.message,
                    likeCount: state.draftPost.likeCount,
                });

                stateCopy.draftPost = {
                    id: 0,
                    message: '',
                    likeCount: 0,
                };
                return stateCopy;
            } else return state;
        }
        case DRAFT_POST_UPDATE: {
            let stateCopy = {
                ...state,
                draftPost: { ...state.draftPost },
            };
            stateCopy.draftPost.message = action.newDraftPost;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, userProfile: action.userProfile };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }

        default:
            return state;
    }
};

export function addPost() {
    return {
        type: ADD_POST,
    };
}

export function draftPostUpdate(newPost) {
    return {
        type: DRAFT_POST_UPDATE,
        newDraftPost: newPost,
    };
}
export function setUserProfile(userProfile) {
    return {
        type: SET_USER_PROFILE,
        userProfile: userProfile,
    };
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        if (!userId) userId = 2;
        // TODO: re render on pure profile
        profileAPI.getProfile(userId).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(data));
        });
    };
};

export default profileReducer;
