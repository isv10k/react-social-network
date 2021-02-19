import {connect} from "react-redux";
import {
    actionCreateAddMessage,
    actionCreateDraftMessageUpdate
} from "../../../redux/message-reducer";
import Messages from "./Messages";

const mapStateToProps = (state, {match}) => {
    const {
        params: {dialogId},
    } = match;

    let correspondingMessages = state.messagesPage.messages.filter(
        message => message.dialogId === Number(dialogId)
    )

    return {
        messages: correspondingMessages,
        draftMessage: state.messagesPage.draftMessage.message,
        dialogId: Number(dialogId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(actionCreateAddMessage())
        },
        draftMessageUpdate: (changedMessage) => {
            dispatch(actionCreateDraftMessageUpdate(changedMessage))
        }
    }
}


const MessagesBlockContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesBlockContainer