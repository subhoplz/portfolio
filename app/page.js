'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certification from './components/Certification';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Certification />
            <Contact />
            <Footer />
        </main>
    );
} 