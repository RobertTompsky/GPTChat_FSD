import { handleInputChange } from '@/shared/lib/functions';
import { handleValidateData } from '@/shared/lib/functions/handleValidateData';
import { FormField, Button, Form, Input } from '@/shared/ui/components';
import { Container } from '@/shared/ui/layout';
import React, { useState } from 'react';
import { z } from 'zod';

export type LoginData = {
    login: string,
    password: string
}

const LoginSchema = z.object({
    login: z.string().min(1, 'Обязательное поле'),
    password: z.string().min(1, 'Обязательное поле'),
})

export const SignIn: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        login: '',
        password: ''
    })
    const [errors, setErrors] = useState<{[key: string]: string}>({})
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        try {
            handleValidateData(loginData, LoginSchema, setErrors)
            console.log(loginData)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Container centeredChildren>
                <Form
                    title='Форма'
                    width='400px'
                    onSubmit={handleSubmit}>
                    <FormField
                        fieldType='input'
                        title='Логин'
                        name='login'
                        value={loginData.login}
                        onChange={(e) => handleInputChange(e, setLoginData)}
                        zodError={errors.login}
                        
                    />
                    <FormField
                        fieldType='input'
                        title='Пароль'
                        name='password'
                        value={loginData.password}
                        onChange={(e) => handleInputChange(e, setLoginData)}
                        zodError={errors.password}
                    />
                    <Button
                        children='Подтвердить'
                        variant='default'
                    />
                </Form>
            </Container>
        </div>
    );
};
