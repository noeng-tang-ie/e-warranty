import React from 'react'
import { Form, PasswordInput } from 'rsuite';

const CustomPasswordField = ({ name, label, text, icon, error, required, ...props }: { name: string; label: string; text?: string; icon?: React.ReactNode; error?: string; required?: boolean;[key: string]: any }) => {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}{required && <span style={{ color: 'red' }}>*</span>}</Form.Label>
            <Form.Control name={name} type="password" autoComplete="off" accepter={PasswordInput} {...props} />
            {text && <Form.Text>{text}</Form.Text>}
            {error && <Form.ErrorMessage>{error}</Form.ErrorMessage>}
        </Form.Group>
    )
}



export { CustomPasswordField }