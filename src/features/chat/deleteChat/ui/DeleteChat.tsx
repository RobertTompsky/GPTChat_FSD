import { getChats, removeChat } from '@/entities/chat/model';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { Button } from '@/shared/ui/components';
import React from 'react';

export const DeleteChat: React.FC = () => {
    const chats = useAppSelector(getChats)
    const dispatch = useAppDispatch()
    
    return (
        <>
            {chats.length > 0 &&
                <Button
                    variant='delete'
                    children='Удалить'
                    btnSize='small'
                    onClick={() => dispatch(removeChat())}
                />
            }
        </>
    );
};