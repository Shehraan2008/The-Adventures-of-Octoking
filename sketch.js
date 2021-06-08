let gameState = 0;
let backgroundImg;
let form;
let octocat, octopus, octocatAni, octopusAni;

// Loading Image Assets.
function preload(params) {
  // Animaitons
  octocatAni = loadAnimation(
    "./app/assets/octocat/cat1.png",
    "./app/assets/octocat/cat2.png"
  );

  octopusAni = loadAnimation(
    "./app/assets/octopus/octopus1.png",
    "./app/assets/octopus/octopus2.png"
  );

  // Images.
  backgroundImg = loadImage("./app/assets/background/startBg.jpeg");

  // Audios
}

function setup(params) {
  const canvas = createCanvas(1450, 630);

  // The Sprites
  octocat = createSprite(200, 450, 50, 50);
  octocat.addAnimation("octopus_moving", octocatAni);
  octocat.scale = 0.4;

  octopus = createSprite(1200, 450, 50, 50);
  octopus.addAnimation("octopus_moving", octopusAni);
  octopus.scale = 2;

  // Main game
  form = new Form();
  form.display();
}

function draw(params) {
  // background("beige");
  background(backgroundImg);

  drawSprites();
}
