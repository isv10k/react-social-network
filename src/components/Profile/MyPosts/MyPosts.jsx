import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postArea}>
            <p>my posts</p>
            <div>
                <p>new post</p>
                <input type='text' />
            </div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;