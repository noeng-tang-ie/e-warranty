import React from 'react'
import { Form, SelectPicker } from 'rsuite';

const CustomLookUpField = ({ name = '', label = '', text = '', error, required, ...props }: { name: string; label: string; text?: string; error?: string; required?: boolean;[key: string]: any }) => {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}{required && <span style={{ color: 'red' }}>*</span>}</Form.Label>
            <Form.Control name={name} accepter={SelectPicker} {...props}/>
            {text && <Form.Text>{text}</Form.Text>}
            {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}
        </Form.Group>
    )
}

export default CustomLookUpField
