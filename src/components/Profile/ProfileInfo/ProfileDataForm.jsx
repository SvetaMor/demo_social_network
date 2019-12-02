import React from 'react';
import {createField, Input, Textarea, Check} from '../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormsControls.module.css';
import {Form, Row, Col, Button} from 'react-bootstrap';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <Form onSubmit={handleSubmit}>
        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}

        <Form.Label>Full name: </Form.Label>
        {createField("Full name", "fullName", [], Input)}

        {createField("", "lookingForAJob", [], Check, {type: "checkbox", label: "Lookong for a job" })}

        <Form.Label>My professional skills: </Form.Label>
        {createField("", "lookingForAJobDescription", [], Textarea)}

        <Form.Label>About me: </Form.Label>
        {createField("", "aboutMe", [], Textarea)}

        <Form.Label> My contacts: </Form.Label>
        {Object.keys(profile.contacts).map(key=> {
            return  <Form.Group as={Row} key={key} className={s.contact}>
                        <Form.Label column sm="2">{key}: </Form.Label>
                        <Col sm="10">
                            {createField(key, "contacts."+key, [], Input)}
                        </Col>
                    </Form.Group>
            })}

        <Button type="submit" variant="outline-success" className={s.buttonEditSave}>Save</Button>
    </Form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
