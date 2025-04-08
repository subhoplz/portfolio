import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">Home</Link>
                {/* ...additional navigation links... */}
            </nav>
        </header>
    );
};

export default Header;