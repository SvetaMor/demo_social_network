import React from 'react';
import styles from './FormsControls.module.css';
import {Field} from 'redux-form';
import {Form} from 'react-bootstrap';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <Form.Group className={styles.formControl +" "+(hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </Form.Group>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><Form.Control as="textarea" rows="3" {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><Form.Control {...input} {...restProps} /></FormControl>
}

export const Check = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><Form.Check {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text='') => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate = {validators}
               component={component}
               {...props}
        /> {text}
    </div>
)
