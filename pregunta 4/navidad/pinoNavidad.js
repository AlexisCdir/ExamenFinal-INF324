var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,-6,0.5);
	camera.lookAt(0,0,0);

	// LIGHTS
	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
	var materialPino = [];
	var objetoPino =[];
	var materialTronco = [];
	var objetoTronco = [];
	var adornosphere1 = [];
	var adornosphere2 = [];
	var adornosphere3 = [];

	var esferaColores = [];
	esferaColores.push(0xA22627);
	esferaColores.push(0xE8C25C);
	esferaColores.push(0x083E9B);
	esferaColores.push(0xA27124);
	esferaColores.push(0x21B912);
	esferaColores.push(0xE8E8E8);
	esferaColores.push(0xB108A1);
	esferaColores.push(0x0891A9);
	esferaColores.push(0xF6F6F6);

	

	const createSphere = (x, y, z, color) => {
	  const sphereGeometry = new THREE.SphereGeometry(0.06, 64, 32);
	  sphereGeometry.computeFaceNormals();
	  const sphereMesh = new THREE.Mesh(sphereGeometry, new THREE.MeshBasicMaterial({ color: esferaColores[color] }));
	  sphereMesh.translateX(x);
	  sphereMesh.translateY(y);
	  sphereMesh.translateZ(z);
	  return sphereMesh;
	};

	for (let i = 0; i < 4; i++) {
	  for (let j = i * 5 + 20; j < (i + 1) * 5 + 20; j++) {
	    const t = Math.random();
	    const tt = Math.random();

	    let x, y;
	    switch (i) {
	      case 0: x = 0.8 + t * -0.8; y = t * 0.8; break;
	      case 1: x = t * -0.8; y = 0.8 + t * -0.8; break;
	      case 2: x = -0.8 + t * 0.8; y = t * -0.8; break;
	      case 3: x = t * 0.8; y = -0.8 + t * 0.8; break;
	    }

	    const x1 = x + tt * (0 - x);
	    const y1 = y + tt * (0 - y);
	    const z1 = -0.3 + tt * (1.1);

	    const color = Math.round(Math.random() * 8);

	    adornosphere1[j] = createSphere(x1, y1, z1, color);
	  }
	}

	for (let i = 0; i < 4; i++) {
	  for (let j = i * 5 + 20; j < (i + 1) * 5 + 20; j++) {
	    const t = Math.random();
	    const tt = Math.random();

	    let x, y;
	    switch (i) {
	      case 0: x = 1.1 + t * -1.1; y = t * 1.1; break;
	      case 1: x = t * -1.1; y = 1.1 + t * -1.1; break;
	      case 2: x = -1.1 + t * 1.1; y = t * -1.1; break;
	      case 3: x = t * 1.1; y = -1.1 + t * 1.1; break;
	    }

	    const x1 = x + tt * (0 - x);
	    const y1 = y + tt * (0 - y);
	    const z1 = -1 + tt * (1.1);

	    const color = Math.round(Math.random() * 8);

	    adornosphere2[j] = createSphere(x1, y1, z1, color);
	  }
	}

	for (let i = 0; i < 4; i++) {
	  for (let j = i * 5 + 20; j < (i + 1) * 5 + 20; j++) {
	    const t = Math.random();
	    const tt = Math.random();

	    let x, y;
	    switch (i) {
	      case 0: x = 0.5 + t * -0.5; y = t * 0.5; break;
	      case 1: x = t * -0.5; y = 0.5 + t * -0.5; break;
	      case 2: x = -0.5 + t * 0.5; y = t * -0.5; break;
	      case 3: x = t * 0.5; y = -0.5 + t * 0.5; break;
	    }

	    const x1 = x + tt * (0 - x);
	    const y1 = y + tt * (0 - y);
	    const z1 = 0.4 + tt * (1.1);

	    const color = Math.round(Math.random() * 8);

	    adornosphere3[j] = createSphere(x1, y1, z1, color);
	  }
	}
		var geometriaPino = new THREE.Geometry();
		const vertices = [
		  [1, 0, -1], [0, 1, -1], [-1, 0, -1], [0, -1, -1], [0, 0, 0],
		  [0.7, 0, -0.3], [0, 0.7, -0.3], [-0.7, 0, -0.3], [0, -0.7, -0.3], [0, 0, 0.7],
		  [0.4, 0, 0.4], [0, 0.4, 0.4], [-0.4, 0, 0.4], [0, -0.4, 0.4], [0, 0, 1.4],
		  [0.2, 0, 1.1], [0, 0.2, 1.1], [-0.2, 0, 1.1], [0, -0.2, 1.1], [0, 0, 1.8]
		];
		vertices.forEach(coord => {
		  geometriaPino.vertices.push(new THREE.Vector3(coord[0], coord[1], coord[2]));
		});

		for (let j = 0; j < 4; j++) {
		  const indice = 5 * j;

		  geometriaPino.faces.push(
		    new THREE.Face3(indice, indice + 1, indice + 4),
		    new THREE.Face3(indice + 1, indice + 2, indice + 4),
		    new THREE.Face3(indice + 2, indice + 3, indice + 4),
		    new THREE.Face3(indice + 3, indice, indice + 4),
		    new THREE.Face3(indice, indice + 2, indice + 1),
		    new THREE.Face3(indice, indice + 3, indice + 2)
		  );
		}


		var geometriaTronco = new THREE.Geometry();
		geometriaTronco.vertices.push( new THREE.Vector3( 0.0 , -0.1 , -2 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( 0.1 , 0.0 , -2 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( 0.0 , 0.1 , -2 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( -0.1 , 0.0 , -2 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( 0.0 , -0.1 , -1 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( 0.1 , 0.0 , -1 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( 0.0 , 0.1 , -1 ) );
		geometriaTronco.vertices.push( new THREE.Vector3( -0.1 , 0.0 , -1 ) );

		geometriaTronco.faces.push( new THREE.Face3( 0, 2, 1 ) );
		geometriaTronco.faces.push( new THREE.Face3( 0, 3, 2 ) );
		geometriaTronco.faces.push( new THREE.Face3( 0, 1, 5 ) );
		geometriaTronco.faces.push( new THREE.Face3( 0, 5, 4 ) );
		geometriaTronco.faces.push( new THREE.Face3( 1, 2, 6 ) );
		geometriaTronco.faces.push( new THREE.Face3( 1, 6, 5 ) );
		geometriaTronco.faces.push( new THREE.Face3( 4, 5, 6 ) );
		geometriaTronco.faces.push( new THREE.Face3( 4, 6, 7 ) );
		geometriaTronco.faces.push( new THREE.Face3( 7, 2, 3 ) );
		geometriaTronco.faces.push( new THREE.Face3( 7, 6, 2 ) );
		geometriaTronco.faces.push( new THREE.Face3( 4, 3, 0 ) );
		geometriaTronco.faces.push( new THREE.Face3( 4, 7, 3 ) );
		
		
		materialPino = new THREE.MeshBasicMaterial( { color: 0x1B4606 } );
		objetoPino = new THREE.Mesh (geometriaPino, materialPino);

		materialTronco = new THREE.MeshBasicMaterial( { color: 0x6B2F0C } );
		objetoTronco = new THREE.Mesh (geometriaTronco, materialTronco);


	const starGeometry = new THREE.Geometry();
	const starSize = 0.2;

	starGeometry.vertices.push(new THREE.Vector3(0, -1.8, 0));

	for (let i = 0; i < 5; i++) {
	  const angle = (i / 5) * Math.PI * 2;
	  const x = Math.cos(angle) * starSize;
	  const y = Math.sin(angle) * starSize;
	  starGeometry.vertices.push(new THREE.Vector3(x, -1.6, y));
	}

	starGeometry.faces.push(new THREE.Face3(0, 1, 2));
	starGeometry.faces.push(new THREE.Face3(0, 2, 3));
	starGeometry.faces.push(new THREE.Face3(0, 3, 4));
	starGeometry.faces.push(new THREE.Face3(0, 4, 1));
	starGeometry.faces.push(new THREE.Face3(1, 3, 2));

	const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
	const starMesh = new THREE.Mesh(starGeometry, starMaterial);
	starMesh.rotation.x = -Math.PI / 2;

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );


	scene.add( objetoPino );
	scene.add( objetoTronco );
	scene.add(starMesh);

	for (let j = 0; j < 40; j++) {
		scene.add(adornosphere2[j]);
		scene.add(adornosphere1[j]);
		scene.add(adornosphere3[j]);
	}

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
