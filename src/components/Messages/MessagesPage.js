import React from 'react';
import s from './Messages.module.css';
import ContactsBlockContainer from './ContactsBlock/ContactsBlockContainer';
import { Redirect, Route } from 'react-router-dom';
import MessagesBlockContainer from './MessagesBlock/MessagesBlockContainer';
import { connect } from 'react-redux';

class MessagesPage extends React.Component {
    render() {
        let isAuth = this.props.isAuth;
        if (!isAuth) return <Redirect to="/login" />;
        else
            return (
                <div className={s.dialogs}>
                    <ContactsBlockContainer />
                    <Route
                        path="/messages/:dialogId"
                        component={MessagesBlockContainer}
                    />
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps)(MessagesPage);
