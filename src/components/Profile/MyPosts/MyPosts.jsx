import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPost = React.createRef()

    function draftPostChange() {
        props.draftPostUpdate(newPost.current.value)
    }

    function addNewPost() {
        if (props.draftPost.message !== '')
            props.addPost()
        newPost.current.focus()
    }

    return (

        <div className={s.postArea}>
            <p>my posts</p>
            <div>
                <textarea ref={newPost} onChange={draftPostChange} value={props.draftPost.message}
                          placeholder="Enter new post here" rows="5" cols="50"></textarea>
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