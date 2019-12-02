import React, {useState} from 'react';
import AboutMe from './AboutMe.jsx';
import style from './ProfileInfo.module.css';
import {Row, Col, Button} from 'react-bootstrap';
import followMe from '../../../assets/images/followMe.jpg';
import unfollowMe from '../../../assets/images/unfollowMe.jpg';
import s from './ProfileInfo.module.css';


const ProfileData = ({profile, isOwner, goToEditMode, showAboutMe, isFollowed, follow,
                    unfollow, followingInProgress}) => {
    const [showAboutMeMode, setShowAboutMeMode] = useState(showAboutMe);
    const showAboutMeMore = () => {
        setShowAboutMeMode(true);
    }
    const hideAboutMe = () => {
        setShowAboutMeMode(false);
    }
    return <div className={style.info}>
        {isOwner && !!goToEditMode &&
                        <Button size="lg" onClick={goToEditMode} variant="outline-success"
                                className={style.buttonEditSave} >Edit my profile</Button>}
            <Row>
                <Col sm={6}>
                    <h5 >Welcome!</h5>
                </Col>
                <Col sm={1}>
                </Col>
                <Col sm={5}>
                    {!goToEditMode &&
                        <h4 className={style.lookingJob}>
                            {profile.lookingForAJob && "I'm looking for a job" }</h4>}
                </Col>
            </Row>
            <Row>
                <Col sm={6} className={s.nameBlock}>
                    <p className={style.fullName}>{ /*My name is*/ }<b >
                        {profile.fullName}</b> </p>
                </Col>
                <Col sm={1}>
                </Col>
                <Col sm={5}>
                    {!isOwner && ((isFollowed)
                        ? (<div className="unfollowing-block">
                            <img src={unfollowMe} alt=''
                                onClick={()=>{unfollow(profile.userId)}}
                                disabled={followingInProgress.some(id=>
                                    id === profile.userId)}/>
                        </div>)
                        : (<div className="following-block">
                            <img src={followMe} alt='' onClick={()=>{follow(profile.userId)}}
                             disabled={followingInProgress.some(id=> id === profile.userId)}/>
                        </div>))}
                </Col>
            </Row>

            {!!goToEditMode
                ?  <div>
                        <h6>About me </h6>
                        <AboutMe profile={profile} />
                   </div>
                : !showAboutMeMode ? <Button onClick={showAboutMeMore} size="lg" variant="outline-success">
                                            About me (more)</Button>
                                : <div>
                                    <Button onClick={hideAboutMe} size="lg" variant="outline-success">
                                            About me (hide)</Button>
                                    <AboutMe profile={profile} />
                                 </div>}
    </div>
}

export default ProfileData;
