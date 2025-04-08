'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayout } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
    const skills = [
        { name: 'Frontend Development', icon: <FiLayout />, level: 90 },
        { name: 'Backend Development', icon: <FiServer />, level: 85 },
        { name: 'Database Management', icon: <FiDatabase />, level: 80 },
        { name: 'Problem Solving', icon: <FiCode />, level: 95 },
    ];

    const experiences = [
        {
            year: '2023 - Present',
            title: 'Senior Full Stack Developer',
            company: 'Tech Company',
            description: 'Leading development of modern web applications using React, Node.js, and AWS.',
        },
        {
            year: '2021 - 2023',
            title: 'Full Stack Developer',
            company: 'Startup',
            description: 'Developed and maintained multiple web applications using MERN stack.',
        },
        {
            year: '2019 - 2021',
            title: 'Frontend Developer',
            company: 'Digital Agency',
            description: 'Created responsive and interactive user interfaces using React and modern CSS.',
        },
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.intro}
                >
                    <h2 className={styles.title}>About Me</h2>
                    <p className={styles.description}>
                        I'm a passionate Full Stack Developer with a strong foundation in web development
                        and a keen eye for creating beautiful, functional applications. With years of
                        experience in both frontend and backend development, I strive to build scalable
                        and maintainable solutions that solve real-world problems.
                    </p>
                </motion.div>

                <div className={styles.skillsContainer}>
                    <h3 className={styles.sectionTitle}>Skills</h3>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.skill}
                            >
                                <div className={styles.skillHeader}>
                                    <span className={styles.skillIcon}>{skill.icon}</span>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                                <div className={styles.skillBar}>
                                    <motion.div
                                        className={styles.skillProgress}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.timelineContainer}>
                    <h3 className={styles.sectionTitle}>Experience</h3>
                    <div className={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.timelineItem}
                            >
                                <div className={styles.timelineYear}>{exp.year}</div>
                                <div className={styles.timelineContent}>
                                    <h4 className={styles.timelineTitle}>{exp.title}</h4>
                                    <h5 className={styles.timelineCompany}>{exp.company}</h5>
                                    <p className={styles.timelineDescription}>{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 