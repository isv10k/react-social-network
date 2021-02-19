import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import MessagesPage from "./components/Messages/MessagesPage";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <SidebarContainer />
                <div className='app-wrapper-content'>
                    <Route
                        path='/messages'
                        render={() => (
                            <MessagesPage />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => (
                            <Profile />
                        )}
                    />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/users' component={UsersContainer} />
                </div>
            </div>
    );
}

export default App;
