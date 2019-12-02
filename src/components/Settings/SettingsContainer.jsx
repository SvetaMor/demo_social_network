import React from 'react';
import {connect} from 'react-redux';
import {profileThunkCreator, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import Settings from './Settings';


class SettingsContainer extends React.Component{
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId; //4910;
            if (!userId) {
                this.props.history.push("/login"); //плохой вариант редиректа
            }
        };
        this.props.profileThunkCreator(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render (){
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Settings {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {profileThunkCreator, savePhoto, saveProfile}),
    withRouter
)(SettingsContainer);
