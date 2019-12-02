import React, {useState} from 'react';
import Preloader from '../common/preloader/Preloader';
import ProfileDataForm from '../Profile/ProfileInfo/ProfileDataForm';
import ProfileData from '../Profile/ProfileInfo/ProfileData';
import {Form, Row, Col} from 'react-bootstrap';
import style from '../Profile/ProfileInfo/ProfileInfo.module.css';

const Settings = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
        //
    }

    return (
        <div>
            <div >
            <h5>Account settings</h5>
            <Form.Group as={Row}>
                <Col sm="5">
                    <p>You can change your main foto: </p>
                </Col>
                <Col sm="7">
                    {props.isOwner
                        && <div className={style.fileUpload}>
                            <label>
                                <input type="file" onChange={onMainPhotoSelected} />
                                <span>Выберите файл</span>
                            </label>
                        </div>}
                </Col>
            </Form.Group>
            {editMode ? <ProfileDataForm initialValues={props.profile}
                                        onSubmit={onSubmit} profile={props.profile}/>
                      : <ProfileData goToEditMode={()=>{setEditMode(true)}}
                                    isOwner={props.isOwner} profile={props.profile}
                                    showAboutMe={true} />}
            </div>
        </div>
    );
    }

export default Settings;
