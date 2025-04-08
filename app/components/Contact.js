'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            // Replace with your form submission logic
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.',
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again.',
            });
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FiGithub />,
            url: 'https://github.com/subhoplz',
        },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin />,
            url: 'https://www.linkedin.com/in/subhoplz/',
        },
        {
            name: 'Twitter',
            icon: <FiTwitter />,
            url: 'https://twitter.com/subhoplz',
        },
    ];

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Get In Touch</h2>
                    <p className={styles.description}>
                        I'm always open to discussing new projects, creative ideas, or
                        opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.info}
                    >
                        <div className={styles.contactInfo}>
                            <FiMail className={styles.icon} />
                            <div>
                                <h3 className={styles.infoTitle}>Email</h3>
                                <p className={styles.infoText}>subhadip.dutta.m1@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.social}>
                            <h3 className={styles.socialTitle}>Follow Me</h3>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.socialLink}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={status.type === 'loading'}
                        >
                            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status.message && (
                            <p
                                className={`${styles.status} ${status.type === 'error' ? styles.error : styles.success
                                    }`}
                            >
                                {status.message}
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 