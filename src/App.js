import React from 'react';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer.jsx';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
//import {HashRouter, BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import SettingsContainer from './components/Settings/SettingsContainer';
//import SideBarContainer from './components/SideBar/SideBarContainer';
//import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
//import './App.css';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {getCountNewMessages} from './redux/dialogs-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
//import {BrowserRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {withSuspense} from './hoc/withSuspense';
import {Row, Col} from 'react-bootstrap';
import Layout from './components/common/Layout/Layout';
//import Jumbotron from './components/common/Jumbotron/Jumbotron';
import IcoProfileContainer from './components/IcoProfile/IcoProfileContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const MessagesContainer = React.lazy(() => import('./components/Dialogs/Message/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (promise) => {
        //alert(promise.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };
    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        if (this.props.isAuth) {
            this.props.getCountNewMessages();
        }
        return (<>
            <HeaderContainer />
            <Layout>
                <Row>
                    <Col sm={3}>
                        <IcoProfileContainer />
                        <NavbarContainer />
                    </Col>
                    <Col sm={1}>
                    </Col>
                    <Col sm={8}>
                        <Switch>
                            <Route exact path='/'
                                render = { () =>
                                    <Redirect to="/profile"/> }/>
                            <Route path='/dialog/:userId?'
                                render = {withSuspense(MessagesContainer)}/>
                            <Route path='/dialogs/'
                                render = {withSuspense(DialogsContainer)}/>
                            <Route path='/profile/:userId?'
                                render = {withSuspense(ProfileContainer)}/>
                            <Route path='/users'
                                render= {withSuspense(UsersContainer)}/>
                            <Route path='/friends'
                                render= {withSuspense(FriendsContainer)}/>
                            <Route path='/news' render={ () => <News />}/>
                            <Route path='/settings'
                                render={ () => <SettingsContainer />}/>
                            <Route path='/login/facebook'
                                render={ () => <div>Facebook</div>}/>
                            <Route path='/login' render={ () => <Login />}/>
                            <Route path='*'
                                render={ () => <div>404 NOT FOUND</div>} />
                        </Switch>
                    </Col>
                </Row>
            </Layout>
            <Footer/>
        </>);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    countNewElements: state.dialogsPage.countNewElements,
    isAuth: state.auth.isAuth
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, getCountNewMessages}))(App);

const JSApp = (props) => {
    return <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
}

export default JSApp;
