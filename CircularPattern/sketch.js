angle=0;
NUM_CERCLE=3;
SIZE = 800/(NUM_CERCLE+1);
R = SIZE/2;
precision = 10;
let PointX = [];
let PointY = [];
let paths =[];

function setup() {
  createCanvas(800, 800);
colorMode(HSB)
for (i=0; i<NUM_CERCLE*NUM_CERCLE; i++){
  paths[i]=[];
}
}

function draw() {
  background(0,0,80);
  for (i=1; i<NUM_CERCLE+1; i++){
    X = SIZE/3;
    Y = SIZE*i;
    stroke(map(i,0,NUM_CERCLE,0,360),40,100)
    noFill();
    circle(X, Y, SIZE/2);
    circle(Y, X, SIZE/2)
    
    fill(map(i,0,NUM_CERCLE,0,360),40,100)
    tipY = createVector((R/2)*cos(i*angle)+Y,(R/2)*sin(i*angle)+X);
    circle(tipY.x, tipY.y, SIZE/10)
    tipX = createVector((R/2)*cos(i*angle)+X,(R/2)*sin(i*angle)+Y);
    circle(tipX.x,tipX.y, SIZE/10);
    //circle(tipX.y, tipY.x, SIZE/10);

    PointY[i-1]=tipX;
    PointX[i-1]=tipY;
    
  }
  
  for (i=0;i<PointX.length;i++){
    for (j=0;j<PointY.length;j++){
      fill(0,0,80)
      stroke(200);
      line(PointX[i].x, PointY[j].y, PointX[i].x, PointX[i].y);
      line(PointX[i].x, PointY[j].y, PointY[j].x, PointY[j].y)
      stroke(0)
      circle(PointX[i].x, PointY[j].y,5);
      if (frameCount%precision==0){
        paths[NUM_CERCLE*j+i].push(PointX[i].x);
        paths[NUM_CERCLE*j+i].push(PointY[j].y);
      }
      //append(path, (PointX[i].x, PointY[j].y));
    }
        
  }
  for (i=0;i<NUM_CERCLE*NUM_CERCLE;i++){
    if (paths[i].length>300){
      paths[i].pop()
    }
    noFill()
    beginShape()
    for (j=0;j<paths[i].length;j+=2){
      //console.log(j);
      //stroke(255);
      //noFill()
      //circle(paths[i][j], paths[i][j+1],2)
      vertex(paths[i][j], paths[i][j+1])
    }
    endShape()
  }
  angle+=0.005;
}