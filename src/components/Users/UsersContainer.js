import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    onFollowAC,
    onSetUsersAC,
    onUnFollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => this.props.setUsers(response.data.items));
    };

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                changeCurrentPage={this.changeCurrentPage}
                onUnFollow={this.props.onUnFollow}
                onFollow={this.props.onFollow}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFollow: (userId) => {
            return dispatch(onFollowAC(userId));
        },
        onUnFollow: (userId) => {
            return dispatch(onUnFollowAC(userId));
        },
        setUsers: (users) => {
            return dispatch(onSetUsersAC(users));
        },
        setCurrentPage: (page) => {
            return dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (totalUsersCount) => {
            return dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
