function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(drawing)
    doodlenet=ml5.imageclassifier('DoodleNet')
  }
function drawing(){
    doodlenet.classify(canvas,gotresult)
}  
  