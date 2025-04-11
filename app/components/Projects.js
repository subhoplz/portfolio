'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    // Updated projects array based on your resume
    const projects = [
        {
            id: 1,
            title: 'Flight Physics Learning Gamification',
            description: 'Created a gamified learning platform for engineers, focusing on intuitive UI design and engaging interactions.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['Ejs', 'HTML', 'CSS', 'JavaScript'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            category: 'frontend', // Ejs often implies some server-side rendering, but focus seems frontend
        },
        {
            id: 2,
            title: 'e-Commerce Platform',
            description: 'Built a platform featuring secure payment integration, detailed product catalogs, and mobile responsiveness.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['React', 'Node.js', 'MySQL'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            category: 'fullstack',
        },
        {
            id: 3,
            title: 'Mess Management System',
            description: 'Designed a system to plan meals, track attendance, manage billing, and analyze user feedback.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['Java', 'NetBeans', 'MySQL'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            // Categorizing as 'fullstack' conceptually, though it's a desktop app stack
            category: 'fullstack',
        },
        {
            id: 4,
            title: 'OCR System',
            description: 'Developed a system to digitize and extract text from images, improving document handling efficiency.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['Python', 'Kaggle', 'Jupyter Notebook', 'OpenCV', 'Tesseract'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            category: 'ai', // Technologies used are common in AI/ML/Data Science
        },
        {
            id: 5,
            title: 'Uber Clone (In Progress)',
            description: 'Creating a ride-hailing app with user authentication, real-time location tracking, booking, and payment management.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['MERN', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Google API'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            category: 'fullstack',
        },
        {
            id: 6,
            title: 'Web-Based Chat Application',
            description: 'Developed a secure, responsive real-time chat application with user authentication, private/group chats, typing indicators, WebSocket integration, mobile-friendly design, and robust data encryption.',
            image: '/projects/placeholder.png', // <-- Add actual image path if available
            tags: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB'],
            github: '', // <-- Add GitHub link if available
            demo: '',   // <-- Add Demo link if available
            category: 'fullstack',
        }
        // Add more projects if you have others not listed here
    ];

    // Ensure categories array includes all categories used above
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'ai', name: 'AI/ML' },
        // Add other categories if needed e.g., { id: 'desktop', name: 'Desktop' }
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
                        Here are some of the projects I've worked on, showcasing different applications of my technical skills.
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
                                {/* Conditionally render image container if path exists */}
                                {project.image && project.image !== '/projects/placeholder.png' && (
                                    <div className={styles.projectImage}>
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                )}
                                {/* Or always show a placeholder */}
                                {/*
                                <div className={styles.projectImage}>
                                     <img src={project.image || '/projects/placeholder.png'} alt={project.title} />
                                 </div>
                                 */}

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
                                        {/* Only render GitHub link if URL is provided */}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                aria-label={`GitHub repository for ${project.title}`} // Accessibility
                                            >
                                                <FiGithub /> Code
                                            </a>
                                        )}
                                        {/* Only render Demo link if URL is provided */}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                                aria-label={`Live demo for ${project.title}`} // Accessibility
                                            >
                                                <FiExternalLink /> Demo
                                            </a>
                                        )}
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
