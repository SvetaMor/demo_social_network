import React from 'react';
import Friends from './Friends';
import {getUsersArrayFollowed}  from '../../redux/friends-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        getUsersArrayFollowed :  () => dispatch(getUsersArrayFollowed())
    }
}

class FriendsContainer extends React.Component {
    componentDidMount(){
        console.log('friends');
        this.props.getUsersArrayFollowed();
    }
    render() {
        return <Friends  friendsPage={this.props.friendsPage }/>
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(FriendsContainer);
