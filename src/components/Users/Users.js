import s from './Users.module.css';
import defaultAvatar from '../../assets/images/avatar.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

const Users = (props) => {
    const amountOfPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagination = [];
    // 10 instead of amountOfPages because too many users by now, TODO: pagination component
    for (let i = amountOfPages; i >= amountOfPages - 9; i--) {
        pagination.push(i);
    }
    return (
        <div className={s.usersPage}>
            <h1>Users</h1>
            {props.isFetching && <Preloader />}
            <div>
                {pagination.map((page) => (
                    <span
                        key={page}
                        className={`
                                ${s.pagination}
                                ${page === props.currentPage ? s.active : ''}
                            `}
                        onClick={() => props.changeCurrentPage(page)}
                    >
                        {amountOfPages - page + 1}
                    </span>
                ))}
            </div>
            {props.users.map((user) => (
                <div className={s.userCard} key={user.id}>
                    <div className={s.userPhotoFollow}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                src={user.photos.small ?? defaultAvatar}
                                alt={user.name}
                                className={s.userPhoto}
                            />
                        </NavLink>
                        {user.followed ? (
                            <button
                                type="button"
                                onClick={() => {
                                    usersAPI.unFollow(user.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            props.onUnFollow(user.id);
                                        }
                                    });
                                }}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => {
                                    usersAPI.follow(user.id).then((data) => {
                                        if (data.resultCode === 0) {
                                            props.onFollow(user.id);
                                        }
                                    });
                                }}
                            >
                                Follow
                            </button>
                        )}
                    </div>
                    <div className={s.userInfoBlock}>
                        <div>
                            <div className={s.userName}>{user.name}</div>
                            <div className={s.userStatus}>{user.status}</div>
                        </div>
                        <div className={s.location}>
                            <div>{user.name}@gmail.com</div>
                            {/* <div>{user.city}</div> */}
                            <div>country</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;
