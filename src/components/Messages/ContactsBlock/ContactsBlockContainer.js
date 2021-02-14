// import React from 'react'
import {connect} from "react-redux"
import Contacts from "./Contacts";

const mapStateToProps = (state) => {
    return {
        contacts: state.messagesPage.contacts
    }
}

// const mapDispatchToProps = (dispatch) => {
//     // return {
//     //     addNewPost: () => {
//     //         dispatch(actionCreateAddPost())
//     //     },
//     //     draftPostUpdate: (e) => {
//     //         let changedPost = e.target.value
//     //         dispatch(actionCreateDraftPostUpdate(changedPost))
//     //     }
//     // }
//     return null
// }


const ContactsBlockContainer = connect(mapStateToProps)(Contacts)

export default ContactsBlockContainer;