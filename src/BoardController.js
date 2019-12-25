import * as THREE1 from 'three';
// import * as OC from 

let renderer;
let scene;
let camera;
let cameraController;
let lights = {};
let materials = {};
let pieceGeometry = null;
let boardModel;
let groundModel;
let squareSize = 10;

class BoardController {
    constructor(options) {
        this.options = options || {};
        this.containerEl = options.containerEl || null;
        this.assetsUrl = options.assetsUrl || "";
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
    }

    drawBoard() {
        console.log('drawBoard');
        let context = this;
        context.initEngine();
        context.initObjects(function () {
            context.onAnimationFrame();
        })
        context.initLights();
    }

    initEngine() {
        const viewWidth = this.containerEl.offsetWidth;
        const viewHeight = this.containerEl.offsetHeight;

        renderer = new THREE1.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(viewWidth, viewHeight);

        scene = new THREE1.Scene();

        camera = new THREE1.PerspectiveCamera(35, viewWidth / viewHeight, 1, 1000);
        camera.position.set(0, 120, 150);
        cameraController = new THREE.OrbitControls(camera, this.containerEl);
        lights.topLight = new THREE.PointLight();
        lights.topLight.position.set(0, 150, 0);
        lights.topLight.intensity = 1.0;
        scene.add(lights.topLight);
        
        scene.add(camera);
        
        this.containerEl.appendChild(renderer.domElement);
    }

    initObjects(callback) {
        // where to route all board and piece creation and add to scene
        const material = new THREE1.MeshBasicMaterial({ color: 0x00ff00 });
        const testPiece = new THREE1.Mesh(new THREE1.CubeGeometry(60, 3, 60))
        scene.add(testPiece);

        callback();
    }

    initLights() {
        lights.topLight = new THREE.PointLight();
        lights.topLight.position.set(0, 150, 0);
        lights.topLight.intensity = 1.0;
        scene.add(lights.topLight);
    }

    onAnimationFrame() {
        let context = this;
        console.log(context.onAnimationFrame);
        window.requestAnimationFrame(context.onAnimationFrame);
        cameraController.update();
        renderer.render(scene, camera);
    }
}

export default BoardController;