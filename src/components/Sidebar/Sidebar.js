import s from './Sidebar.module.css';
import Friends from './Friends/Friends';

const Sidebar = (props) => {

    return (
        <>
            <div className={s.sidebar}>
                <Friends friends={props.friends}/>
            </div>
        </>
    );
}

export default Sidebar;