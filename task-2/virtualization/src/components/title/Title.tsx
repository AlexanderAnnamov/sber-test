import React from 'react';

import styles from './Title.module.css';

interface ITitle {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

const Title: React.FC<ITitle> = ({ text, className, style }) => {
    return (
        <div className={styles.titleContainer}>
            <h1 style={style} className={className || styles.title}>
                {text}
            </h1>
        </div>
    );
};

export default Title;
