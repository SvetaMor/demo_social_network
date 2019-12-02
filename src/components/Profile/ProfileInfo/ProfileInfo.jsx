import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileData from './ProfileData';

const ProfileInfo = (props) =>
{
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.descriptionBlock}>
            <ProfileData isOwner={props.isOwner} profile={props.profile}
                showAboutMe={false} unfollow={props.unfollow}
                follow={props.follow} isFollowed={props.isFollowed}
                followingInProgress={props.followingInProgress}/>
        </div>
    );
}

export default ProfileInfo;
