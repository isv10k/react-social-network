import s from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    return (
        <>
            <div className={s.sidebar}>
                <Friends friends={props.friends}/>
                <div>
                    <NavLink style={{textDecoration: 'none', paddingLeft: '5px'}} activeClassName={s.active} to='/users'>Users</NavLink>
                </div>
            </div>
        </>
    );
}

export default Sidebar;