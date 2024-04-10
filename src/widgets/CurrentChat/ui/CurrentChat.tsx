import { IChat } from '@/entities/chat/model';
import { Chat } from '@/entities/chat/ui/Chat';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import React from 'react';

export const CurrentChat: React.FC = () => {
    const chats: IChat[] = useAppSelector((state) => state.chats.list)
    return (
        <>
            {chats.map((chat) => chat.isActive && (
                <Chat key={chat.id} />
            ))}
        </>
    );
};
