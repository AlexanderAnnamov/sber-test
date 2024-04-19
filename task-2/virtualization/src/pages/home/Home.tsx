import React from 'react';

import VirtualizationList from '../../components/virtualization-list/VirtualizationList';
import Title from '../../components/title/Title';
import Header from '../../components/header/Header';

import { items } from './Items';

import styles from './Home.module.css';

interface IHome {
    title: string;
}

const Home: React.FC<IHome> = ({ title }) => {
    document.title = title;
    return (
        <div className={styles.home}>
            <Title text="Виртуализация " />

            <VirtualizationList
                rowHeight={70}
                allItems={100}
                containerHeight="300px"
                containerWidth="100%"
                elements={items}
                numberVisibleElements={4}
            />
        </div>
    );
};

export default Home;
