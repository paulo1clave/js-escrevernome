
function draw() {
    background(220);
  }function setup() {
    createCanvas(1500, 1500);
    background("white")
  }
  
  function draw() {
    stroke("black");
    fill("Purple");
  
    
    if (mouseIsPressed) {
       rect(mouseX, mouseY, 7, 7);
    }
  }