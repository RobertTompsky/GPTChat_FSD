import React from 'react';
import styles from './MessageList.module.scss'
import { MessageLoader } from '@/shared/ui/loaders';
import { IMessage } from '@/entities/chat/model';
import { Message } from '../../Message/ui/Message';

interface MessageListProps {
    messages: IMessage[],
    typing: boolean
}

export const MessageList: React.FC<MessageListProps> = ({
    messages,
    typing
}) => {
    return (
        <nav className={styles.messageList}>
            {messages.map((message, index) => (
                <Message
                    message={message}
                    key={index}
                />
            ))}
            {typing &&
                <MessageLoader />
            }
        </nav>
    );
};
