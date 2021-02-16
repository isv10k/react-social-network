import s from './Sidebar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <>
            <div className={s.sidebar}>
                <Friends friends={props.friends}/>
                <div>
                    <NavLink style={{textDecoration: 'none', paddingLeft: '5px'}} activeClassName={{fontWeight: 'bolder', color: 'gold'}} to='/users'>Users</NavLink>
                </div>
            </div>
        </>
    );
}

export default Sidebar;