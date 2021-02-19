import s from '../../Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Friends = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={"/messages/" + props.id}>
                <img className={s.imgRounded} src={props.profilePicture} alt={props.name}/>
                <span className={s.name}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default Friends;
