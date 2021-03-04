import s from './Users.module.css';
import defaultAvatar from '../../assets/images/avatar.png';

const Users = (props) => {
    const amountOfPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagination = [];
    for (let i = 1; i <= amountOfPages; i++) {
        pagination.push(i);
    }
    return (
        <div className={s.usersPage}>
            <h1>Users</h1>
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
                        {page}
                    </span>
                ))}
            </div>
            {props.users.map((user) => (
                <div className={s.userCard} key={user.id}>
                    <div className={s.userPhotoFollow}>
                        <img
                            src={user.photos.small ?? defaultAvatar}
                            alt={user.name}
                            className={s.userPhoto}
                        />
                        {user.followed ? (
                            <button
                                type="button"
                                onClick={() => props.onUnFollow(user.id)}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => props.onFollow(user.id)}
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
