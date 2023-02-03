import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";

const Snowball3d: Component = () => {
    let canvasRef;
    let camera,
        scene,
        renderer,
        composer,
        crystalMesh,
        sphere,
        ethTopCrystalMesh,
        ethBottomCrystalMesh,
        clock,
        controls;
    let gui, params;

    setTimeout(() => {
        function init() {

            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.shadowMap.enabled = true;
            //renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);

            canvasRef.appendChild(renderer.domElement);
            window.addEventListener("resize", onWindowResize);

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, canvasRef.clientWidth / canvasRef.clientHeight, 0.1, 1000);
            camera.position.z = 5;


            const sphere_geometry = new THREE.SphereGeometry(1, 128, 128);
            const material = new THREE.MeshNormalMaterial();

            sphere = new THREE.Mesh(sphere_geometry, material);
            scene.add(sphere);

            window.addEventListener("resize", onWindowResize);
        }

        function onWindowResize() {
            const aspectRatio = canvasRef.clientWidth / canvasRef.clientHeight;
            camera.left = -aspectRatio;
            camera.right = aspectRatio;
            camera.updateProjectionMatrix();

            renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
        }

        const update = function () {

            // change '0.003' for more aggressive animation
            const time = performance.now() * 0.0005;
            //console.log(time)

            //go through vertices here and reposition them

            if (!sphere.geometry.vertices) return;
            // change 'k' value for more spikes
            const k = 0.25;
            for (const i = 0; i < sphere.geometry.vertices.length; i++) {
                const p = sphere.geometry.vertices[i];
                p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
            }
            sphere.geometry.computeVertexNormals();
            sphere.geometry.normalsNeedUpdate = true;
            sphere.geometry.verticesNeedUpdate = true;


        }

        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.x += 10;
            sphere.rotation.y += 20;

            update();
            /* render scene and camera */
            renderer.render(scene, camera);
        }

        init();
        animate();
    });

    return <div ref={canvasRef} style={{
        flex: "1",
        height: "auto",
        width: "100%",
        overflow: "hidden"
    }}></div>;
};

export default Snowball3d;
