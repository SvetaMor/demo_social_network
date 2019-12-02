import React from 'react';
//import s from './Profile.module.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {profileThunkCreator, getStatus, updateStatus, savePhoto, saveProfile}
            from '../../redux/profile-reducer';
import {getFollowingInProgress} from '../../redux/users-selectors';
import {follow, unfollow} from '../../redux/users-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    friendsPage: state.friendsPage,
    isFollowed: state.profilePage.isFollowed,
    followingInProgress: getFollowingInProgress(state)
});

class ProfileContainer extends React.Component{

    refreshProfile(){ debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push("/login"); //плохой вариант редиректа
            }
        };
        this.props.profileThunkCreator(userId);
        this.props.getStatus(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.match.params.userId !== prevProps.match.params.userId
            || prevProps.followingInProgress !== this.props.followingInProgress) {
            this.refreshProfile(); debugger
        }
    }

    render (){
        return (
            <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                    isFollowed={this.props.isFollowed}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow} unfollow={this.props.unfollow}/>
        );
    }
}

export default compose(
    connect(mapStateToProps, {profileThunkCreator, getStatus, updateStatus,
            savePhoto,   saveProfile, follow, unfollow}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
