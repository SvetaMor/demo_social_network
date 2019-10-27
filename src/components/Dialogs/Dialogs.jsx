import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';
//import {reduxForm} from 'redux-form';

const Dialogs = (props) => {
    //let dialogsPage = props.store.getState().dialogsPage;
    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message}/>);
    //let newMessageBody = props.dialogsPage.newMessageBody;


    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody);
    };

    //if (!props.isAuth) return <Redirect to={'/login'} />;
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
    );
}

export default Dialogs;
