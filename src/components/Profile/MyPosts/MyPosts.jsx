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
                <Post message='hey yo' likeCount='15' />
                <Post message='it is happening' likeCount='1' />
            </div>
        </div>
    );
}

export default MyPosts;