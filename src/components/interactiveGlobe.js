import React from 'react'
import * as THREE from './js/three.module.js'
import { BoxLineGeometry } from './js/three.module.js';

const Globe = () => {
    var camera, scene, renderer;
    var geometry, material, mesh;

    function exec() {
        init();
        animate();
    }

    function init() {
        
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;

        scene = new THREE.Scene();

        geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        material = new THREE.MeshNormalMaterial();

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }
    /*var canvasBGColor = document.getElementsByTagName("canvas")[0];
    var ctx = canvasBGColor.getContext("2d"); ctx.fillStyle = "#ffffff",
    ctx.fillRect(20, 20, 150, 100), */
    return (
        <div>
            {exec()}
        </div>
    )
}
export default Globe;