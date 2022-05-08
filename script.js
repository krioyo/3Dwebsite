/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Test cube
 */
 const geometry = new THREE.BoxGeometry();
 const material = new THREE.MeshPhongMaterial( { color: 0x00ffff} );
 material.needsUpdate = true;
 const cube = new THREE.Mesh( geometry, material );
 //cube.castShadow = true;
 cube.receiveShadow = true;
 cube.position.set(1, 0.155, 0);
 scene.add( cube );

 var ambientLight = new THREE.AmbientLight(0xffffff, 0.1); // soft white light
 scene.add(ambientLight);

  // Create directional light and add to scene.
  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
  directionalLight.position.set(0, 1, 0).normalize();
  scene.add(directionalLight);
  directionalLight.castShadow = true;            // default false
  // Will not light anything closer than 0.1 units or further than 25 units
  directionalLight.shadow.camera.near = 0.0001;
  directionalLight.shadow.camera.far = 100;

  // const directionaLightHelper = new THREE.DirectionalLightHelper( directionalLight, 0.01 );
  // scene.add( directionaLightHelper );







const title = document.querySelector('.v4_24');
console.log(title)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height


    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate(){
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  cube.rotation.z += 0.1;
  renderer.render(scene, camera);
}

function animate(){
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  cube.rotation.z += 0.1;
  renderer.render(scene, camera);
}

document.body.onscroll = () => {

  animate()
  // title.style.top = Math.max(3 + 0.0494*window.scrollY, 1) + "vw";
  console.log(window.height);




}

document.body.stopScroll = () => {
  animate()
  animate()
  animate()
  animate()
  animate()
}

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width+100, sizes.height+100)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor( 0xF3F3F4 )

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}


tick()
