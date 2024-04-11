import LogIn from '@/features/user/logIn/ui/LogIn';
import { Container } from '@/shared/ui/layout';
import React from 'react';
import styles from './SignIn.module.scss'

export const SignIn: React.FC = () => {
    return (
        <div className={styles.signIn}>
            <Container centeredChildren>
                <LogIn />
            </Container>
        </div>
    );
};
