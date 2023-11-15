// ThreeDAnimation.jsx
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './Anime.css'; // Importez votre fichier CSS

const ThreeDAnimation = () => {
  const mount = useRef(null);
  const [scene] = useState(new THREE.Scene());
  const [camera] = useState(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const [renderer] = useState(new THREE.WebGLRenderer());
  const [text, setText] = useState('Bienvenue chez Orace');

  useEffect(() => {
    // Set up Three.js
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // Set up camera
    camera.position.z = 20;

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create shapes for demonstration
    const cubeGeometry = new THREE.BoxGeometry(30, 20, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xA03AF2 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    const rectangleGeometry = new THREE.BoxGeometry(10, 5, 0.5);
    const rectangleMaterial = new THREE.MeshBasicMaterial({ color: 0xF29C8E });
    const rectangleTop = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    const rectangleBottom = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    rectangleTop.position.y = 7.5;
    rectangleBottom.position.y = -7.5;
    scene.add(rectangleTop);
    scene.add(rectangleBottom);

    const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x6FC2B0 });
    const coneLeft = new THREE.Mesh(coneGeometry, coneMaterial);
    const coneRight = new THREE.Mesh(coneGeometry, coneMaterial);
    const coneTop = new THREE.Mesh(coneGeometry, coneMaterial);
    const coneBottom = new THREE.Mesh(coneGeometry, coneMaterial);
    coneLeft.position.x = -8;
    coneLeft.position.y = 2;
    coneRight.position.x = 8;
    coneRight.position.y = 2;
    coneTop.position.y = 12.5;
    coneBottom.position.y = -12.5;
    scene.add(coneLeft);
    scene.add(coneRight);
    scene.add(coneTop);
    scene.add(coneBottom);

    // Add animation logic here
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      rectangleTop.rotation.x += 0.005;
      rectangleTop.rotation.y += 0.005;
      rectangleBottom.rotation.x += 0.005;
      rectangleBottom.rotation.y += 0.005;
      coneLeft.rotation.x += 0.005;
      coneLeft.rotation.y += 0.005;
      coneRight.rotation.x += 0.005;
      coneRight.rotation.y += 0.005;
      coneTop.rotation.x += 0.005;
      coneTop.rotation.y += 0.005;
      coneBottom.rotation.x += 0.005;
      coneBottom.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js scene on component unmount
    return () => {
      scene.remove(cube, rectangleTop, rectangleBottom, coneLeft, coneRight, coneTop, coneBottom);
      renderer.dispose();
    };
  }, [scene, camera, renderer]);

  return (
    <div id="threeDAnimation">
      <div ref={mount} />
      <section className="text-section">
        <h1>{text}</h1>
      </section>
    </div>
  );
};

export default ThreeDAnimation;
