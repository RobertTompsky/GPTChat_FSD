import React, { useState } from 'react';
import styles from './Chat.module.scss'
import { Button, TextArea } from '@/shared/ui/components';
import { MessageList } from '../../MessageList';
import { IMessage, addMessage, getChatMessages } from '@/entities/chat/model';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { getChatCompletion } from '@/features/chat';

export const Chat: React.FC = () => {
    const dispatch = useAppDispatch()
    const chatMessages = useAppSelector(getChatMessages) as IMessage[]
    const model = useAppSelector(state => state.chats.model)
    const [userMessage, setUserMessage] = useState<string>('')
    const [typing, setTyping] = useState<boolean>(false)

    const sendMessageToGPT =
        async (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent> |
                React.KeyboardEvent<HTMLTextAreaElement>
        ) => {
            e.preventDefault();
            if (!userMessage.trim()) return;

            const newMessage = {
                message: userMessage,
                sender: 'user' as 'user'
            };
            dispatch(addMessage(newMessage))

            try {
                setTyping(true);
                setUserMessage('');

                const chatCompletion = await getChatCompletion(
                    chatMessages,
                    newMessage,
                    model
                )
                dispatch(addMessage({
                    message: chatCompletion.choices[0].message.content as string,
                    sender: 'gpt'
                }))

                setTyping(false);
            } catch (error) {
                console.error('Ошибка', error);
            }
        };

    return (
        <div className={styles.chat}>
            <MessageList
                messages={chatMessages}
                typing={typing}
            />
            <div className={styles.inputBlock}>
                <TextArea
                    placeholder='Введите сообщение...'
                    onChange={(e) => setUserMessage(e.target.value)}
                    value={userMessage}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault(); // Предотвращаем перенос строки
                            sendMessageToGPT(e);
                        }
                    }}
                    style={{ width: '80%' }}
                />
                <Button
                    children='Отправить'
                    variant='approve'
                    onClick={sendMessageToGPT}
                    style={{ width: '20%' }}
                />
            </div>
        </div>
    );
};