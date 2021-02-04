let state = {
    profilePage: {
        posts: [
            { id: 1, message: "hey yo", likeCount: 15 },
            { id: 2, message: "it is happening", likeCount: 1 },
        ]
    },
    messagesPage: {
        contacts: [
            { id: 1, name: "Sergey", profilePicture: "https://i.pravatar.cc/20?img=59"},
            { id: 2, name: "Sasha", profilePicture: "https://i.pravatar.cc/20?img=51"},
            { id: 3, name: "Vasya", profilePicture: "https://i.pravatar.cc/20?img=45"},
            { id: 4, name: "Petya", profilePicture: "https://i.pravatar.cc/20?img=40"},
        ],
        messages: [
            { id: 1, message: "Yo", dialogId: 2, messageAuthor: 2, timeStamp: '1'},
            { id: 2, message: "Hi", dialogId: 2, messageAuthor: 1, timeStamp: '2'},
            { id: 3, message: "Yolololo", dialogId: 3, messageAuthor: 1, timeStamp: '3'},
            { id: 4, message: "Lalaka", dialogId: 3, messageAuthor: 3, timeStamp: '4'},
            { id: 5, message: "Sup", dialogId: 3, messageAuthor: 1, timeStamp: '1'},
            { id: 6, message: "secret info", dialogId: 1, messageAuthor: 1, timeStamp: '1'},
            { id: 7, message: "nice", dialogId: 1, messageAuthor: 1, timeStamp: '2'},
        ]
    },

}

export default state;