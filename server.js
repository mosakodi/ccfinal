let twelfth = 0;
let month = 0;
let img1;
// let img2;
var angle = -70;
let particles = [];
let particleSystems = [];

let sunimg = [];
let mercuryimg = [];
let venusimg = [];
let marsimg = [];
let jupiterimg = [];
let saturnimg = [];
// let uranusimg = [];
// let neptuneimg = [];
// let plutoimg = [];
// let erisimg = [];

let table;
let timer = 0;
let counted = false;
let path = 0;
let phase = 4;//nay says: phase = 2, & 2 is the second column on her table, not counting the first column, 
// phase for me moon is column 5, so not counting first column, this would be column 4?
let rows;
let rowCount;
let conjunct = false;
let traveling = true;

let sun = false;
let mercury = false;
let venus = false;
let mars = false;
let jupiter = false;
let saturn = false;
let uranus = false;
let neptune = false;
let pluto = false;
let eris = false;


function preload() {
  img1 = loadImage('assets/outerwheel4.png');
  // img2 = loadImage('assets/innerwheel2.png');

  table = loadTable('assets/ephemerisp5.csv', 'csv', 'header');
  }

function setup() {
 createCanvas (800,800);//WEBGL for 3D, load model instead of image, see p5 ref - has to be obj!
 //convert in blender or unity??

 print(table.getRowCount() + ' total rows in table');
 print(table.getColumnCount() + ' total columns in table');
 rows = table.getRow();
 rowCount = table.getRowCount();

 sunimg[0] = loadImage('assets/venus.png');
 sunimg[1] = loadImage('assets/venus.png');
 mercuryimg[0] = loadImage('assets/mercury.png');
 mercuryimg[1] = loadImage('assets/mercury.png');
 venusimg[0] = loadImage('assets/venus.png');
 venusimg[1] = loadImage('assets/venus.png');
 marsimg[0] = loadImage('assets/mars.png');
 marsimg[1] = loadImage('assets/mars.png');
 jupiterimg[0] = loadImage('assets/jupiter.png');
 jupiterimg[1] = loadImage('assets/jupiter.png');
 saturnimg[0] = loadImage('assets/saturn.png');
 saturnimg[1] = loadImage('assets/saturn.png');
 // uranusimg[0] = loadImage('assets/uranus.png'); 
 // uranusimg[1] = loadImage('assets/uranus.png');
 // neptuneimg[0] = loadImage('assets/neptune.png');
 // neptuneimg[1] = loadImage('assets/neptune.png');
 // plutoimg[0] = loadImage('assets/pluto.png');
 // plutoimg[1] = loadImage('assets/pluto.png');
 // erisimg[0] = loadImage('assets/eris.png');
 // erisimg[1] = loadImage('assets/eris.png');

for (var i = 0; i < 10; i++) {
	particleSystems[i]= new Particlesystem(i);
	}
}

function draw() {
	background(0);

  	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	image(img1, 0, 0);
  	pop();

	angle-= 0.5;//osc message from max will add -0.5 to 'timer'
	if (angle < -360){
		angle = 0;
		month++;
	}

  	moon(angle);
  	// print(angle);

  	for (var i = 0; i < particleSystems.length; i++) {
  	 particleSystems[i].runSystem();
  	}

  	if(angle < -70 && angle > -75){//scorpio 
  		if (month == 0){
  			twelfth = 0
  		}else {
  			twelfth = 12*month;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -101 && angle > -106){//sag 
  		if (month == 0){
  			twelfth = 1
  		}else {
  			twelfth = 12*month+1;//next one will be month+2
  		}
  		triggerplanets(twelfth);
  	}
  	
  	if(angle < -130 && angle > -136){//cap
  		if (month == 0){
  			twelfth = 2
  		}else {
  			twelfth = 12*month+2;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -160 && angle > -166){//aquarius	
  		if (month == 0){
  			twelfth = 3
  		}else {
  			twelfth = 12*month+3;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -190 && angle > -195){//pisces
  		if (month == 0){
  			twelfth = 4
  		}else {
  			twelfth = 12*month+4;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -220 && angle > -225){//aries
  		if (month == 0){
  			twelfth = 5
  		}else {
  			twelfth = 12*month+5;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -250 && angle > -255){//taurus	
  		if (month == 0){
  			twelfth = 6
  		}else {
  			twelfth = 12*month+6;
  		}
  		triggerplanets(twelfth);
  	}

	if(angle < -280 && angle > -285){//gemini
  			if (month == 0){
  			twelfth = 7
  		}else {
  			twelfth = 12*month+7;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -310 && angle > -315){//cancer
  			if (month == 0){
  			twelfth = 8
  		}else {
  			twelfth = 12*month+8;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -340 && angle > -345){//leo
  			if (month == 0){
  			twelfth = 9
  		}else {
  			twelfth = 12*month+9;
  		}
  		triggerplanets(twelfth);
  	}

  	if(angle < -301 && angle > -330){//virgo
  		if (month == 0){
  			twelfth = 10
  		}else {
  			twelfth = 12*month+10;
  		}
  		triggerplanets(twelfth);
  	}

  		if(angle < -331 && angle > -360){//libra
  			if (month == 0){
  			twelfth = 11
  		}else {
  			twelfth = 12*month+11;
  		}
  		triggerplanets(twelfth);
  	}

  	for (var i = 0; i < particleSystems.length; i++) {
  		particleSystems[i].runSystem();
  		}
}	

 function triggerplanets(twelfth){
  	//let row = table.getRow(twelfth-1);
 	let row = table.getRow(twelfth);//this needs to return the right row for a given twelfth
 	// print(row.get('mars')!= 0);
 	print(twelfth);
 	if(	row.get('sun') != 0){
 		particleSystems[0].respawn();
 	}
 	if(	row.get('mercury') != 0){
  		particleSystems[1].respawn();
  		}
  	if(	row.get('venus') != 0){
  		particleSystems[2].respawn();
  		}	
  	if(	row.get('mars') != 0){
  		particleSystems[3].respawn();
  		print('respawning mars');
  		}
  	if(	row.get('jupiter') != 0){
  		particleSystems[4].respawn();
  		}	
  	if(	row.get('saturn') != 0){
  		particleSystems[5].respawn();
  		}
  	// if(	row.get('uranus') != 0){
  	// 	particleSystems[6].respawn();
  	// 	}	
  	// if(	row.get('neptune') != 0){
  	// 	particleSystems[7].respawn();
  	// 	}
  	// if(	row.get('pluto') != 0){
  	// 	particleSystems[8].respawn();
  	// 	}	
  	// if(	row.get('eris') != 0){
  	// 	particleSystems[9].respawn();
  	// 	}
 }

  function moon(phase){
	push();
	translate(width/2,height/2);
	rotate(radians(phase));
	stroke('red');
	strokeWeight(10);
	line(0, 0, 130, 130);
	pop();
}
class Particle{
	 constructor(planet){
		this.size = random(15, 75);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
		this.image = int(random(2));
		this.x = width/2;
		this.y = height/2;
		this.planet = planet;
		this.visible = false;
	}
	
	display(){
		if (this.visible){
			if(this.planet == 0){
				image(sunimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 1){
				image(mercuryimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 2){
				image(venusimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 3){
				image(marsimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 4){
				image(jupiterimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 5){
				image(saturnimg[this.image], this.x, this.y, this.size, this.size);
			}
			// if(this.planet == 6){
			// 	image(uranusimg[this.image], this.x, this.y, this.size, this.size);
			// }
			// if(this.planet == 7){
			// 	image(neptuneimg[this.image], this.x, this.y, this.size, this.size);
			// }
			// if(this.planet == 8){
			// 	image(plutoimg[this.image], this.x, this.y, this.size, this.size);
			// }
			// if(this.planet == 9){
			// 	image(erisimg[this.image], this.x, this.y, this.size, this.size);
			// }
		}
	}

	move(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}

	respawn(){//
		this.visible = true;
		this.x = width/2;
		this.y = height/2;
	}
}

class Particlesystem{
	 constructor(planet){
	 	this.particles = [];
	 	this.planet = planet;
 		for (var i = 0; i < 100; i++) {
			this.particles.push(new Particle(this.planet));
		}
	 }
	 addParticle(p){
	 	p.planet = this.planet;
	 	this.particles.push(p);
	 }
	 runSystem(){
	 	for (var i = 0; i < this.particles.length; i++) {
	 		this.particles[i].display();
  			this.particles[i].move();
	 	}
	 }
	 respawn(){
	 	for (var i = 0; i < this.particles.length; i++) {
  			this.particles[i].respawn();
  		}
	 }
}	 


