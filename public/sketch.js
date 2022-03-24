let twelfth = 0;
let month = 0;
let img1;
// let img2;
var angle = -70;
let particles = [];
let particleSystems = [];

let weights = [0.01, -0.04, 0.025, -0.03, 0, 0.02];

let sunimg = [];
let mercuryimg = [];
let venusimg = [];
let marsimg = [];
let jupiterimg = [];
let saturnimg = [];

let wind;
let gravity;

let table;
// let timer = 0;
// let counted = false;
// let path = 0;
let rows;
let rowCount;

let sun = false;
let mercury = false;
let venus = false;
let mars = false;
let jupiter = false;
let saturn = false;

function preload() {
  img1 = loadImage('assets/outerwheel4.png');
  // img2 = loadImage('assets/innerwheel2.png');

  table = loadTable('assets/ephemerisp5.csv', 'csv', 'header');
  }

function setup() {
 createCanvas (800,800);//WEBGL for 3D, load model instead of image, see p5 ref - has to be obj!
 //convert in blender or unity??
socket = io.connect('localhost:8000') //change localhost:8000 for running locally
socket.on('data',
    // When we receive data
    function(data) {
      console.log("Got: " + data.month);
      angle = data.angle;
      month = data.month;
      //print("amplitude: "+amplitude);
    }
  );


 print(table.getRowCount() + ' total rows in table');
 print(table.getColumnCount() + ' total columns in table');
 rows = table.getRow();
 rowCount = table.getRowCount();

 sunimg[0] = loadImage('assets/sun2.png');
 sunimg[1] = loadImage('assets/sunY.png');
 mercuryimg[0] = loadImage('assets/mercury.png');
 mercuryimg[1] = loadImage('assets/merc2.png');
 venusimg[0] = loadImage('assets/venus.png');
 venusimg[1] = loadImage('assets/venus.png');
 marsimg[0] = loadImage('assets/mars.png');
 marsimg[1] = loadImage('assets/mars.png');
 jupiterimg[0] = loadImage('assets/jupiter.png');
 jupiterimg[1] = loadImage('assets/jupiter.png');
 saturnimg[0] = loadImage('assets/saturn.png');
 saturnimg[1] = loadImage('assets/saturn.png');

 wind = createVector(0.01, 0);
 gravity = createVector(0, 0.01);

for (var i = 0; i < 6; i++) {
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

	// angle-= 0.5;//osc message from max will add -0.5 to 'timer'
	// if (angle < -360){
	// 	angle = 0;
	// 	month++;
	// }

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
  		triggerplanets(twelfth);//getting an error here after 26 revolutions, 
      //also referring to line 222 (that's when the table 'ends')
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
 	let row = table.getRow(twelfth);//this needs to return the right row for a given twelfth
 	// print(twelfth);
 	if(	row.get('sun') != 0){///getting an error here after 26 revolutions, 
      //also referring to line 165 (that's when the table 'ends')
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
  		// print('respawning mars');
  		}
  	if(	row.get('jupiter') != 0){
  		particleSystems[4].respawn();
  		}	
  	if(	row.get('saturn') != 0){
  		particleSystems[5].respawn();
  		}
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
		this.planet = planet;
		this.visible = false;
    this.location = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D(); //instead of xSpeed and ySpeed
    this.velocity.mult(random(-.5, .5));
    this.size = 25;
    this.image = int(random(2));
	}
	
	display(){
		if (this.visible){
		        if(this.planet == 0){
        image(sunimg[this.image], this.location.x, this.location.y, 40, 40);
      }
      if(this.planet == 1){
        image(mercuryimg[this.image], this.location.x, this.location.y, 30, 30);
      }
      if(this.planet == 2){
        image(venusimg[this.image], this.location.x, this.location.y, 30, 30);
      }
      if(this.planet == 3){
        image(marsimg[this.image], this.location.x, this.location.y, 35, 35);
      }
      if(this.planet == 4){
        image(jupiterimg[this.image], this.location.x, this.location.y, 60, 40);
      }
      if(this.planet == 5){
        image(saturnimg[this.image], this.location.x, this.location.y, 45, 45);
      }
		}
	}

	move(){
    let planetgravity = createVector(0, 0);
    planetgravity.x = gravity.x;
    planetgravity.y = gravity.y;
    planetgravity.mult(weights[this.planet]);
    this.velocity.add(planetgravity);

    let planetwind = createVector(wind.x, wind.y);
    planetwind.mult(weights[this.planet]);
    this.velocity.add(planetwind);
    this.location.add(this.velocity);
	}

	respawn(){//
		this.visible = true;
    this.location.x = width/2;
    this.location.y = height/2;
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
	    this.particles[i].move();
      this.particles[i].display();
	 	}
	 }
	 respawn(){
	 	for (var i = 0; i < this.particles.length; i++) {
  			this.particles[i].respawn();
  		}
	 }
}	 


