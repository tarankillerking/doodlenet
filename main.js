function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(drawing)
  }
function drawing(){
    doodlenet.classify(canvas,gotresult)
}  
  function preload(){
    doodlenet=ml5.imageclassifier('DoodleNet')
  }
function draw(){
  strokeWeight(13)
  stroke("blue")
  if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY)
    
  }
}
function gotresult(error,results){
if(error) {
  console.log(error)
} else {
  console.log(results)
}
}
