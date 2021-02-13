import React from 'react'
import {actionCreateAddPost, actionCreateDraftPostUpdate} from '../../../redux/profile-reducer'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     const draftPostChange = (e) => {
//         let changedPost = e.target.value
//         props.dispatch(actionCreateDraftPostUpdate(changedPost))
//     }
//
//     const addNewPost = (e) => {
//         if (props.draftPost.message !== '')
//             props.dispatch(actionCreateAddPost())
//     }
//
//     return <MyPosts addPost={addNewPost} draftPostUpdate={draftPostChange} postsData={props.postsData} draftPost={props.draftPost}/>
// }
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