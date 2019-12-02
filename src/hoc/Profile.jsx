import React from 'react';
//import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/preloader/Preloader';

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    if (!profile){
        return <Preloader />
    }
    return (
        <div>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status}
                        updateStatus={updateStatus} saveProfile={saveProfile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
