const ADD_MESSAGE = "ADD-MESSAGE"
const DRAFT_MESSAGE_UPDATE = "DRAFT-MESSAGE-UPDATE"
// const DRAFT_MESSAGE_DIALOG_ID = "DRAFT-MESSAGE-DIALOG-ID"

let initialState = {
    contacts: [
        {id: 1, name: "Sergey", profilePicture: "https://i.pravatar.cc/20?img=59"},
        {id: 2, name: "Sasha", profilePicture: "https://i.pravatar.cc/20?img=51"},
        {id: 3, name: "Vasya", profilePicture: "https://i.pravatar.cc/20?img=45"},
        {id: 4, name: "Petya", profilePicture: "https://i.pravatar.cc/20?img=40"},
    ],
    messages: [
        {id: 1, message: "Yo", dialogId: 2, messageAuthor: 2, timeStamp: '1'},
        {id: 2, message: "Hi", dialogId: 2, messageAuthor: 1, timeStamp: '2'},
        {id: 3, message: "Yolololo", dialogId: 3, messageAuthor: 1, timeStamp: '3'},
        {id: 4, message: "Lalaka", dialogId: 3, messageAuthor: 3, timeStamp: '4'},
        {id: 5, message: "Sup", dialogId: 3, messageAuthor: 1, timeStamp: '1'},
        {id: 6, message: "secret info", dialogId: 1, messageAuthor: 1, timeStamp: '1'},
        {id: 7, message: "nice", dialogId: 1, messageAuthor: 1, timeStamp: '2'},
    ],
    draftMessage: {
        id: 0,
        message: "",
        dialogId: 0,
        messageAuthor: 1,
        timeStamp: ""
    }
}

const addMessage = (state) => {
    let newId = state.messages[state.messages.length - 1].id + 1

    let stateCopy = {
        ...state,
        messages: [...state.messages],
        draftMessage: {...state.draftMessage}
    }

    stateCopy.messages.push({
        id: newId,
        message: stateCopy.draftMessage.message,
        dialogId: stateCopy.draftMessage.dialogId,
        messageAuthor: stateCopy.draftMessage.messageAuthor,
        timeStamp: new Date(),
    })

    stateCopy.draftMessage = {
        id: 0,
        message: "",
        dialogId: 0,
        messageAuthor: 1,
        timeStamp: ""
    }
    return stateCopy
}
const draftMessageUpdate = (state, newDraftMessage) => {
    let stateCopy = {
        ...state,
        draftMessage: {...state.draftMessage}
    }
    stateCopy.draftMessage.message = newDraftMessage.message
    stateCopy.draftMessage.dialogId = newDraftMessage.dialogId
    stateCopy.draftMessage.timeStamp = new Date()
    return stateCopy
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            if (state.draftMessage.message !== '')
                return addMessage(state)
            else
                return state
        }

        case DRAFT_MESSAGE_UPDATE:
            return draftMessageUpdate(state, action.newDraftMessage)

        default:
            return state
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

