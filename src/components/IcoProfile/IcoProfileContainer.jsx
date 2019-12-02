import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {profileThunkCreator, getStatus, updateStatus}
    from '../../redux/profile-reducer';
import IcoProfile from './IcoProfile';
import Preloader from '../common/preloader/Preloader';

class IcoProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (this.props.location.pathname.indexOf('profile')!==1) {
            userId = this.props.authUserId;
        };
        if (!!userId) {
            this.props.profileThunkCreator(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props.match.params.userId !== prevProps.match.params.userId
                || this.props.location !== prevProps.location) {
            this.refreshProfile();
        }
    }
    render (){
        if (!this.props.profile){
            return <Preloader />
        }
        return (
            <IcoProfile {...this.props}
                    isOwner={this.props.authUserId===this.props.profile.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {profileThunkCreator, getStatus, updateStatus}),
    withRouter
)(IcoProfileContainer);
