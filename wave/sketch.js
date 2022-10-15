function setup(){
  createCanvas(800,800);
  
}
let n_dots=50;
let radius = 5;
let offset=0;
function draw(){
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (let i=0;i<n_dots;i++){
    let x = i*(width/n_dots)+2*radius;
    //float y = 400+100*sin(map(i,0,n_dots,0,TWO_PI)+offset);
    let y = (height/2)-100*exp(-pow(((map(i,0,n_dots,-3,3)-offset)%7)+3,2));
    //float y = (height/2)-100*sin(map(i,0,n_dots,0,3*PI)-offset);
    //println(((map(i,0,n_dots,-3,3)-offset)%6)+3);
    fill(255);
    circle(x,y, radius);
    noFill();
    vertex(x,y);
  }
  endShape();
  
  stroke(0,255,0);
  beginShape();
  for (let i=0;i<n_dots;i++){
    let x = i*(width/n_dots)+2*radius;
    //float y = 400+100*sin(map(i,0,n_dots,0,TWO_PI)+offset);
    let y = (height/2)-100*exp(-pow(((map(i,0,n_dots,-3,3)-2*offset+TWO_PI/3)%7)+3,2));
    //float y = (height/2)-100*sin(map(i,0,n_dots,0,3*PI)-2*offset+PI/3);
    //println(((map(i,0,n_dots,-3,3)-offset)%6)+3);
    fill(255);
    circle(x,y, radius);
    noFill();
    vertex(x,y);
  }
  endShape();
  
    stroke(0,255,255);
  beginShape();
  for (let i=0;i<n_dots;i++){
    let x = i*(width/n_dots)+2*radius;
    //float y = 400+100*sin(map(i,0,n_dots,0,TWO_PI)+offset);
    let y = (height/2)-100*exp(-pow(((map(i,0,n_dots,-3,3)-3*offset+PI/3)%7)+3,2));
    //float y = (height/2)-100*sin(map(i,0,n_dots,0,3*PI)-3*offset+2*PI/3);
    //println(((map(i,0,n_dots,-3,3)-offset)%6)+3);
    fill(255);
    circle(x,y, radius);
    noFill();
    vertex(x,y);
  }
  endShape();
  offset=(offset+0.02);
  //noLoop();
}
