import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {actionCreateAddPost, actionCreateDraftPostUpdate} from '../../../redux/state'

const MyPosts = (props) => {

    const draftPostChange = (e) => {
        let changedPost = e.target.value
        props.dispatch(actionCreateDraftPostUpdate(changedPost))
    }

    const addNewPost = (e) => {
        if (props.draftPost.message !== '')
            props.dispatch(actionCreateAddPost())
        e.target.focus()
    }

    return (

        <div className={s.postArea}>
            <p>my posts</p>
            <div>
                <textarea onChange={draftPostChange} value={props.draftPost.message}
                          placeholder="Enter new post here" rows="5" cols="50"/>
            </div>
            <div>
                <button onClick={addNewPost}>New Post</button>
            </div>
            <div>
                {props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/>)}
            </div>
        </div>
    );
}

export default MyPosts;