'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeAnimation = () => {
    const containerRef = useRef(null);
    const [error, setError] = useState(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const cubeRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        try {
            // Scene setup
            const scene = new THREE.Scene();
            sceneRef.current = scene;

            const camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 5;

            // Renderer setup with performance optimizations
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                powerPreference: 'high-performance'
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);
            rendererRef.current = renderer;
            containerRef.current.appendChild(renderer.domElement);

            // Cube setup with optimized geometry
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                transparent: true,
                opacity: 0.8
            });
            const cube = new THREE.Mesh(geometry, material);
            cubeRef.current = cube;
            scene.add(cube);

            let animationFrameId;
            const animate = () => {
                animationFrameId = requestAnimationFrame(animate);
                if (cubeRef.current) {
                    cubeRef.current.rotation.x += 0.01;
                    cubeRef.current.rotation.y += 0.01;
                }
                renderer.render(scene, camera);
            };

            // Optimized resize handler with debounce
            let resizeTimeout;
            const handleResize = () => {
                if (resizeTimeout) clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    if (!containerRef.current) return;

                    const width = window.innerWidth;
                    const height = window.innerHeight;

                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height);
                }, 250);
            };

            window.addEventListener('resize', handleResize);
            animate();

            // Cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
                if (resizeTimeout) clearTimeout(resizeTimeout);
                if (animationFrameId) cancelAnimationFrame(animationFrameId);

                if (containerRef.current && renderer.domElement) {
                    containerRef.current.removeChild(renderer.domElement);
                }

                if (geometry) geometry.dispose();
                if (material) material.dispose();
                if (renderer) renderer.dispose();

                sceneRef.current = null;
                rendererRef.current = null;
                cubeRef.current = null;
            };
        } catch (err) {
            console.error('Error in ThreeAnimation:', err);
            setError(err.message);
        }
    }, []);

    if (error) {
        return <div>Error loading animation: {error}</div>;
    }

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeAnimation;