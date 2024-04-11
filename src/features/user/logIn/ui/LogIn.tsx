import { RoutePath } from '@/app/router';
import { IUser, logIn, userSchema } from '@/entities/user/model';
import { handleInputChange } from '@/shared/lib/functions';
import { handleValidateData } from '@/shared/lib/functions/handleValidateData';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button, Form, FormField } from '@/shared/ui/components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn: React.FC = () => {
    const [user, setUser] = useState<IUser>({
        name: '',
        password: ''
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        try {
            handleValidateData(user, userSchema, setErrors)
            dispatch(logIn(user))
            navigate(`${RoutePath.main}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form title='Вход' onSubmit={handleSubmit} width='300px'>
            <FormField
                title='Логин'
                name='name'
                fieldType='input'
                value={user.name}
                zodError={errors.name}
                onChange={(e) => handleInputChange(e, setUser)}
            />
            <FormField
                title='Пароль'
                name='password'
                fieldType='input'
                value={user.password}
                zodError={errors.password}
                onChange={(e) => handleInputChange(e, setUser)}
            />
            <Button children='Ок' variant='approve' btnSize='small'/>
        </Form>
    );
};

export default LogIn;