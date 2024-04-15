import { logOut } from '@/entities/user/model';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/components';
import React from 'react';

export const LogOut: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleLogOut = (): void => {
        dispatch(logOut())
    }

    return (
        <Button
            children='Выйти'
            btnSize='small'
            onClick={handleLogOut}
        />
    );
};