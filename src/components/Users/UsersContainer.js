import {connect} from 'react-redux'
import {onFollowAC, onSetUsersAC, onUnFollowAC} from "../../redux/users-reducer";
import Users from "./Users";

function mapStateToProps(state) {
    return {
        users: state.usersPage.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFollow: (userId) => {
            return dispatch(onFollowAC(userId))
        },
        onUnFollow: (userId) => {
            return dispatch(onUnFollowAC(userId))
        },
        setUsers: (users) => {
            return dispatch(onSetUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer