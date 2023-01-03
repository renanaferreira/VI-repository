import * as THREE from "https://threejs.org/build/three.module.js";

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

const emerald = new THREE.MeshPhongMaterial({ shading: THREE.SmoothShading });
emerald.color = new THREE.Color(0.07568, 0.61424, 0.07568);
emerald.specular= new THREE.Color(0.633, 0.7278, 0.633);
emerald.shininess = 0.6 * 256;
emerald.ambient = new THREE.Color(0.0215, 0.1745, 0.0215);
export {emerald};

const redPlastic = new THREE.MeshPhongMaterial();
redPlastic.color = new THREE.Color(0.5, 0.0, 0.0);
redPlastic.specular= new THREE.Color(0.7, 0.6, 0.6);
redPlastic.shininess = 0.25 * 256;
redPlastic.ambient = new THREE.Color(0.0, 0.0, 0.0);
export {redPlastic};

const whiteRubber = new THREE.MeshPhongMaterial({ shading: THREE.SmoothShading });
whiteRubber.color = new THREE.Color(0.5, 0.5, 0.5);
whiteRubber.specular= new THREE.Color(0.7, 0.7, 0.7);
whiteRubber.shininess = 0.0781 * 256;
whiteRubber.ambient = new THREE.Color(0.05, 0.05, 0.05);
export {whiteRubber};

const glassMaterial = new THREE.MeshPhongMaterial( { 
    color: 0x222222, 
    specular: 0xFFFFFF,
    shininess: 100, 
    opacity: 0.3, 
    transparent: true 
} );
export {glassMaterial};

const blueTransparent = new THREE.MeshPhongMaterial({ 
    color: 0x0000FF,
    shininess: 100,
    opacity: 0.3,
    transparent: true,
});
export {blueTransparent};