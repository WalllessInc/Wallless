/* --------------------------------
*  Three.js
* -------------------------------- */
let scene, camera, renderer, controls;
let geom, points;
const clock = new THREE.Clock();
const initialScale = 0.001;
const targetScale = 1.0;

init();
animate();

function init() {
  //* ------------------------ Scene ------------------------ */
  scene = new THREE.Scene();

  //* ------------------------ Camera ------------------------ */
  const
    fov = 60,
    aspect = window.innerWidth / window.innerHeight,
    near = 1,
    far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 6, 7);
  camera.lookAt(scene.position);

  //* ------------------------ Geometry ------------------------ */
  geom = new THREE.SphereBufferGeometry(3.5, 320, 320); // (半径,横方向の分割数,縦方向の分割数)
  // 色の設定
  let colors = [];
  const color = new THREE.Color(0x3eb497);
  for (let i = 0; i < geom.attributes.position.count; i++) {
    color.toArray(colors, i * 3);
  }
  geom.addAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
  // テクスチャの設定
  const loader = new THREE.TextureLoader();
  loader.setCrossOrigin('');
  const texture = loader.load('assets/images/top_world.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  const disk = loader.load('assets/images/top_circle.png');

  //* ------------------------ Particle ------------------------ */
  points = new THREE.Points(geom, new THREE.ShaderMaterial({
    vertexColors: THREE.VertexColors,
    uniforms: {
      visibility: {
        value: texture
      },
      shift: {
        value: 0
      },
      shape: {
        value: disk
      },
      size: {
        value: 0.125
      },
      scale: {
        value: window.innerHeight / 2
      }
    },
    vertexShader: `

      uniform float scale;
      uniform float size;

      varying vec2 vUv;
      varying vec3 vColor;

      void main() {

        vUv = uv;
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
        gl_PointSize = size * ( scale / length( mvPosition.xyz ) );
        gl_Position = projectionMatrix * mvPosition;

      }
  `,
    fragmentShader: `
      uniform sampler2D visibility;
      uniform float shift;
      uniform sampler2D shape;

      varying vec2 vUv;
      varying vec3 vColor;


      void main() {

        vec2 uv = vUv;
        uv.x += shift;
        vec4 v = texture2D(visibility, uv);
        if (length(v.rgb) < 1.0) discard;

        gl_FragColor = vec4( vColor, 1.0 );
        vec4 shapeData = texture2D( shape, gl_PointCoord );
        if (shapeData.a < 0.5) discard;
        gl_FragColor = gl_FragColor * shapeData;
      }
  `,
    transparent: true,
    opacity: 1.0,
  }));
  points.rotation.y = Math.PI / 2;
  scene.add(points);

  //* ------------------------ Black Globe ------------------------ */
  const blackGlobe = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({
    color: 0x060c14,
    transparent: true,
    opacity: 0.75,
  }));
  blackGlobe.scale.setScalar(0.99);
  points.add(blackGlobe);

  //* ------------------------ Renderer ------------------------ */
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas: document.getElementById('globe'),
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(window.devicePixelRatio);
  // 色味の調整
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.LinearToneMapping;
  // ライティングの調整
  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  // renderer.shadowMap.enabled = true;
  // renderer.physicallyCorrectLights = true;

  window.addEventListener('resize', onWindowResize);
}

//* ------------------------ Resize ------------------------ */
function onWindowResize() {
  // カメラのアスペクト比を正す
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // レンダラーのサイズを調整する
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//* ------------------------ Animation ------------------------ */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animate() {
  requestAnimationFrame(animate);
  // アニメーション進行に応じてスケールを変更する
  const animationDuration = 2;
  const animationDelay = -0.5;
  const animationStart = animationDelay + clock.getElapsedTime();
  const progress = Math.min(animationStart / animationDuration, 1.0);
  const easedProgress = easeOutCubic(progress);

  const currentScale = initialScale + (targetScale - initialScale) * easedProgress;
  points.scale.set(currentScale, currentScale, currentScale);
  points.rotation.y += 0.004;

  render();
}

//* ------------------------ Rendering ------------------------ */
function render() {
  const delta = clock.getDelta();
  renderer.render(scene, camera);
}
