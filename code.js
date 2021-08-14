var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["fa54e02d-3ec6-4bc2-8a46-84dbf102c0d1","b3a9bacb-b1e3-4d5c-8087-89449e03b066","638aa909-a0e0-4112-b15b-9ec781e2f260","474cb5a9-204e-4684-b9fc-82da7ba4c06b","849a0585-de11-408e-a29e-5224502f3f18","acd84bfb-d7de-4e47-a1ff-1b7537955ffc"],"propsByKey":{"fa54e02d-3ec6-4bc2-8a46-84dbf102c0d1":{"name":"wing_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"b3a9bacb-b1e3-4d5c-8087-89449e03b066":{"name":"ghost_standing_1","sourceUrl":null,"frameSize":{"x":70,"y":158},"frameCount":5,"looping":true,"frameDelay":12,"version":"Ed3PXmEVo83Emp3HGnCChilhYTISqEU5","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":210,"y":316},"rootRelativePath":"assets/b3a9bacb-b1e3-4d5c-8087-89449e03b066.png"},"638aa909-a0e0-4112-b15b-9ec781e2f260":{"name":"emoji_27_1","sourceUrl":"assets/api/v1/animation-library/gamelab/UL25W_73xH.9rkaveazuNDGGwhUtLHLj/category_emoji/emoji_27.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"UL25W_73xH.9rkaveazuNDGGwhUtLHLj","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/UL25W_73xH.9rkaveazuNDGGwhUtLHLj/category_emoji/emoji_27.png"},"474cb5a9-204e-4684-b9fc-82da7ba4c06b":{"name":"pink_monster_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bfxFC6lQDf81xfDtt202eXLh6u.CkcP6/category_fantasy/pink_monster.png","frameSize":{"x":242,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"bfxFC6lQDf81xfDtt202eXLh6u.CkcP6","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bfxFC6lQDf81xfDtt202eXLh6u.CkcP6/category_fantasy/pink_monster.png"},"849a0585-de11-408e-a29e-5224502f3f18":{"name":"gameplaywacky_13_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png","frameSize":{"x":400,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NYXAKV8lMtBFQ4CvUgBDjrGq5xJ8.AMN/category_germs/gameplaywacky_13.png"},"acd84bfb-d7de-4e47-a1ff-1b7537955ffc":{"name":"spike_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(190,40,250,3);
var boundary2 = createSprite(190,360,250,3);
var boundary3 = createSprite(67,140,3,200);
var boundary4 = createSprite(67,235,3,250);
var boundary5 = createSprite(313,145,3,210);
var boundary6 = createSprite(313,235,3,250);
var boundary7 = createSprite(41,170,50,3);
var boundary8 = createSprite(41,210,50,3);
var boundary9 = createSprite(337,210,50,3);
var boundary10 = createSprite(337,170,50,3);
var boundary11 = createSprite(18,190,3,40);
var boundary12 = createSprite(361,190,3,40);
  
  var dhilshith = createSprite(40,190,13,13);
  dhilshith.shapeColor = "green";
  
  var ghost1 = createSprite(100,130,10,10);
  ghost1.shapeColor = "red";
  var ghost2 = createSprite(215,130,10,10);
  ghost2.shapeColor = "red";
  var ghost3 = createSprite(165,250,10,10);
  ghost3.shapeColor = "red";
  var ghost4 = createSprite(270,250,10,10);
  ghost4.shapeColor = "red";
  
  ghost1.velocityY = 8;
  ghost2.velocityY = 8;
  ghost3.velocityY = -8;
  ghost4.velocityY = -8;
  
  var count = 0;
  
  playSound("sound123.mp3", true);

  
  

function draw() {
  background("white");
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  ghost1.bounceOff(boundary1);
  ghost1.bounceOff(boundary2);
  ghost2.bounceOff(boundary1);
  ghost2.bounceOff(boundary2);
  ghost3.bounceOff(boundary1);
  ghost3.bounceOff(boundary2);
  ghost4.bounceOff(boundary1);
  ghost4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    dhilshith.x = dhilshith.x + 2;
  }
  if(keyDown("left")){
    dhilshith.x = dhilshith.x - 2;
  }
  
  if(dhilshith.isTouching(boundary11)||
     dhilshith.isTouching(boundary12)||
     dhilshith.isTouching(ghost1)||
     dhilshith.isTouching(ghost2)||
     dhilshith.isTouching(ghost3)||
     dhilshith.isTouching(ghost4))
  {
     dhilshith.x = 40;
     dhilshith.y = 190;
     count = count + 1;
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
