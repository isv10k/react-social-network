import s from './Friends.module.css';
import Friend from './Friend/Friend'

const Friends = (props) => {

    let sidebarFriends = props.friends.map(
        friend => {
            return (
                <Friend profilePicture={friend.profilePicture} name={friend.name} key={friend.id} id={friend.id}/>
            )
        }
    )

  return (
    <div  className={s.friendsPlate}>
        {sidebarFriends}        
    </div>
  );
}

export default Friends;