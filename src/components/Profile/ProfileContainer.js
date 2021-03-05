import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, toggleIsFetching } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(
    ProfileContainerWithUrlData
);