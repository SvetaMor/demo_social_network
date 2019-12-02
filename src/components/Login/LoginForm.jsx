import React from 'react';
import {reduxForm} from 'redux-form';
import {Input, Check} from '../common/FormsControls/FormsControls';
import styles from '../common/FormsControls/FormsControls.module.css';
import {required} from '../../utils/validators/validators';
import {createField} from '../common/FormsControls/FormsControls';
import {Form, Button} from 'react-bootstrap';

const LoginForm =({handleSubmit, error, captchaUrl}) => {
    return (
        <Form onSubmit={handleSubmit}>

            {createField('Email', 'email', [required], Input)}

            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Check, {type: 'checkbox', label: 'remember me'})}
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('Symbols from image', 'captcha', [required], Input)}
            {error && <div className={styles.formSummaryError}>
                <p>{error}</p>
            </div>}
            <div>
                <Button type="submit" variant="outline-success">Login</Button>
            </div>
        </Form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)
