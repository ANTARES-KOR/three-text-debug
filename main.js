import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const CanvasId = "model-canvas";
const canvas = document.getElementById(CanvasId);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// 카메라를 생성합니다.
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
// 카메라 위치를 설정합니다.
camera.position.set(0, 0, 48);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x316db2);

// 광원 효과를 추가합니다.
const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
ambientLight.castShadow = true;
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 32, 64);
scene.add(directionalLight);

let loadedModel;
const loader = new GLTFLoader();
/**
 * 여기 부분이 모델을 로드하는 부분입니다.
 * public 폴더 아래의 경로에 대해서 지정해주면 되고,
 * .gltf 파일을 로드하면 됩니다.
 */
loader.load("/assets/ybigta-text_mod1/ybigta-text_mod1.gltf", (gltf) => {
  loadedModel = gltf;
  scene.add(loadedModel.scene);
  loadedModel.scene.scale.set(2, 2, 2);
  loadedModel.scene.position.set(0, 0, 0);
});

// 창 리사이즈 이벤트를 처리하는 부분입니다.
function onWindowResize() {
  camera.aspect = window.innerWidth / (window.innerHeight - 80);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight - 80);
}
window.addEventListener("resize", onWindowResize, false);

// Scene을 렌더링하는 부분입니다.
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
