import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';
import withRedirect from '../../hoc/withRedirect';

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

let ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default withRedirect(
    connect(mapStateToProps, {
        getUserProfile,
    })(ProfileContainerWithUrlData)
);
