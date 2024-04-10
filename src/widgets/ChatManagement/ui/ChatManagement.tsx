import React, { useState } from 'react';
import styles from './ChatManagement.module.scss'
import { Input, Button, Select } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { IChat } from '@/entities/chat/model';

export const ChatManagement: React.FC = () => {
    const CHATS = ['Чат 1', 'Чат 2', 'Чат 3']

    const chats: IChat[] = useAppSelector((state) => state.chats.list)

    const [chat, setChat] = useState<IChat>({
        id: '',
        name: '',
        messages: [],
        isActive: false
    })
    
    return (
        <section className={styles.block}>
            <div className={styles.group}>
                <Input placeholder='Создать чат' />
                <Button
                    children='Ок'
                    variant='approve'
                    btnSize='small'
                />
            </div>
            <div className={styles.group}>
                <Select
                    defaultOptionTitle='Выбрать чат'
                    options={chats.map((chat) => ({
                        value: chat.id,
                        title: chat.name
                    }))}
                />
                <Select
                    defaultOptionTitle='Выбрать модель'
                    options={CHATS.map((chat) => ({
                        value: chat,
                        title: chat
                    }))}
                />
            </div>
        </section>
    );
};