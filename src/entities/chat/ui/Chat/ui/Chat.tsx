import React, { useState } from 'react';
import styles from './Chat.module.scss'
import { Button, TextArea } from '@/shared/ui/components';
import { getChatCompletion } from '@/features/getChatCompletion';
import { MessageList } from '../../MessageList';
import { IMessage } from '@/entities/chat/model';

export const Chat: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>('')
    const [messages, setMessages] = useState<IMessage[]>([])
    const [typing, setTyping] = useState<boolean>(false)

    const sendMessageToGPT =
        async (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent> |
                React.KeyboardEvent<HTMLTextAreaElement>
        ) => {
            e.preventDefault();
            if (!userMessage.trim()) return;

            // Сохраняем введенное сообщение в локальное состояние
            const newMessage = {
                message: userMessage,
                sender: 'user' as 'user'
            };

            setMessages(prevMessages => [
                ...prevMessages,
                newMessage
            ]);

            // Отправляем сохраненное сообщение на сервер
            try {
                setTyping(true);
                setUserMessage('');

                const chatCompletion = await getChatCompletion(
                    messages,
                    newMessage
                )

                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        message: chatCompletion.choices[0].message.content as string,
                        sender: 'gpt'
                    }
                ]);

                setTyping(false);
            } catch (error) {
                console.error('Ошибка', error);
            }
        };
    return (
        <div className={styles.chat}>
            <MessageList
                messages={messages}
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