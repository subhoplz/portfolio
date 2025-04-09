'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
            image: '/projects/ecommerce.jpg',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            github: 'https://github.com/yourusername/ecommerce',
            demo: 'https://ecommerce-demo.com',
            category: 'fullstack',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates.',
            image: '/projects/taskmanager.jpg',
            tags: ['React', 'Firebase', 'Material-UI'],
            github: 'https://github.com/yourusername/taskmanager',
            demo: 'https://taskmanager-demo.com',
            category: 'frontend',
        },
        {
            id: 3,
            title: 'Mess Management System ',
            description: 'A full-stack mess management system .',
            image: '',
            tags: ['Java', 'NetBeans', 'MySQL'],
            github: '',
            demo: '',
            category: 'fullstack',
        },
        // Add more projects as needed
    ];

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'ai', name: 'AI/ML' },
    ];

    const filteredProjects = projects.filter(
        (project) => filter === 'all' || project.category === filter
    );

    return (
        <section className={styles.projects} id="projects">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>My Projects</h2>
                    <p className={styles.description}>
                        Here are some of the projects I've worked on. Each project is unique
                        and showcases different aspects of my skills and expertise.
                    </p>
                </motion.div>

                <div className={styles.filters}>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`${styles.filterButton} ${filter === category.id ? styles.active : ''
                                }`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={styles.project}
                            >
                                <div className={styles.projectImage}>
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>
                                        {project.description}
                                    </p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={styles.tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.links}>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            <FiGithub /> Code
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                        >
                                            <FiExternalLink /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 