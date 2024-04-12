import React from 'react';
import styles from './ChatManagement.module.scss'
import { 
    ChangeChat, 
    ChangeModel, 
    CreateChat, 
    DeleteChat
} from '@/features/chat';

export const ChatManagement: React.FC = () => {
    return (
        <section className={styles.block}>
            <CreateChat />
            <div className={styles.group}>
                <ChangeChat />
                <ChangeModel />
                <DeleteChat />
            </div>
        </section>
    );
};