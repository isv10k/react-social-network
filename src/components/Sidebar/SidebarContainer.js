import Sidebar from "./Sidebar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: [
            state.messagesPage.contacts[1],
            state.messagesPage.contacts[2],
            state.messagesPage.contacts[3],
        ]
    }
}

// const mapDispatchToProps = () => {
//     return null
// }

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer;