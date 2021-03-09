import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import MessagesPage from './components/Messages/MessagesPage';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <SidebarContainer />
            <div className="app-wrapper-content">
                <Route path="/messages" render={() => <MessagesPage />} />
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer />}
                />
                <Route exact path="/news" component={News} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/users">
                    <UsersContainer />
                </Route>
            </div>
        </div>
    );
};

export default App;
