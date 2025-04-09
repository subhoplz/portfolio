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
            year: 'Aug 2024 - Oct 2024',
            title: 'Full Stack Web Developer',
            company: 'SKOLAR',
            description: 'Developed dynamic web applications using modern full-stack technologies. Gained hands-on experience in creating efficient, user-friendly interfaces and backend solutions.',
        },
        {
            year: 'Jan 2025 - Mar 2025',
            title: 'Freelance Data Analyst',
            company: 'LXT.ai',
            description: 'Analyzed YouTube video content to identify patterns and categorize related/unrelated videos. Ensured accurate data processing and meaningful results for query-based tasks. Delivered consistent, high-quality results while managing time effectively.',
        },
    ];

    const projects = [
        {
            name: 'e-Commerce Platform',
            technologies: 'React, Node.js, MySQL',
            description: 'Built a platform featuring secure payment integration, detailed product catalogs, and mobile responsiveness.',
        },
        {
            name: 'Mess Management System',
            technologies: 'Java, NetBeans, MySQL',
            description: 'Designed a system to plan meals and create menus, track attendance and manage billing, and collect and analyze user feedback.',
        },
        {
            name: 'OCR System',
            technologies: 'Python, Kaggle, Jupyter Notebook, OpenCV, Tesseract',
            description: 'Developed a system to digitize and extract text from images.',
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
                                        whileInView={{ width: `${skill.level}%` }
                                        }
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.experienceContainer}>
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

                <div className={styles.projectsContainer}>
                    <h3 className={styles.sectionTitle}>Projects</h3>
                    <div className={styles.projects}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.projectItem}
                            >
                                <h4 className={styles.projectTitle}>{project.name}</h4>
                                <h5 className={styles.projectTechnologies}>{project.technologies}</h5>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
