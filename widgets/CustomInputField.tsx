import React from 'react'
import { Form, Input, InputGroup, NumberInput } from 'rsuite';

interface InputGroupFieldProps {
    icon: React.ReactNode;
    [key: string]: any;
}
const CustomInputField = ({ name = '', label = '', text = '', icon, error, required, ...props }: { name: string; label: string; text?: string; icon?: React.ReactNode; error?: string; required?: boolean;[key: string]: any }) => {
    return (
        <Form.Group>
            <Form.Label>{label}{required && <span style={{ color: 'red' }}>*</span>}</Form.Label>
            {icon ? <InputGroupField icon={icon} {...props} /> : (props.type === 'number' ? <NumberInput {...props} /> : <Form.Control name={name} {...props} />)}
            {text && <Form.Text>{text}</Form.Text>}
            {error && <Form.ErrorMessage show={!!error} placement='bottomStart'>{error}</Form.ErrorMessage>}
        </Form.Group>
    )
}

const InputGroupField = React.forwardRef<HTMLInputElement, InputGroupFieldProps>(({ icon, ...inputProps }, ref) => {
    return (
        <InputGroup inside>
            {inputProps.type === 'number' ? <NumberInput {...inputProps} ref={ref} /> : <Input {...inputProps} ref={ref} />}
            <InputGroup.Addon>
                {icon}
            </InputGroup.Addon>
        </InputGroup>
    );
});


export { CustomInputField };