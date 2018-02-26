//gloabal variable to make passing parameters easier
var camera, scene, renderer;
var geometry, material, mesh;
var light, object,controls;
var theta=0;
radius=100;

init();
animate();

function init(){
	//to build scene and set all camera and render options
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth/window.
	innerHeight,
	1,
	1000
	);

	//change camera position
	camera.position.x = 1;
	camera.position.y = 2
	camera.position.z = 5;
	
	//make camera look at a coordinate
	camera.lookAt(new THREE.Vector3(0,0,0));	

	//creation of objects
	scene.background = new THREE.Color( 0xf0f0f0 );
	light = new THREE.DirectionalLight( 0xffffff, 2);
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );
	geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
	for ( var i = 0; i < 3000; i ++ ) {
		object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
		object.position.x = Math.random() * 800 - 400;
		object.position.y = Math.random() * 800 - 400;
		object.position.z = Math.random() * 800 - 400;
		scene.add( object );
	
	}


	//needs to be after everything or wont render
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(scene,camera);
	animate();

}


function animate() {	
				requestAnimationFrame(animate);		
				render();

			}

function render(){
				theta += 0.5;
				camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
				camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( scene.position );
				renderer.render( scene, camera );
		}



