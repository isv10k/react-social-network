import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    onFollowAC,
    onSetUsersAC,
    onUnFollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC,
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
                isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching,
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
        toggleIsFetching: (isFetching) => {
            return dispatch(toggleIsFetchingAC(isFetching));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
