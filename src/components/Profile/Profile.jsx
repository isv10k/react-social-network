import React from 'react';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {


  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
      {/*<MyPostsContainer postsData={props.state.posts} draftPost={props.state.draftPost} dispatch={props.dispatch}/>*/}
    </>
  );
}

export default Profile;