import React from 'react';

import styles from './Header.module.css';

import SberLogo from '../SberLogo';

const Header: React.FC = () => {
    return (
        <header className={styles.headerContainer}>
            <SberLogo />
        </header>
    );
};

export default Header;
