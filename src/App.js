import React from 'react';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import {HashRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SideBarContainer from './components/SideBar/SideBarContainer';
//import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import './App.css';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
//import {BrowserRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (promise) => {debugger
        alert(promise.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };
    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                {/*SideBarContainer*/}
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                                render = { () => <Redirect to="/profile"/> }  />
                        <Route path='/dialogs'
                                render = {withSuspense(DialogsContainer)} />
                        <Route path='/profile/:userId?'
                                render = {withSuspense(ProfileContainer)}  />
                        <Route path='/users'
                                render= {withSuspense(UsersContainer)} />
                        <Route path='/news' render={ () => <News />} />
                        <Route path='/music' render={ () => <Music />} />
                        <Route path='/settings' render={ () => <Settings />} />
                        <Route path='/login/facebook' render={ () => <div>Facebook</div>} />
                        <Route path='/login' render={ () => <Login />} />
                        <Route path='*' render={ () => <div>404 NOT FOUND</div>} />

                    </Switch>
                </div>
            </div>
      );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
}

export default SamuraiJSApp;
