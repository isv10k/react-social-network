import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
    onFollow,
    setUsers,
    onUnFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
} from '../../redux/users-reducer';
import Users from './Users';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);

        usersAPI
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(page, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
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
                idsOfFollowProcess={this.props.idsOfFollowProcess}
                toggleIsFollowing={this.props.toggleIsFollowing}
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
        idsOfFollowProcess: state.usersPage.idsOfFollowProcess,
    };
}

export default connect(mapStateToProps, {
    onFollow,
    onUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
})(UsersContainer);
