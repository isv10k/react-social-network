const ADD_POST = "ADD-POST"
const DRAFT_POST_UPDATE = "DRAFT-POST-UPDATE"

let initialState = {
    posts: [
        {id: 1, message: "hey yo", likeCount: 15},
        {id: 2, message: "it is happening", likeCount: 1},
    ],
    draftPost: {
        id: 0,
        message: '',
        likeCount: 0,
    }
}

const addPost = (state) => {

    let stateCopy = {
        ...state,
        posts: [...state.posts]
    }

    let newId = stateCopy.posts[stateCopy.posts.length - 1].id + 1
    stateCopy.posts.push({
        id: newId,
        message: state.draftPost.message,
        likeCount: state.draftPost.likeCount
    })

    stateCopy.draftPost = {
        id: 0,
        message: "",
        likeCount: 0
    }
    return stateCopy
}

const draftPostUpdate = (state, newDraftPost) => {
    let stateCopy = {
        ...state,
        draftPost: {...state.draftPost}
    }
    stateCopy.draftPost.message = newDraftPost
    return stateCopy
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.draftPost.message !== '')
                return addPost(state)
            else
                return state
        }
        case DRAFT_POST_UPDATE:
            return draftPostUpdate(state, action.newDraftPost)

        default:
            return state
    }
}

export function actionCreateAddPost() {
    return {
        type: ADD_POST
    }
}

export function actionCreateDraftPostUpdate(newPost) {
    return {
        type: DRAFT_POST_UPDATE,
        newDraftPost: newPost
    }
}

export default profileReducer