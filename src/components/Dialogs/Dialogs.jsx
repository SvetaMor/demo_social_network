import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import defaultPhoto from '../../assets/images/avatars/avatar-icon-4.png';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d[0].fullName} key={d[0].userId}
            id={d[0].userId} newMessagesCount={d[1]}
            img={d[0].photos.small?d[0].photos.small:defaultPhoto}/>);

    return <div>
            {dialogsElements}
        </div>
}

export default Dialogs;
