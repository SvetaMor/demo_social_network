import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Button, Form} from 'react-bootstrap';
import {nameAddMessageForm} from '../../common/FormsControls/paramsForms';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return(
        <Form onSubmit={props.handleSubmit} className="mt-3 mb-3">
            <Field component={Textarea}
                   validate = {[required, maxLength50]}
                   name={"newMessageBody"} placeholder='Enter your message'/>
            <Button variant="outline-success" type="submit">Send</Button>
        </Form>
    )
}

export default reduxForm({form: nameAddMessageForm})(AddMessageForm);
