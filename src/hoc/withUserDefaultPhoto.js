import React from 'react';
import {connect} from 'react-redux';
import {getRandomIco} from '../components/common/UserIcon/userIcon';

let mapStateToProps = (state) => {
    return{
    userPhotos: state.usersPage.userPhotos
}};

export const withUserDefaultPhoto = (Component) => {

    class UserDefaultPhoto extends React.Component {
        render(){
            const userPhoto =getRandomIco(this.props.userPhotos);
            return <Component {...this.props} userPhoto={userPhoto}/>
        }
    }

    let ConnectUserDefaultPhoto = connect(mapStateToProps)(UserDefaultPhoto);
    return ConnectUserDefaultPhoto;
}
