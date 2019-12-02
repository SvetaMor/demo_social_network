import React from 'react';
import Contacts from './Contacts';


const AboutMe = ({profile}) => {
    return <div>
    <p>{profile.aboutMe}</p>
    <h6>Lookong for a job: </h6>
    <p>{profile.lookingForAJob ? "yes" : "no"}</p>

    {profile.lookingForAJob &&
        <div>
            <h6>My professional skills: </h6>
            <p>{profile.lookingForAJobDescription}</p>
        </div>
    }
    <div>
        <h6>My contacts:</h6> {Object.keys(profile.contacts).map(key=>{
            return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}

    </div>
    </div>
}

export default AboutMe;
