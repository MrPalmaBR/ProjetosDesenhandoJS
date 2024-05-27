function setup() {
  createCanvas(windowWidth - 1, windowHeight - 1); // width x height
  background(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  fill(random(0, 255), random(0, 255), random(0, 255));

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 30);
    rect(mouseX - 10, mouseY - 10, 15, 30);
  }
}
