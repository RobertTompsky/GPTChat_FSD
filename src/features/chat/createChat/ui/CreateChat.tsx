import { Button, Input } from '@/shared/ui/components';
import React, { useState } from 'react';
import styles from './CreateChat.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { IChat, createChat } from '@/entities/chat/model';
import { handleInputChange } from '@/shared/lib/functions';
import { v4 as uuidv4 } from 'uuid';

export const CreateChat: React.FC = () => {
    const dispatch = useAppDispatch()

    const [chat, setChat] = useState<IChat>({
        id: '',
        name: '',
        messages: [],
        isActive: false
    })
    
    const handleCreateChat = (): void => {
        dispatch(createChat({
            id: uuidv4(),
            name: chat.name,
            messages: [],
            isActive: true
        }))
        setChat({ ...chat, name: '' })
    }

    return (
        <div className={styles.group}>
            <Input
                placeholder='Создать чат'
                value={chat.name}
                name='name'
                onChange={(e) => handleInputChange(e, setChat)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault(); // Предотвращаем перенос строки
                        handleCreateChat()
                    }
                }}
            />
            <Button
                children='Ок'
                variant='approve'
                btnSize='small'
                onClick={handleCreateChat}
            />
        </div>
    );
};