import React, {useState} from 'react';
import Message from './Message';
import AddMessageForm from '../AddMessageForm/AddMessageForm';
import {Button, Image, Row, Col} from 'react-bootstrap';
import Preloader from '../../common/preloader/Preloader.jsx';
import {nameAddMessageForm} from '../../common/FormsControls/paramsForms';
import Styles from './messageStyle';

const Messages = ({profile, dialogsPage, ...props}) =>
{
    let dateMessage = new Date().toISOString();
    if (!profile) {
        return <Preloader />
    }
    const userId = dialogsPage.currentCompanionId;
    const userName = dialogsPage.currentCompanionName;
    const userPhoto = dialogsPage.currentCompanionPhoto;

    const deleteMessageFromState = (idMessage) =>
    {
        props.deleteMessage(idMessage, userId);
    }
    const restoreMessageFromState = (idMessage) =>
    {
        props.restoreMessageFormDeleted(idMessage, userId);
    }

    const messagesElements = dialogsPage.messages
        .map(ms => ms.map(m =>
        {
            const ownName = profile.fullName;
            let restoreMode = (dialogsPage.deletedMessages.indexOf(m.id)!==-1);
            if (!dialogsPage.messagesPagesCount === null){
                return <Preloader />
            }
            let dateMode1=true;

            (dateMessage.slice(0,10)!=m.addedAt.slice(0,10))
                    ?dateMode1=true:dateMode1=false;
            dateMessage=m.addedAt;
            return (
                <Message key={m.id} idMessage={m.id} message={m.body}
                         senderName={(profile.userId === m.senderId)
                                     ?ownName:userName}
                         ownName={ownName} viewed={m.viewed} date={m.addedAt} deleteMessage={deleteMessageFromState}
                         restoreMessageFormDeleted={restoreMessageFromState}
                         restoreMode={restoreMode} dateMode={dateMode1}
                />
            )
        }));

    const addNewMessage = (values) =>
    {
        props.sendMessageToFriend(userId, values.newMessageBody, nameAddMessageForm);
    };

    return <Styles>
        <Row>
        <Col xs={6} md={5}>
        </Col>
        <Col xs={6} md={7}>
            <Image src={userPhoto} roundedCircle alt=""
                   className="companion-photo"/>
        </Col>
        </Row>
        <Button onClick={(e)=>props.getMoreMessagesFromFriend(e)} variant="outline-success">
            show previous messages
        </Button>
        {messagesElements}
        <AddMessageForm onSubmit={addNewMessage}/>
    </Styles>
}
export default Messages;
