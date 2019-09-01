
let slider;

function setup() {
  createCanvas(800, 500);
  //noCursor();
  slider = createSlider(0, 500, 500);
  slider.size(width,10);
  createP("¡¡¡buena suerte!!!");

  
}
//function mousePressed()
//    createP("My favorite number is "+ random(0,5));

function draw() {

  background(0);
  fill(25,65,34);
  ellipse(mouseX,mouseY,100,100);

    //ESPACIOS DE LOS LADOS
  /*noStroke();
  fill(255);
  rect(0,0,150,windowHeight);
  noStroke();
  fill(255);
  rect(1450,0,150,windowHeight);*/
  
  
draspace(slider.value(),20,150,200);


}
function draspace(xloc, yloc, size, num) {
    //ESPACIOS
  strokeWeight(2);
  stroke(255);

  fill(0,230,0,80);
  var a = rect(xloc, yloc, size, num);
  xloc=xloc+180;
  var b = rect(xloc, yloc, size, num);
  xloc=xloc+180;
  var c = rect(xloc, yloc, size, num);
    xloc=xloc+180;
  var d = rect(xloc, yloc, size, num);
    xloc=xloc+180;
  var e = rect(xloc, yloc, size, num);
    xloc=xloc+180;


 /* var a1 = rect(40,250,150,200);
  var b1 = rect(220,250,150,200);
  var c1 = rect(400,250,150,200);
  var d1 = rect(580,250,150,200);
  var e1 = rect(760,250,150,200);
  
  var a2 = rect(40,480,150,200);
  var b2 = rect(220,480,150,200);
  var c2 = rect(400,480,150,200);
  var d2 = rect(580,480,150,200);
  var e2 = rect(760,480,150,200);

  var a3 = rect(40,710,150,200);
  var b3 = rect(220,710,150,200);
  var c3 = rect(400,710,150,200);
  var d3 = rect(580,710,150,200);
  var e3 = rect(760,710,150,200);

  var a2 = rect(40,940,150,200);
  var b2 = rect(220,940,150,200);
  var c2 = rect(400,940,150,200);
  var d2 = rect(580,940,150,200);
  var e2 = rect(760,940,150,200);
  stroke(255);

  fill(0,230,0,80);
  var a = rect(40,20,150,200);
  var b = rect(220,20,150,200);
  var c = rect(400,20,150,200);
  var d = rect(580,20,150,200);
  var e = rect(760,20,150,200);

  var a1 = rect(40,250,150,200);
  var b1 = rect(220,250,150,200);
  var c1 = rect(400,250,150,200);
  var d1 = rect(580,250,150,200);
  var e1 = rect(760,250,150,200);
  
  var a2 = rect(40,480,150,200);
  var b2 = rect(220,480,150,200);
  var c2 = rect(400,480,150,200);
  var d2 = rect(580,480,150,200);
  var e2 = rect(760,480,150,200);

  var a3 = rect(40,710,150,200);
  var b3 = rect(220,710,150,200);
  var c3 = rect(400,710,150,200);
  var d3 = rect(580,710,150,200);
  var e3 = rect(760,710,150,200);

  var a2 = rect(40,940,150,200);
  var b2 = rect(220,940,150,200);
  var c2 = rect(400,940,150,200);
  var d2 = rect(580,940,150,200);
  var e2 = rect(760,940,150,200);*/
  
}