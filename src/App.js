import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import MessagesPage from "./components/Messages/MessagesPage";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
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
                            // <Messages state={props.state.messagesPage} dispatch={props.dispatch}/>
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => (
                            <Profile />
                            // <Profile state={props.state.profilePage} dispatch={props.dispatch}/>
                        )}
                    />
                    {/* <Route exact path='/messages' component={Messages} /> */}
                    {/* <Route exact path='/profile' component={Profile} /> */}
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/users' component={UsersContainer} />
                </div>
            </div>
    );
}

export default App;

/*
navlink to
a color
a active gold
navlink activeClassName s.active


*/