import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/preloader/Preloader';

const Profile = ({profile, status, updateStatus}) => {
    if (!profile){
        return <Preloader />
    }
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
