const ADD_POST = "ADD-POST"
const DRAFT_POST_UPDATE = "DRAFT-POST-UPDATE"

const addPost = (state) => {
    let newId = state.posts[state.posts.length - 1].id + 1
    state.posts.push({
        id: newId,
        message: state.draftPost.message,
        likeCount: state.draftPost.likeCount
    })

    state.draftPost = {
        id: 0,
        message: "",
        likeCount: 0
    }
    return state
}

const draftPostUpdate = (state, newDraftPost) => {
    state.draftPost.message = newDraftPost
    return state
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return addPost(state)

        case DRAFT_POST_UPDATE:
            return draftPostUpdate(state, action.newDraftPost)

        default: return state
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