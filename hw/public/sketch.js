var socket;

function setup(){
    createCanvas(600, 400);
    background(51);

    socket = io.connect('http://localhost:3000');
    socket.on('mouse',newDrawing)

}

function newDrawing(data){
    noStroke();
    fill(255);
    ellipse(data.x, data.y, 36, 36);

}

function draw(){

}

function mouseDragged() {
    fill(255);
    noStroke();
    ellipse(mouseX,mouseY,20,20);
    sendmouse(mouseX,mouseY);
  }
  
  function sendmouse(xpos, ypos) {
    console.log("sendmouse: " + xpos + " " + ypos);
    
    var data = {
      x: xpos,
      y: ypos
    };
  
    socket.emit('mouse',data);
  }
  