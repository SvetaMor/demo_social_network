import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/preloader/Preloader';
import {NavLink} from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .badge-sending: hover {
        background: white;
        color: DarkCyan;
        border-color: DarkCyan;
        border: solid 1px;
    }
    .following-block img {
        height: 150px;
        cursor: pointer;
    }
    .unfollowing-block img {
        height: 120px;
        cursor: pointer;
    }
`;

const Profile = ({profile, status, updateStatus, isOwner, followingInProgress,
                savePhoto, saveProfile, isFollowed, follow, unfollow}) => {
    if (!profile){
        return <Preloader />
    }

    const path ='/dialog/'+profile.userId;

    return (
        <Styles>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} followingInProgress={followingInProgress} follow={follow}
            unfollow={unfollow} isFollowed={isFollowed} updateStatus={updateStatus} saveProfile={saveProfile} />
            {!isOwner&&<NavLink to={path}>
                <h4><Badge pill variant="info" className="badge-sending">
                    send message to me</Badge></h4>
            </NavLink>}

        </Styles>
    );
}

export default Profile;
