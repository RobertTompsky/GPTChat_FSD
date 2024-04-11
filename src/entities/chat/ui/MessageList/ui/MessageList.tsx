import React from 'react';
import styles from './MessageList.module.scss'
import { MessageLoader } from '@/shared/ui/loaders';
import { 
    IMessage, 
    getChatMessages, 
    getGPTTyping 
} from '@/entities/chat/model';
import { useAppSelector } from '@/shared/lib/hooks/redux';
import { Message } from '../../Message';

export const MessageList: React.FC = () => {
    const chatMessages = useAppSelector(getChatMessages) as IMessage[]
    const isGPTTyping = useAppSelector(getGPTTyping) as boolean
    return (
        <nav className={styles.messageList}>
            {chatMessages.map((message, index) => (
                <Message
                    message={message}
                    key={index}
                />
            ))}
            {isGPTTyping &&
                <MessageLoader />
            }
        </nav>
    );
};
