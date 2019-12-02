import React from 'react';
import userPhoto from '../../assets/images/user3.png';
import styled from 'styled-components';
import ProfileStatusWithHooks from '../Profile/ProfileInfo/ProfileStatusWithHooks';
import {Card} from 'react-bootstrap';


const Styles = styled.div`
    .imgIco {
        max-height: 150px;
    }
`;

const IcoProfile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    return (
    <Styles>
        <Card >
            <Card.Img variant="top"
                      src={profile.photos.large || userPhoto} alt=''/>
            <Card.Body>
                <Card.Title>{profile.fullName}</Card.Title>
                <Card.Text><ProfileStatusWithHooks status={status}
                    isOwner={isOwner}
                    updateStatus={updateStatus}/>
                </Card.Text>
            </Card.Body>
        </Card>
    </Styles>
    );
}

export default IcoProfile;
