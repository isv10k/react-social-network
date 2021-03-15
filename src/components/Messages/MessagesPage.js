import React from 'react';
import s from './Messages.module.css';
import ContactsBlockContainer from './ContactsBlock/ContactsBlockContainer';
import { Redirect, Route } from 'react-router-dom';
import MessagesBlockContainer from './MessagesBlock/MessagesBlockContainer';
import { connect } from 'react-redux';
import withRedirect from '../../hoc/withRedirect';

const MessagesPage = () => {
    return (
        <div className={s.dialogs}>
            <ContactsBlockContainer />
            <Route
                path="/messages/:dialogId"
                component={MessagesBlockContainer}
            />
        </div>
    );
};

export default withRedirect(MessagesPage);
