const ADD_MESSAGE = "ADD-MESSAGE"
const DRAFT_MESSAGE_UPDATE = "DRAFT-MESSAGE-UPDATE"

const addMessage = (state) => {
    let newId = state.messages[state.messages.length - 1].id + 1;
    state.messages.push({
        id: newId,
        message: state.draftMessage.message,
        dialogId: state.draftMessage.dialogId,
        messageAuthor: state.draftMessage.messageAuthor,
        timeStamp: new Date(),
    })

    state.draftMessage = {
        id: 0,
        message: "",
        dialogId: 0,
        messageAuthor: 0,
        timeStamp: ""
    }
    return state
}
const draftMessageUpdate = (state, newDraftMessage) => {
    state.draftMessage = newDraftMessage
    return state
}

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return addMessage(state)

        case DRAFT_MESSAGE_UPDATE:
            return draftMessageUpdate(state, action.newDraftMessage)

        default: return state
    }
}

export function actionCreateAddMessage() {
    return {
        type: ADD_MESSAGE
    }
}
export function actionCreateDraftMessageUpdate(newMessage) {
    return {
        type: DRAFT_MESSAGE_UPDATE,
        newDraftMessage: newMessage
    }
}

export default messageReducer

