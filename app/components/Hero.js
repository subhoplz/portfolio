'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { FiLayout, FiServer, FiDatabase, FiCode } from 'react-icons/fi';

const Hero = () => {
    const canvasRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        try {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let animationFrameId;
            let particles = [];

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 2;
                    this.speedX = Math.random() * 0.5 - 0.25;
                    this.speedY = Math.random() * 0.5 - 0.25;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width) this.x = 0;
                    if (this.x < 0) this.x = canvas.width;
                    if (this.y > canvas.height) this.y = 0;
                    if (this.y < 0) this.y = canvas.height;
                }

                draw() {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            const init = () => {
                particles = [];
                for (let i = 0; i < 100; i++) {
                    particles.push(new Particle());
                }
            };

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                animationFrameId = requestAnimationFrame(animate);
            };

            resizeCanvas();
            init();
            animate();

            window.addEventListener('resize', resizeCanvas);

            return () => {
                window.removeEventListener('resize', resizeCanvas);
                cancelAnimationFrame(animationFrameId);
            };
        } catch (err) {
            console.error('Error in Hero animation:', err);
            setError(err.message);
        }
    }, []);

    return (
        <section className={styles.hero} id="home">
            {error ? (
                <div className={styles.errorMessage}>
                    Error loading animation: {error}
                </div>
            ) : (
                <canvas ref={canvasRef} className={styles.canvas} />
            )}
            <div className={styles.content}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.title}
                >
                    Hi, I'm <span className={styles.highlight}>Subhadip Dutta</span>
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.subtitle}
                >
                    Aspiring Frontend Engineer & Software Developer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.description}
                >
                    I specialize in creating impactful software solutions with modern technologies.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={styles.cta}
                >
                    <a href="#projects" className={styles.primaryButton}>
                        View My Work
                    </a>
                    <a href="#contact" className={styles.secondaryButton}>
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 