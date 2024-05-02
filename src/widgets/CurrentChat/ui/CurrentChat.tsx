import {
    IChat,
    getChatMessages,
    getChats
} from '@/entities/chat/model';
import React from 'react';
import styles from './CurrentChat.module.scss'
import { MessageList } from '@/entities/chat/ui/MessageList';
import { SendMessage } from '@/features/chat';
import { useAppSelector } from '@/shared/lib/hooks';
import { Button, Select, TextArea } from '@/shared/ui/components';

export const CurrentChat: React.FC = () => {
    const chats: IChat[] = useAppSelector(getChats)
    const messages = useAppSelector(getChatMessages)

    return (
        <>
            {chats.map((chat) => chat.isActive && (
                <section
                    key={chat.id}
                    className={styles.curChat}
                >
                    <div className={styles.curChat_management}>

                        <div className={styles.curChat_changePrompt}>
                            <TextArea placeholder='Ввести промпт...' />
                            <Button
                                variant='default'
                                children='Изменить промпт'
                                btnSize='small'
                            />
                        </div>
                        <div className={styles.curChat_group}>
                            <Select
                                defaultOptionTitle='sgsf'
                                options={[]}
                            />
                            <div className={styles.curChat_btns}>
                                <Button
                                    children='Очистить историю'
                                    btnSize='small'
                                    variant='delete'
                                />
                                <Button
                                    children='Сохранить в базу'
                                    btnSize='small'
                                />
                                <Button
                                    children='Добавить в избранное'
                                    btnSize='small'
                                />
                            </div>
                        </div>
                    </div>
                    {
                        messages &&
                        messages.length > 0 &&
                        <MessageList />
                    }
                    <SendMessage />
                </section>
            ))}
        </>
    );
};
