function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(0);  
  pillar1 = createSprite(250,265,20,250);
  wall1 = createSprite(290,300,50,175);
  wall2 = createSprite(345,300,50,175);
  wall3 = createSprite(400,300,50,175);
  wall4 = createSprite(455,300,50,175);
  pillar2 = createSprite(495,265,20,250);  
  ground = createSprite(375,400,400,10);
  roof = createSprite(373,155,210,100);
  tomb1 = createSprite(290,85,10,35);
  tomb2 = createSprite(345,85,10,35);
  tomb3 = createSprite(400,85,10,35);
  tomb4 = createSprite(455,85,10,35);
  pillar3 = createSprite(225,225,20,330);
  pillar4 = createSprite(520,225,20,330);
  tomb5 = createSprite(225,40,10,35);
  tomb6 = createSprite(520,40,10,35);
  drawSprites();
}