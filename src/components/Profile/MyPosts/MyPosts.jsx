import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    return (

        <div className={s.postArea}>
            <p>my posts</p>
            <div>
                <textarea placeholder="Enter new post here" rows="5" cols="50"></textarea>
            </div>
            <div>
                <button>New Post</button>
            </div>
            <div>
                { props.postsData.map( post => <Post message={post.message} likeCount={post.likeCount} key={post.id}/> ) }
            </div>
        </div>
    );
}

export default MyPosts;