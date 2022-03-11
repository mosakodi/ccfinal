let img1;
// let img2;
// var angle = 225;
let particles = [];
let sunimg = [];
let mercuryimg = [];
let venusimg = [];
let marsimg = [];
let jupiterimg = [];
let saturnimg = [];
let uranusimg = [];
let neptuneimg = [];
let plutoimg = [];
let erisimg = [];

//nay's code
let table;
let timer = 0;
let counted = false;
let path = 0;
let phase = 4;//nay says: phase = 2, & 2 is the second column on her table, not counting the first column, 
// phase for me moon is column 5, so not counting first column, this would be column 4?
let rows;
let rowCount;
let conjunct = false;//what should be my two (or more) booleans?, maybe waxing ~ conjunct
let traveling = true;//what shousl be my two (or more) booleans? maybe waning ~ traveling

//do we need these instead of waning & waxing??
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

//nay's code
  table = loadTable('ephemerisfinal.csv', 'csv', 'header');
  }

function setup() {
 createCanvas (800,800);

//nay's code
 print(table.getRowCount() + ' total rows in table');
 print(table.getColumnCount() + ' total columns in table');
 rows = table.getRow();
 rowCount = table.getRowCount();

 sunimg[0] = loadImage('assets/sun.png')
 sunimg[1] = loadImage('assets/sun.png')
 mercuryimg[0] = loadImage('assets/mercury.png');
 mercuryimg[1] = loadImage('assets/mercury.png');
 venusimg[0] = loadImage('assets/venus.png');
 venusimg[1] = loadImage('assets/venus.png');
 marsimg[0] = loadImage('assets/mars.png');
 marsimg[1] = loadImage('assets/mars');
 jupiterimg[0 = loadImage('assets/jupiter.png');
 jupiterimg[1]] = loadImage('assets/jupiter.png');
 saturnimg[0] = loadImage('assets/saturn.png');
 saturnimg[1] = loadImage('assets/saturn.png');
 uranusimg[0] = loadImage('assets/uranus.png');
 uranusimg[1] = loadImage('assets/uranus.png');
 neptuneimg[0] = loadImage('assets/neptune.png');
 neptuneimg[1] = loadImage('assets/neptune.png');
 plutoimg[0] = loadImage('assets/pluto.png');
 plutoimg[1] = loadImage('assets/pluto.png');
 erisimg[0] = loadImage('assets/eris.png');
 erisimg[1] = loadImage('assets/eris.png');


 for (var i = 0; i < 100; i++) {
		particles.push(new Particle);
	}
}

function draw() {
	background(0);

	// push();
 //  	imageMode(CENTER);
 //  	translate(width/2, height/2);
 //  	image(img1, 0, 0);
 //  	pop();

  	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	image(img1, 0, 0);
  	pop();

	// // angle+=-0.0025
	// angle+= -0.1;
	// angle = angle%360;

 //  	moon(angle);
 //  	// print(angle);

  	if(path < -45 && angle > -46){//trigger sun, this is new moon
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(0);//0 = sun in this case
  		}
  	}

  	for (var i = 0; i < particles.length; i++) {
  		particles[i].display();
  		particles[i].move();
  	}
  	//nay's code
  	 print(path);
  if (millis() % 1000 > 500){
    if(!counted){
      timer++;
      path = table.get(timer, phase);
      counted = true;
      //nay: //if (table.get(timer, 6) == 1) 
      //miri's attempt with sun:
      if (table.get(timer, 5) == >= 1 and < 30){ //6 is the number of the column in the table (new moon), not counting the first column
      	//would this be for me, for the sun for example, (table.get(timer, 5) == >=1 and <30){} ~ 
      	//or?? maybe move planets to 0 or 1 instead of actual degrees?
       conjunct = true;
       traveling = false;
      }
      //nay: //if (table.get(timer, 6) == 1) 
      //miri's attempt with mercury:
      if (table.get(timer, 6) ==  >= 1 and < 30){ //5 is the number of the column in the table (full moon), not counting the first column
        conjunct = true;
        traveling = false;
      }
      if (conjunct == true) {
      //nay: path = map(path, 0, 100, 630, 400);
      //miri's attempt:

  	}
      }
      if (traveling == true) {
      path = map(path, 0, 100, 160, 400);
      }
    }
  }else{ //if millies() % 1000 < 500
    if(counted == true){
      counted = false;
    }
  }
  if (timer >= rowCount){
    timer = 0;
  }
//nay's code
  // fill(200);
  // ellipse(width/2, height/2, width/3, height/3);
  // for (var i = 0; i < timer; i++) { //2.66 is the 800/r  
  //   fill(0);
  //   ellipse(path, 0.0025 * ((path-400)*(path-400)) + 400, width/3, height/3);
  }

 

  function moon(phase){
	push();
	// angle+=-0.0025
	translate(width/2,height/2);
	rotate(radians(phase));
	stroke('red');
	strokeWeight(10);
	line(0, 0, 130, 130);
	pop();
}
class Particle{
	 constructor(){
		this.size = random(5, 50);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
		this.image = int(random(2));
		this.x = width/2;
		this.y = height/2;
		this.planet = 0;
		this.visible = false;
	}

	display(){//we can display whatever we want ellipse, rect, images, etc
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
			if(this.planet == 6){
				image(uranusimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 7){
				image(neptuneimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 8){
				image(plutoimg[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.planet == 9){
				image(erisimg[this.image], this.x, this.y, this.size, this.size);
			}
		}
	}

	move(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}

	respawn(planetNumber){//
		this.visible = true;
		this.planet = planetNumber;
		this.x = width/2;
		this.y = height/2;

	}

}








// timer++;
 //  	timer = timer % (monthInSeconds * frameRate); //300 should be 5 seconds if we are 60fps ~ can this be slower?`
 // 	 moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);//can moonphase be the line??
 //  	//print(moonphase);
 //  	// fill(255);
 //  	// text("day of the month "+int(moonphase), 100, 100);
 //  	moon(moonphase, width/2, height/2, 1);//how to make this relate to my line??

 //  	for (var i = 0; i < 30; i++) {
 //    moon(i, i*30, 50, 0.1);
  // }
 
 

//can a class be inside a function, ie ~> can we call certain particles to explode or move in at different
//parts of the moonphase function?????

// function moon(phase, xLoc, yLoc, overallSize){ //phase should be between 0-30
//   if (phase <= 15){ //can we make phase into an angle? i.e. if angle == -45 -> particles explode??
//     phase = map(phase, 0, 15, 0, 300);
//   }else{
//     phase = map(phase, 15, 30, 300, 0);
//   }

//   ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize );
// 	//print("myCoolFunction is running");
// }














// class Particle{//what do we do with this data, we hold it here
// 		this.size = random(5, 50);
// 		this.xSpeed = random(-1, 1);
// 		this.ySpeed = random(-1, 1);
// 		this.image = int(random(2));
// 	}

// display(){//we can display whatever we want ellipse, rect, images, etc
// 	image(earthrise, this.x, this.y, this.size, this.size);
// 		let newSize;
// 		if(this.image == 1){
// 		newSize = this.size * 2;
// 	}
// 	else{
// 		newSize = this.size;
// 	}
// 	image(earths[this.image], this.x, this.y, this.size, this.size);

// }

// move(){
// 	this.x = this.x + this.xSpeed;
// 	this.y = this.y + this.ySpeed;
// 	if (this.x > width || this.x < 0){
// 		this.x = random(width);
// 	}
// 	if (this.y > height || this.y < 0){
// 		this.y = random(height);
// 	}
// }
// }












//     phase = map(phase, 0, 15, 0, 300);
//  }
//   else{
//     phase = map(phase, 15, 30, 300, 0);
//   }

//   // image(moon[phase], xLoc, yLoc)

//   ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);
// }
	






	


  	//where are we block in p5?

  // image(moon[phase], xLoc, yLoc)

  // ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);

  // text("day of the month" +int(moonphase), 100, 100);

// let timer = 0;
// let moonphase;
// let monthInSeconds = 30;
// let frameRate = 60;
// let xLoc
// let yLoc

// function setup() {
//  createCanvas (800,800)
// }

// //what should go in moonfunction vs drawloop?
// //moonfuction should only contain what I need to draw the moon
// //draw function is just drawing it

// function draw() {
// background(0)
// timer++;
// timer = timer % (monthInSeconds * frameRate);
// // timer = timer % 300; //300 should be 5 seconds if we are at 60 framerate
// // moonphase = map(timer, 0, 300, 0, 30);
// moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);
// fill(255);
// text("day of the month" +int(moonphase), 100, 100);
// // print(moonphase);
// moon(moonphase, width/2, height/2, 1);  

// //draw 28 different moons
// for (var i = 0; i < 30; i++){
//   moon(i, i*30, 50, 0.1);
//    // moon(i, i+100, 100); //circle with circles within
//  } 
// }

// function moon(phase, xLoc, yLoc, overallSize){//phase should be between 0-30
//   if (phase <= 15){
//     phase = map(phase, 0, 15, 0, 300);
//  }
//   else{
//     phase = map(phase, 15, 30, 300, 0);
//   }

//   // image(moon[phase], xLoc, yLoc)

//   ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize);
// }



