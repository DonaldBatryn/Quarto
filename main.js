/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Game from './game';
// import GameView from './game_view';

// const vsSource = `
//     attribute vec4 aVertexPosition;

//     uniform mat4 uModelViewMatrix;
//     uniform mat4 uProjectionMatrix;

//     void main() {
//     gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
//     }
// `;

// const fsSource = `
//     void main() {
//     gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
//     }
// `;

// function initShaderProgram(gl, vsSource, fsSource) {
//     const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
//     const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

//     // Create the shader program

//     const shaderProgram = gl.createProgram();
//     gl.attachShader(shaderProgram, vertexShader);
//     gl.attachShader(shaderProgram, fragmentShader);
//     gl.linkProgram(shaderProgram);

//     // If creating the shader program failed, alert

//     if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
//         alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
//         return null;
//     }

//     return shaderProgram;
// }

// // creates a shader of the given type, uploads the source and
// // compiles it.
// //
// function loadShader(gl, type, source) {
//     const shader = gl.createShader(type);

//     // Send the source to the shader object

//     gl.shaderSource(shader, source);

//     // Compile the shader program

//     gl.compileShader(shader);

//     // See if it compiled successfully

//     if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//         alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
//         gl.deleteShader(shader);
//         return null;
//     }

//     return shader;
// }




// function main() {
    
//     let canvas = document.getElementById("game-canvas");
//     let gl = canvas.getContext("webgl");
    
//     if (gl === null) {
//         alert("Unable to initialize WebGL.");
//         return;
//     }
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);
    
//     const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

//     const programInfo = {
//         program: shaderProgram,
//         attribLocations: {
//             vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition')
//         },
//         uniformLocations: {
//             projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
//             modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
//         }
//     }
// }

// window.onload = main;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map