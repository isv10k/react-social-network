import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
} from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getUserStatus(this.props.match.params.userId);
    };

    render() {
        return <Profile {...this.props}></Profile>;
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        updateUserStatus,
        getUserStatus,
    }),
    withRouter
    //withRedirect
)(ProfileContainer);
