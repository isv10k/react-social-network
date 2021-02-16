const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

function onFollow(state, userId) {
    return {...state, users: state.users.map((user) => {
        if (user.id === userId)
            return {...user, followed: true}
        return user
    })}
}

function onUnFollow(state, userId) {
    return {...state, users: state.users.map((user) => {
        if (user.id === userId)
            return {...user, followed: false}
        return user
    })}
}

function setUsers(state, users) {
    return {...state, users: [...users]}
}

const initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return onFollow(state, action.userId)
        case UNFOLLOW:
            return onUnFollow(state, action.userId)
        case SET_USERS:
            return setUsers(state, action.users)
        default:
            return state
    }
}

export default usersReducer

export const onFollowAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const onUnFollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const onSetUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
