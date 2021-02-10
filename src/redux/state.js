const ADD_MESSAGE = "ADD-MESSAGE"
const DRAFT_MESSAGE_UPDATE = "DRAFT-MESSAGE-UPDATE"
const ADD_POST = "ADD-POST"
const DRAFT_POST_UPDATE = "DRAFT-POST-UPDATE"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hey yo", likeCount: 15},
                {id: 2, message: "it is happening", likeCount: 1},
            ],
            draftPost: {
                id: 0,
                message: '',
                likeCount: 0,
            }
        },
        messagesPage: {
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
                messageAuthor: 0,
                timeStamp: ""
            }
        },

    },
    _callSubscriber() {
    },
    _addMessage() {
        //console.table('addmessagePo FACTU', messageObject)
        let newId = this._state.messagesPage.messages[this._state.messagesPage.messages.length - 1].id + 1;
        this._state.messagesPage.messages.push({
            id: newId,
            message: this._state.messagesPage.draftMessage.message,
            dialogId: this._state.messagesPage.draftMessage.dialogId,
            messageAuthor: this._state.messagesPage.draftMessage.messageAuthor,
            timeStamp: new Date(),
        })

        this._state.messagesPage.draftMessage = {
            id: 0,
            message: "",
            dialogId: 0,
            messageAuthor: 0,
            timeStamp: ""
        }
        this._callSubscriber()
    },
    _draftMessageUpdate(newDraftMessage) {
        this._state.messagesPage.draftMessage = newDraftMessage
        this._callSubscriber()
    },
    _addPost() {
        let newId = this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1
        this._state.profilePage.posts.push({
            id: newId,
            message: this._state.profilePage.draftPost.message,
            likeCount: this._state.profilePage.draftPost.likeCount
        })

        this._state.profilePage.draftPost = {
            id: 0,
            message: "",
            likeCount: 0
        }
        this._callSubscriber()
    },
    _draftPostUpdate(newDraftPost) {
        this._state.profilePage.draftPost.message = newDraftPost
        this._callSubscriber()
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_MESSAGE:
                this._addMessage()
                break;
            case DRAFT_MESSAGE_UPDATE:
                this._draftMessageUpdate(action.newDraftMessage)
                break;
            case ADD_POST:
                this._addPost()
                break;
            case DRAFT_POST_UPDATE:
                this._draftPostUpdate(action.newDraftPost)
                break;
            default: alert("something wrong")
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    getMessagesPage() {
        return this._state.messagesPage
    },
    getContacts() {
        return this._state.messagesPage.contacts
    },
    getMessages() {
        return this._state.messagesPage.messages
    },
    getDraftMessage() {
        return this._state.messagesPage.draftMessage
    },
    getProfilePage() {
        return this._state.profilePage
    },
    getPosts() {
        return this._state.profilePage.posts
    },
    getState() {
        return this._state
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


// let state = {
//     profilePage: {
//         posts: [
//             { id: 1, message: "hey yo", likeCount: 15 },
//             { id: 2, message: "it is happening", likeCount: 1 },
//         ]
//     },
//     messagesPage: {
//         contacts: [
//             { id: 1, name: "Sergey", profilePicture: "https://i.pravatar.cc/20?img=59"},
//             { id: 2, name: "Sasha", profilePicture: "https://i.pravatar.cc/20?img=51"},
//             { id: 3, name: "Vasya", profilePicture: "https://i.pravatar.cc/20?img=45"},
//             { id: 4, name: "Petya", profilePicture: "https://i.pravatar.cc/20?img=40"},
//         ],
//         messages: [
//             { id: 1, message: "Yo", dialogId: 2, messageAuthor: 2, timeStamp: '1'},
//             { id: 2, message: "Hi", dialogId: 2, messageAuthor: 1, timeStamp: '2'},
//             { id: 3, message: "Yolololo", dialogId: 3, messageAuthor: 1, timeStamp: '3'},
//             { id: 4, message: "Lalaka", dialogId: 3, messageAuthor: 3, timeStamp: '4'},
//             { id: 5, message: "Sup", dialogId: 3, messageAuthor: 1, timeStamp: '1'},
//             { id: 6, message: "secret info", dialogId: 1, messageAuthor: 1, timeStamp: '1'},
//             { id: 7, message: "nice", dialogId: 1, messageAuthor: 1, timeStamp: '2'},
//         ],
//         draftMessage: {
//             id: 0,
//             message: "",
//             dialogId: 0,
//             messageAuthor: 0,
//             timeStamp: "" 
//         }
//     },

// }

// export function addMessage() {
//     //console.table('addmessagePo FACTU', messageObject)
//     let newId = state.messagesPage.messages[state.messagesPage.messages.length - 1].id + 1;
//     state.messagesPage.messages.push({
//         id: newId,
//         message: state.messagesPage.draftMessage.message,
//         dialogId: state.messagesPage.draftMessage.dialogId,
//         messageAuthor: state.messagesPage.draftMessage.messageAuthor,
//         timeStamp: new Date(),
//     })

//     state.messagesPage.draftMessage = {
//         id: 0,
//         message: "",
//         dialogId: 0,
//         messageAuthor: 0,
//         timeStamp: "" 
//     }

//     renderAll(state)

// }

// export function draftMessageUpdate(newDraftMessage) {
//     state.messagesPage.draftMessage = newDraftMessage
//     renderAll(state)
// }


// export let subscribe = (observer) => {
//     renderAll = observer
// }
export default store;