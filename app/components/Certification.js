'use client';

import React from 'react';
import styles from './Certification.module.css';

// Define your certification data
// IMPORTANT: Replace '#' with the actual URLs for your credentials
const certificationsData = [
    {
        id: 1,
        name: 'MTA: Software Development Fundamentals',
        issuer: 'Microsoft',
        url: '#' // <-- Replace with actual URL
    },
    {
        id: 2,
        name: 'Python Data Structures',
        issuer: 'Coursera',
        url: '#' // <-- Replace with actual URL
    },
    {
        id: 3,
        name: 'MTA: Introduction to Programming Using Java',
        issuer: 'Microsoft',
        url: '#' // <-- Replace with actual URL
    },
    {
        id: 4,
        name: 'Introduction to SQL',
        issuer: 'Coursera',
        url: '#' // <-- Replace with actual URL
    },
    {
        id: 5,
        name: 'CSS Certification',
        issuer: 'HackerRank',
        url: '#' // <-- Replace with actual URL
    }
];


const Certification = () => {
    return (
        <section className={styles.certification}>
            <div className={styles.container}>
                <h2 className={styles.title}>CERTIFICATIONS</h2>
                <div className={styles.certificationList}>
                    {certificationsData.map((cert) => (
                        <div key={cert.id} className={styles.certificationItem}>
                            <p className={styles.certificationName}>
                                {cert.name} - {cert.issuer}
                            </p>
                            {cert.url && cert.url !== '#' ? ( // Only show link if URL is provided and not '#'
                                <a
                                    href={cert.url}
                                    target="_blank" // Open in new tab
                                    rel="noopener noreferrer" // Security best practice
                                    className={styles.credentialLink}
                                >
                                    View Credential
                                </a>
                            ) : (
                                <span className={styles.credentialLinkDisabled}>View Credential (Link not provided)</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;
