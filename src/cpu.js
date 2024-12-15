import * as THREE from 'three';

// Scene 
const scene = new THREE.Scene();

// Camera
const perspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
perspectiveCamera.position.z = 5; // Move the camera back to see the sphere

// Temporary Object
const sphereMesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32), 
  new THREE.MeshBasicMaterial({
    color: 'black' 
  })
);
scene.add(sphereMesh);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Render the scene
renderer.render(scene, perspectiveCamera);

// Adjust renderer on window resize
window.addEventListener('resize', () => {
    perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
    perspectiveCamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
