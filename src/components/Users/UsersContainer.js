import React from 'react';
import { connect } from 'react-redux';
import {
    onFollow,
    onUnFollow,
    getUsers,
    getPageOfUsers,
} from '../../redux/users-reducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    changeCurrentPage = (page) => {
        this.props.getPageOfUsers(page, this.props.pageSize);
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
    getUsers,
    getPageOfUsers,
})(UsersContainer);
