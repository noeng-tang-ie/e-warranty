'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Form, Button, Schema, Message } from 'rsuite'

const { StringType } = Schema.Types

const model = Schema.Model({
    email: StringType()
        .isEmail('Please enter a valid email')
        .isRequired('Email is required'),
    password: StringType()
        .isRequired('Password is required')
})

export default function LoginPage() {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true)
        setError('')

        const res = await signIn('credentials', {
            redirect: false,
            email: formValue.email,
            password: formValue.password
        })

        if (res?.error) {
            setError('Invalid email or password')
        }

        setLoading(false)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white  p-6 rounded-xl shadow">
                <h1 className="text-xl font-semibold text-center mb-4">
                    Admin Login
                </h1>

                {error && (
                    <Message type="error" className="mb-4">
                        {error}
                    </Message>
                )}

                <Form
                    fluid
                    model={model}
                    formValue={formValue}
                    onChange={setFormValue}
                    onSubmit={handleSubmit}
                >
                    <Form.Group>
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" />
                    </Form.Group>

                    <Button
                        appearance="primary"
                        block
                        type="submit"
                        loading={loading}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}
