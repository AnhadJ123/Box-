var box;
function setup() {
  createCanvas(400,400);
box = createSprite (30,30,40,50)}

function draw() 
{
  background(30);
if (keyDown("right_arrow")) {
  box.position.x = box.position.x + 5
}
if (keyDown("left_arrow")) {
 box.position.x=box.position.x - 5
}
  drawSprites()
}




