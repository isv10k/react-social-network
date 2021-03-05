import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPost, draftPostUpdate } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
        draftPost: state.profilePage.draftPost,
    };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, draftPostUpdate })(
    MyPosts
);

export default MyPostsContainer;
