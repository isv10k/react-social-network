
const Users = (props) => {

    if (props.users.length === 0) {
        // props.setUsers([
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
    const axios = require('axios')
    axios.get('https://social-network.samuraijs.com/api/1.1/users').then(response => {
        console.log(response)
        debugger
    })

    let users = props.users.map(user => {

        return (
            <div style={{display: 'flex', flexDirection: 'row', padding: '5px'}} key={user.id}>
                <div style={{width: '120px', display: 'block'}}>
                    <img src={user.avatarUrl} alt={user.name} style={{width: '100px', height: '100px'}}/>
                    {
                        user.followed
                            ? <button onClick={() => props.onUnFollow(user.id)}>Unfollow</button>
                            : <button onClick={() => props.onFollow(user.id)}>Follow</button>
                    }
                </div>
                <div style={{borderRadius: '50% 20% / 10% 40%', border: 'solid 2px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '40px'}}>
                    <div>
                        <div><h3>{user.name}</h3></div>
                        <div style={{paddingRight: '30px', fontStyle: 'italic'}}>{user.status}</div>
                    </div>
                    <div>
                        <div>{user.country}</div>
                        <div>{user.city}</div>
                    </div>

                </div>
            </div>
        )
    })

    return (
        <>
            <h1>users</h1>
            {users}
        </>
    )
}
export default Users