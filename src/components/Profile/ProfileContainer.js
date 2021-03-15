import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';
import withRedirect from '../../hoc/withRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUserProfile(this.props.match.params.userId);
    };

    render() {
        return <Profile {...this.props}></Profile>;
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
    }),
    withRouter,
    withRedirect
)(ProfileContainer);
