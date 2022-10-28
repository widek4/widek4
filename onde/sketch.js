let PI = 3.141592;
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 25;
let phi_s;

function setup(){
  createCanvas(800,800, WEBGL);
  phi_s=createSlider(0,TWO_PI,PI/2,0.1);
  sliderGroup[0] = createSlider(-400, 400, -200);
  sliderGroup[1] = createSlider(-400, 400, -200);
  sliderGroup[2] = createSlider(10, 400, 200);
  sliderGroup[3] = createSlider(-400, 400, 0);
  sliderGroup[4] = createSlider(-400, 400, 0);
  sliderGroup[5] = createSlider(-400, 400, 0);
  for (var i = 0; i < 6; i++) {
      h = map(i, 0, 6, 5, 85);
      sliderGroup[i].position(10, height + h+15);
      sliderGroup[i].style('width', '80px');
  }
}

let k = 0.1;
let t=0;
let phi;
let omega = 0.1;
let E0 = 30;
let H0 = ((E0*k)/omega);


function draw(){
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  phi = phi_s.value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  
  background(0);
  push();
  //translate(height/2,width/2);
  rotateZ(PI);
  rotateX(0);
  rotateY(-PI/12);


  stroke(255,0,0);
  line(-30,0,0,100,0,0);
  stroke(0,255,0);
  line(0,-30,0,0,100,0);
  stroke(0,255,255);
  line(0,0,-30,0,0,100);

  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let z=0;z<400;z++){

    //vertex(E0*cos(k*z - omega*t), E0*cos(k*z - omega*t),z);
    //vertex(E0*cos(k*z)*cos(omega*t),E0*cos(k*z)*sin(omega*t),z);
    vertex(E0*cos(k*z - omega*t), E0*cos(k*z - omega*t + phi),z);
    //vertex(E0*cos(k*z)*cos(omega*t),0,z); //stationaire Ex
 
    //vertex(0,0,E0*cos(k*z)*cos(omega*t));
  }
  endShape();
  pop();
  t+=0.5;
}
