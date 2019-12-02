import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const DialogItem =({newMessagesCount, ...props})=> {
    const pathName = '/dialog/'+props.id;
    const pathImg = '/profile/'+props.id;
    return <Card.Body className={s.dialog +' '+s.active}>
        <NavLink to={pathImg} className={s.pointer}>
            <img src={props.img} alt={props.id} />
        </NavLink>
        <NavLink to={pathName} className={s.pointer}>
            {props.name}
            {(newMessagesCount>0)&&
                <b className={s.newMessages}>{newMessagesCount}</b>}
        </NavLink>
    </Card.Body>
}

export default DialogItem;
