import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                userProfile={props.userProfile}
                isFetching={props.isFetching}
            />
            <MyPostsContainer />
            {/*<MyPostsContainer postsData={props.state.posts} draftPost={props.state.draftPost} dispatch={props.dispatch}/>*/}
        </>
    );
};

export default Profile;
