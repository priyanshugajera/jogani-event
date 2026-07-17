/*=========================================
JOGANI EVENT
Three.js Luxury Background
=========================================*/

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z = 45;

const renderer = new THREE.WebGLRenderer({

alpha:true,

antialias:true

});

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

renderer.setSize(

window.innerWidth,

window.innerHeight

);

renderer.domElement.id="threeCanvas";

document.body.prepend(renderer.domElement);

/*=========================================
Gold Particles
=========================================*/

const particleCount=2500;

const geometry=new THREE.BufferGeometry();

const positions=[];

for(let i=0;i<particleCount;i++){

positions.push(

(Math.random()-0.5)*220,

(Math.random()-0.5)*220,

(Math.random()-0.5)*220

);

}

geometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(

positions,

3

)

);

const material=new THREE.PointsMaterial({

color:0xD4AF37,

size:.35,

transparent:true,

opacity:.85

});

const particles=new THREE.Points(

geometry,

material

);

scene.add(particles);

/*=========================================
Ambient Light
=========================================*/

scene.add(

new THREE.AmbientLight(

0xffffff,

1

)

);

/*=========================================
Mouse
=========================================*/

const mouse={x:0,y:0};

window.addEventListener("mousemove",(e)=>{

mouse.x=(e.clientX/window.innerWidth-.5);

mouse.y=(e.clientY/window.innerHeight-.5);

});

/*=========================================
Animation
=========================================*/

function animate(){

requestAnimationFrame(animate);

particles.rotation.y+=0.0008;

particles.rotation.x+=0.0002;

camera.position.x+=

(mouse.x*10-camera.position.x)*0.03;

camera.position.y+=

(-mouse.y*10-camera.position.y)*0.03;

camera.lookAt(scene.position);

renderer.render(scene,camera);

}

animate();

/*=========================================
Resize
=========================================*/

window.addEventListener("resize",()=>{

camera.aspect=

window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});