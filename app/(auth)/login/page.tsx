'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Form, Button, Schema, Message } from 'rsuite'
import { useRouter } from 'next/navigation'
import { AppGrid, AppRow, AppCol, AppCenter } from "@/widgets/Grid";
import { AppForm, AppButton, AppButtonToolbar, AppInput, AppHStack, AppPasswordInput, AppTextarea } from '@/widgets/Form'
import Image from 'next/image'

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
    const router = useRouter()

    const handleSubmit = async () => {
        setLoading(true)
        setError('')

        const res = await signIn('credentials', {
            redirect: false,
            email: formValue.email,
            password: formValue.password,
        })

        if (res?.error) {
            setError('Invalid email or password')
        }
        
        if (res?.ok) {
            router.push('/dashboard')
        }

        setLoading(false)
    }

    return (
        <AppGrid fluid className='h-screen'>
            <AppRow gutter={24} className='h-full'>
                <AppCol lg={12}>
                    <Image
                        src="https://placehold.co/1500/PNG?text=Phum+Warranty"
                        fill
                        className="object-cover"
                        alt="Phum Warranty"
                    />
                </AppCol>

                <AppCol lg={12}>
                    <AppCenter className='h-full'>
                        
                    </AppCenter>
                </AppCol>
            </AppRow>
        </AppGrid>

        // <div className="flex min-h-screen items-center justify-center bg-gray-100">
        //     <div className="w-full max-w-sm bg-white  p-6 rounded-xl shadow">
        //         <h1 className="text-xl font-semibold text-center mb-4 ">
        //             Admin Login
        //         </h1>

        //         {error && (
        //             <Message type="error" className="mb-4">
        //                 {error}
        //             </Message>
        //         )}

        //         <Form
        //             fluid
        //             model={model}
        //             formValue={formValue}
        //             onChange={(value) => setFormValue(value as typeof formValue)}
        //             onSubmit={handleSubmit}
        //         >
        //             <Form.Group>
        //                 <Form.ControlLabel>Email</Form.ControlLabel>
        //                 <Form.Control name="email" type="email" />
        //             </Form.Group>

        //             <Form.Group>
        //                 <Form.ControlLabel>Password</Form.ControlLabel>
        //                 <Form.Control name="password" type="password" />
        //             </Form.Group>

        //             <Button
        //                 appearance="primary"
        //                 block
        //                 type="submit"
        //                 loading={loading}
        //             >
        //                 Login
        //             </Button>
        //         </Form>
        //     </div>
        // </div>
    )
}
