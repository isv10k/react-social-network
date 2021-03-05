import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const draftPostChange = (e) => {
        props.draftPostUpdate(e.target.value)
    }

    const addNewPost = (e) => {
        props.addPost(e)
        document.getElementById('postTextArea').focus()
    }

    return (
        <div className={s.postArea}>
            <p>My posts</p>
            <div>
                <textarea id="postTextArea" onChange={draftPostChange} value={props.draftPost.message}
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