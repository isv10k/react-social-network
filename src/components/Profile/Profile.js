import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                userProfile={props.userProfile}
                isFetching={props.isFetching}
                updateUserStatus={props.updateUserStatus}
                status={props.status}
            />
            <MyPostsContainer />
        </>
    );
};

export default Profile;
