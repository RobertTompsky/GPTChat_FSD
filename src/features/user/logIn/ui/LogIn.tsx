import { RoutePath } from '@/app/router';
import { IUser, logIn, userSchema } from '@/entities/user/model';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button, Form, FormField } from '@/shared/ui/components';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LogIn: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IUser>({
        resolver: zodResolver(userSchema)
    })

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data: IUser) => {
        console.log(data)
        try {
            dispatch(logIn(data))
            navigate(`${RoutePath.main}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form
            title='Вход'
            onSubmit={handleSubmit(onSubmit)}
            width='300px'
            >
            <FormField
                title="Имя пользователя"
                fieldType="input"
                dataType="text"
                placeholder="Введите ваше имя"
                name="name"
                register={register}
                error={errors.name}
            />
            <FormField
                title="Пароль"
                fieldType="input"
                dataType="password"
                placeholder="Введите пароль"
                name="password"
                register={register}
                error={errors.password}
            />
            <Button
                children='Ок'
                variant='approve'
                btnSize='small'
            />
        </Form>
    );
};
