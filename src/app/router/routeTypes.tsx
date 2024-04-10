import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '.';

export const Public: React.FC = () => {
    return <Outlet />
};

export const Protected: React.FC = () => {
    const isAuthed = true
    return isAuthed
        ? <Outlet />
        : <Navigate to={RoutePath.sign_in} replace />
};
