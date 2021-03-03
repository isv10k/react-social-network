import s from './Users.module.css'
import axios from "axios";

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://reqres.in/api/users').then(response => {
            props.setUsers(response.data.data)
        })
        //props.setUsers(
            // [
            //     {
            //         id: 1,
            //         followed: true,
            //         name: 'Dmitry',
            //         status: 'pravda zhivite po pravde',
            //         country: 'Russia',
            //         city: 'Moscow',
            //         avatarUrl: 'https://kinoafisha.ua/upload/persons/442/src_1416822098nagiev-dmitriy.jpg'
            //     },
            //     {
            //         id: 2,
            //         followed: true,
            //         name: 'Kurwa',
            //         status: 'pravda zhivite po pravde',
            //         country: 'England',
            //         city: 'London',
            //         avatarUrl: 'https://kinoafisha.ua/upload/persons/442/src_1416822098nagiev-dmitriy.jpg'
            //     },
            //     {
            //         id: 3,
            //         followed: false,
            //         name: 'Vasya',
            //         status: 'pravda zhivite po pravde',
            //         country: 'Belarus',
            //         city: 'Minsk',
            //         avatarUrl: 'https://kinoafisha.ua/upload/persons/442/src_1416822098nagiev-dmitriy.jpg'
            //     }
            // ])


    }


    let users = props.users.map(user => {

        return (
            <div className={s.userCard} key={user.id}>
                <div className={s.userPhotoFollow}>
                    <img src={user.avatar} alt={user.first_name} className={s.userPhoto}/>
                    {
                        user.followed
                            ? <button onClick={() => props.onUnFollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.onFollow(user.id)}>Follow</button>
                    }
                </div>
                <div className={s.userInfoBlock}>
                    <div>
                        <div className={s.userName}>{user.first_name}</div>
                        <div className={s.userStatus}>{user.last_name}</div>
                    </div>
                    <div className={s.location}>
                        <div>{user.email},</div>
                        {/*<div>{user.city}</div>*/}
                        <div>country</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.usersPage}>
            <h1>Users</h1>
            {users}
        </div>
    )
}
export default Users