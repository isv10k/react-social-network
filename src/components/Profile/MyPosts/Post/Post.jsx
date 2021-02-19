import React from 'react';
import s from '../MyPosts.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatarfiles.alphacoders.com/125/125577.jpg' alt='ava' />
            <span className={s.postMessage}>
                {props.message}
            </span>
            <div className={s.likes}>
                Likes: {props.likeCount}
            </div>
        </div>
    );
}

export default Post;