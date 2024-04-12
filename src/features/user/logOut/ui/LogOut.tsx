import { logOut } from '@/entities/user/model';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/components';
import React from 'react';

export const LogOut: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <Button 
        children='Выйти' 
        btnSize='small'
        onClick={() => dispatch(logOut())}
        />
    );
};