// import React from 'react'
import {actionCreateAddPost, actionCreateDraftPostUpdate} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
        draftPost: state.profilePage.draftPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(actionCreateAddPost())
        },
        draftPostUpdate: (e) => {
            let changedPost = e.target.value
            dispatch(actionCreateDraftPostUpdate(changedPost))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;