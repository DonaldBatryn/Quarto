import * as THREE from 'three';

let renderer;
let scene;
let camera;
let cameraController;

class BoardController {
    constructor(options) {
        this.options = options || {};
        this.containerEl = options.containerEl || null;
        this.assetsUrl = options.assetsUrl || "";
    }

    drawBoard() {
        console.log('drawBoard');
        this.initEngine();
    }

    initEngine() {
        const viewWidth = this.containerEl.offsetWidth;
        const viewHeight = this.containerEl.offsetHeight;

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(viewWidth, viewHeight);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(35, viewWidth / viewHeight, 1, 1000);
        camera.position.set(0, 120, 150);
        // cameraController = new THREE.OrbitControls(camera, this.containerEl);

        scene.add(camera);
        THREE.Or
        this.containerEl.appendChild(renderer.domElement);
    }
}

export default BoardController;