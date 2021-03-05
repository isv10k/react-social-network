import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, toggleIsFetching } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, { setUserProfile, toggleIsFetching })(
    ProfileContainer
);
