import React from 'react';
import {NavLink} from 'react-router-dom';
import photoDefault from '../../assets/images/avatars/avatar-icon-13.png';
import {Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .friendCard img {
        height: 100px;
    }
    .friendCard{
        margin-top: 10px;
    }
`;

const FriendItem =(props)=> {
    const path ='/profile/'+props.id;
    const friendPhoto = (props.img != null ? props.img : photoDefault);
    
    return <Styles >
        <Row className="friendCard">
            <Col md={3}>
                <Image thumbnail src={friendPhoto} alt='' />

            </Col>
            <Col md={9}>
                <NavLink to={path}>{props.name}</NavLink>
                <p>{props.status}</p>
            </Col>
        </Row>
    </Styles>
}

export default FriendItem;
