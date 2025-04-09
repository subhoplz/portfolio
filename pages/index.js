import React from 'react';
import Header from '../components/Header';
import ThreeAnimation from '../components/ThreeAnimation';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <ThreeAnimation />
                <p className={styles.description}>
                    This is a showcase of my work and projects. Feel free to explore!
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Home;