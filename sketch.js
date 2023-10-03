function setup() {
    createCanvas(700,700);
    background("black");
  }
  
  function draw() {
    stroke("white");
    fill("black");
    
    if(mouseIsPressed){
      rect(mouseX,mouseY,50,50);
    }
  }