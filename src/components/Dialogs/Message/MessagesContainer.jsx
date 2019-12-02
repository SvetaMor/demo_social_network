import React from 'react';
import Messages from './Messages';
import {getMessageFromFriend, sendMessageToFriend, getMoreMessages,
     deleteMessage, clearMessages, restoreMessageFormDeleted} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        profile: state.profilePage.profile
    };
};

const mapDispatchToProps = {getMessageFromFriend, sendMessageToFriend,
            restoreMessageFormDeleted, getMoreMessages, deleteMessage, clearMessages};

class MessagesContainer extends React.Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getMessageFromFriend(userId);
        //this.props.getUserProfile(userId);
    }

    componentWillUnmount(){
        this.props.clearMessages();
    }

    render() {
        const userId = this.props.match.params.userId;
        const currentPage = this.props.dialogsPage.messagesPage;
        const getMoreMessagesFromFriend = (e) =>{
            this.props.getMoreMessages(userId, currentPage);
        };
        return <Messages dialogsPage={this.props.dialogsPage }
                        profile={this.props.profile}
                        sendMessageToFriend={this.props.sendMessageToFriend}
                        getMoreMessagesFromFriend={getMoreMessagesFromFriend}
                        deleteMessage={this.props.deleteMessage}
                        restoreMessageFormDeleted={this.props.restoreMessageFormDeleted}
                        getUserProfile={this.props.getUserProfile}
                />
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesContainer);
