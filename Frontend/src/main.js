import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#BG"),
});


renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);

camera.position.setZ(0.3);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);



renderer.render( scene, camera ); 

const loader = new GLTFLoader();

loader.load('../models/slushies.glb', (gltf) => {
    const slushie = gltf.scene;
    slushie.position.set(0, 0, 0);
    slushie.scale.set(0.5, 0.5, 0.5);
    scene.add(slushie);
}, undefined, (error) => {
    console.error("error");
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}


animate();