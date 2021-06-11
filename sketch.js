// Player Status
let turnValue = "Octocat";
let playerHealth = 250;
let compHealth = 250;
let compPower = 100;
let plrPower = 100;
let gameState = 0;
let totalRounds = 0;

// Empty Variables for assets
let plrHealthBar, compHealthBar, plrPowerbar, compPowerBar;
let octocat, octopus, octocatAni, octopusAni;
let backgroundImg;

// Game Objects.
let playerMove, compMove, savedCompMove, turnAnc;
let atkBtn, defBtn, healBtn, burnAtk;
let form;

/*
 * Summary:
 * Parameters:
 * Return:
 */
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

/*
 * Summary    :
 * Parameters :
 * Return     :
 */
function setup(params) {
  const canvas = createCanvas(1450, 630);

  // The Sprites
  octocat = createSprite(200, 470, 50, 50);
  octocat.addAnimation("octopus_moving", octocatAni);
  octocat.scale = 0.4;

  octopus = createSprite(1200, 490, 50, 50);
  octopus.addAnimation("octopus_moving", octopusAni);
  octopus.scale = 2;

  compHealthBar = createSprite(1200, 100, compHealth, 30);
  compHealthBar.shapeColor = rgb(118, 196, 66);
  compHealthBar.visible = false;

  plrHealthBar = createSprite(200, 100, playerHealth, 30);
  plrHealthBar.shapeColor = rgb(118, 196, 66);
  plrHealthBar.visible = false;

  compPowerBar = createSprite(1240, 140, compPower * 1.7, 20);
  compPowerBar.shapeColor = rgb(57, 142, 224);
  compPowerBar.visible = false;

  plrPowerbar = createSprite(160, 140, plrPower * 1.7, 20);
  plrPowerbar.shapeColor = rgb(57, 142, 224);
  plrPowerbar.visible = false;

  // The DOM Elemtns
  atkBtn = createButton("ATTACK");
  atkBtn.class("nes-btn is-error");
  atkBtn.position(140, 290);
  atkBtn.hide();

  defBtn = createButton("DEFEND");
  defBtn.class("nes-btn is-warning");
  defBtn.position(270, 290);
  defBtn.hide();

  healBtn = createButton("HEAL");
  healBtn.class("nes-btn is-success");
  healBtn.position(400, 290);
  healBtn.hide();

  burnAtk = createButton("SPECIAL TALENT: POISON");
  burnAtk.class("nes-btn is-disabled");
  burnAtk.position(130, 230);
  burnAtk.hide();

  turnAnc = createElement("h3", `Current Turn: ${turnValue}`);
  turnAnc.class("nes-text is-primary");
  turnAnc.position(550, 100);
  turnAnc.hide();

  // Main game
  form = new Form();
  form.display();
}

/*
 * Summary:
 * Parameters:
 * Return:
 */
function draw(params) {
  background(backgroundImg);

  if (gameState === 1) {
    // Making Hidden Objects Visible
    atkBtn.show();
    defBtn.show();
    healBtn.show();
    burnAtk.show();
    turnAnc.show();
    compHealthBar.visible = true;
    compPowerBar.visible = true;
    plrHealthBar.visible = true;
    plrPowerbar.visible = true;

    if (turnValue === "Octopus") {
      atkBtn.class("nes-btn is-disabled");
      defBtn.class("nes-btn is-disabled");
      healBtn.class("nes-btn is-disabled");
      burnAtk.class("nes-btn is-disabled");
    } else {
      atkBtn.class("nes-btn is-error");
      defBtn.class("nes-btn is-warning");
      healBtn.class("nes-btn is-success");
      burnAtk.class("nes-btn is-primary");
    }

    if (turnValue === "Octocat") {
      healBtn.mousePressed(() => {
        console.log("Heal Successfull");
      });

      atkBtn.mousePressed(() => {
        console.log("Attack Successfull");
      });

      defBtn.mousePressed(() => {
        console.log("Defense Successfull");
      });
    }

    if (octocat.x < 300) {
      octocat.velocityX = 3;
    } else {
      octocat.velocityX = 0;
    }

    if (octopus.x > 1000) {
      octopus.velocityX = -3;
    } else {
      octopus.velocityX = 0;
    }
  }

  drawSprites();
}
