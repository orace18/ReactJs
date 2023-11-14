import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//mport './App.css'; // Importez votre fichier CSS

const ThreeDAnimation = () => {
  const mount = useRef(null);
  const [scene] = useState(new THREE.Scene());
  const [camera] = useState(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const [renderer] = useState(new THREE.WebGLRenderer());
  const [text, setText] = useState('Votre texte ici');

  useEffect(() => {
    // Set up Three.js
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // Set up camera
    camera.position.z = 5;

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create a box for demonstration
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add animation logic here
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js scene on component unmount
    return () => {
      scene.remove(cube);
      renderer.dispose();
    };
  }, [scene, camera, renderer]);

  return (
    <div>
      <div ref={mount} />
      <section className="text-section">
        <h1>{text}</h1>
      </section>
    </div>
  );
};

export default ThreeDAnimation;
