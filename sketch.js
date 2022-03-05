let scl = 150;
let depth = 11;
let seconde;
let min;
let hours;
let size = 0.7;
let showHours = false;
let dt = 0;

function setup() {
  colorMode(HSB);
  createCanvas(800, 800);
  min = map(minute(),0,60,0,TWO_PI);
  //fullScreen();
}

function draw() {
  background(0);
  //fill(255);text(frameRate, 10, 10);noFill();
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(3);
  noFill();
  circle(0, 0, 2*scl);
  strokeWeight(2);
  rotate(-HALF_PI);
  seconde = map(millis()%60000, 0, 60000, 0, TWO_PI);
  //seconde = map(second(),0,60,0,TWO_PI);
  //min = map(millis()%3600000, 0, 3600000, 0, TWO_PI);
  min = map(minute(),0,60,0,TWO_PI);
  hours= map(hour()%12, 0, 12, 0, TWO_PI);
  drawAiguilles(0, 0, 0, scl, 0);
  dt+=0.5;
}

function drawAiguilles(iter,  x,  y,  scale,  phi) {
  if (iter == depth) {
    return;
  }
  let sX = x + scale*cos(seconde+phi);
  let sY = y + scale*sin(seconde+phi);
  let mX = x + 0.8*scale*cos(min+phi);
  let mY = y + 0.8*scale*sin(min+phi);  
  //stroke(map(iter,1,depth,255,100));
  strokeWeight(map(iter, 1, depth, 4,1));
  //strokeWeight(1);
  stroke((15*iter+dt)%255, 255, map(iter, 0, depth, 255, 100), map(iter, 0, depth,220,75));
  line(x, y, sX, sY);
  line(x, y, mX, mY);

  if (showHours) {
    let hX = x + scale*0.6*cos(hours+phi);
    let hY = y + scale*0.6*sin(hours+phi);
    line(x,y,hX,hY);
    drawAiguilles(iter+1, hX, hY, scale*size, hours+phi);
  }

  drawAiguilles(iter+1, sX, sY, scale*size, phi+seconde);
  drawAiguilles(iter+1, mX, mY, scale*size, phi+min);
}
