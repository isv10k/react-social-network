import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Sidebar state={props.state.messagesPage.contacts}/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/messages'
                        render={() => (
                            <Messages state={props.state.messagesPage} />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => (
                            <Profile state={props.state.profilePage} />
                        )}
                    />
                    {/* <Route exact path='/messages' component={Messages} /> */}
                    {/* <Route exact path='/profile' component={Profile} /> */}
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

/*
navlink to
a color
a active gold
navlink activeClassName s.active


*/