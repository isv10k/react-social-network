import s from "./Messages.module.css";
import ContactsBlockContainer from "./ContactsBlock/ContactsBlockContainer";
import {Route} from "react-router-dom";
import MessagesBlockContainer from "./MessagesBlock/MessagesBlockContainer";

const MessagesPage = () => {
    return (
        <div className={s.dialogs}>
            <ContactsBlockContainer />
            <Route path="/messages/:dialogId" component={MessagesBlockContainer} />
        </div>
    )
}

export default MessagesPage