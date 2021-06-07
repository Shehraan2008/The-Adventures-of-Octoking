let gameState = 0;
let form;

// Loading Image Assets.
function preload(params) {}

function setup(params) {
  const canvas = createCanvas(windowWidth - 20, windowHeight - 20);

  form = new Form();
  form.display();
}

function draw(params) {
  background(0);
}
