import React from 'react';
import styles from './Header.module.scss'
import { Container } from '@/shared/ui/layout';
import { Link } from 'react-router-dom';
import { RoutePath } from '@/app/router';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.header_content}>
                    <h2>NapasGPT</h2>
                    <nav>
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
                        <Link
                            to={RoutePath.about}
                            className={styles.header_link}
                            children='Избранное'
                        />
                    </nav>
                </div>
            </Container>
        </div>
    );
};
