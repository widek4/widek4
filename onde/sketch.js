let PI = 3.141592;
let phi_s;

function setup(){
  createCanvas(800,800, WEBGL);
  phi_s=createSlider(0,TWO_PI,PI/2,0.1);
  camera(-200,-200,200);
}

let k = 0.1;
let t=0;
let phi;
let omega = 0.1;
let E0 = 30;
let H0 = ((E0*k)/omega);


function draw(){

  phi = phi_s.value();
  orbitControl();
  
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
