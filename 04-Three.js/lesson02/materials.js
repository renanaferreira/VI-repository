import * as THREE from "https://threejs.org/build/three.module.js";

const redPlastic = new THREE.MeshPhongMaterial();
redPlastic.color = new THREE.Color(0.5, 0.0, 0.0);
redPlastic.specular= new THREE.Color(0.7, 0.6, 0.6);
redPlastic.shininess = 0.25 * 256;
redPlastic.ambient = new THREE.Color(0.0, 0.0, 0.0);
export {redPlastic};


const blueBasicMaterial = new THREE.MeshPhongMaterial({
    color: 0x0000FF,
});
export {blueBasicMaterial};

const redBasicMaterial = new THREE.MeshPhongMaterial({
    color: 0xFF0000,
});
export {redBasicMaterial};

const greenBasicMaterial = new THREE.MeshPhongMaterial({
    color: 0x00FF00,
});
export {greenBasicMaterial};

const redTransparent = new THREE.MeshPhongMaterial({
    color: 0xFF0000,
    shininess: 100,
	opacity: 0.3,
	transparent: true,
});
export {redTransparent};