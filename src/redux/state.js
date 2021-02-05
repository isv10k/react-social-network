// let renderAll = () => {
//     'stab'
// }

// get state.messagesPage
// get contacts
// get messages
// get draftMessage
// get state.profilePage
// get posts

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "hey yo", likeCount: 15 },
                { id: 2, message: "it is happening", likeCount: 1 },
            ]
        },
        messagesPage: {
            contacts: [
                { id: 1, name: "Sergey", profilePicture: "https://i.pravatar.cc/20?img=59" },
                { id: 2, name: "Sasha", profilePicture: "https://i.pravatar.cc/20?img=51" },
                { id: 3, name: "Vasya", profilePicture: "https://i.pravatar.cc/20?img=45" },
                { id: 4, name: "Petya", profilePicture: "https://i.pravatar.cc/20?img=40" },
            ],
            messages: [
                { id: 1, message: "Yo", dialogId: 2, messageAuthor: 2, timeStamp: '1' },
                { id: 2, message: "Hi", dialogId: 2, messageAuthor: 1, timeStamp: '2' },
                { id: 3, message: "Yolololo", dialogId: 3, messageAuthor: 1, timeStamp: '3' },
                { id: 4, message: "Lalaka", dialogId: 3, messageAuthor: 3, timeStamp: '4' },
                { id: 5, message: "Sup", dialogId: 3, messageAuthor: 1, timeStamp: '1' },
                { id: 6, message: "secret info", dialogId: 1, messageAuthor: 1, timeStamp: '1' },
                { id: 7, message: "nice", dialogId: 1, messageAuthor: 1, timeStamp: '2' },
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
    renderAll() { },
    addMessage() {
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
        this.renderAll()
    },
    draftMessageUpdate(newDraftMessage) {
        this._state.messagesPage.draftMessage = newDraftMessage
        this.renderAll()
    },
    subscribe(observer) {
        this.renderAll = observer
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