import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={"/messages/" + props.id}>
                <div className={s.imageDiv}>
                    <img className={s.imgRounded} src={props.profilePicture} alt={props.name} />
                </div>
                <div className={s.friendName}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default Friends;
