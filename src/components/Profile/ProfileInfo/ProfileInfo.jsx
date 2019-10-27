import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjohnwelsheurope%2Ffiles%2F2019%2F05%2FScreenshot-2019-05-05-at-19.30.12-1200x709.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <h5>About me</h5>
                <p>{props.profile.aboutMe}</p>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
