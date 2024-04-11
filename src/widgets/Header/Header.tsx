import React from 'react';
import styles from './Header.module.scss'
import { Container } from '@/shared/ui/layout';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/app/router';
import { Button } from '@/shared/ui/components';
import { useAppSelector } from '@/shared/lib/hooks/redux';

export const Header: React.FC = () => {
    const isAuthed = useAppSelector(state => state.auth.isAuthenticated)
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_content}>
                    <h2>NapasGPT</h2>
                    {isAuthed &&
                        <nav className={styles.header_nav}>
                            <Link
                                to={RoutePath.main}
                                className={styles.header_link}
                                children='Чат'
                            />
                            <Link
                                to={RoutePath.about}
                                className={styles.header_link}
                                children='Профиль'
                            />
                            <Button
                                children='Выйти'
                                btnSize='small'
                                variant='delete'
                            />
                        </nav>
                    }
                </div>
            </Container>
        </div>
    );
};
