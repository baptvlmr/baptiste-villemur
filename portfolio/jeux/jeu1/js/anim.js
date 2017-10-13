// Global variables
var canvas, stage;

// Variables des chemins des images
var img, bgImg, kImg, dImg;

// Variables pour le chargement
var nbElemLoaded = 0;
var nbElemScene = 4;

// Variables des objets
var hero, key, door, gameTxt, myPlatform;

// Variables de direction
var left, right;

// Déplacement en y
var vy = 0;

// Déplacement en x
var vx = 0;

// Gravité
var gravity = 2;

// Variable pour le saut
var jumping = false

// Variable indiquant si le héros est dans les air(true)
var inAir = false;

// Variable permettant d'animer le héros
var animHero = false;

// Variable permettant de charger les éléments sur la scène
var loaded = 0;

// Variable pour connaître le centre du hero
var heroCenter;

// Variable pour rejouer
var replay = true;

// Variable savoir si la clé est récupérée
var gotKey;

var hitbox;

// Variables pour les plateformes
platformsX = [40, 220, 320, 580, 700, 760, 760];
platformsY = [460, 380, 300, 250, 550, 350, 450];
platformsW = [300, 100, 180, 260, 260, 100, 100];

var platforms = new Array();

// Variable pour les caisses
var crates = new Array();


// Init
function init() {

    // Create stage
    stage = new createjs.Stage('stage');
    
    // Loading images
    bgImg = new Image();
    bgImg.src = "img/scene.jpg";
    bgImg.onload = loadAssets;

    kImg = new Image();
    kImg.src = "img/key.png";
    kImg.onload = loadAssets;

    dImg = new Image();
    dImg.src = "img/door.jpg";
    dImg.onload = loadAssets;

    hImg = new Image();
    hImg.src = "img/hero.png";
    hImg.onload = loadAssets;
    

    // Listen to tick
    createjs.Ticker.addEventListener("tick", tick);

}


function play() {
    
    // Adding background
    bg = new createjs.Bitmap(bgImg);
    stage.addChild(bg);
    
    
    // Adding key
    key = new createjs.Bitmap(kImg);
    
    key.x = 890;
    key.y = 490;
    
    stage.addChild(key);
    
    
    // Adding door
    door = new createjs.Bitmap(dImg);
    
    door.x = 130;
    door.y = 385;
    
    stage.addChild(door);
    
    
    // Adding hero
    hero = new Hero(hImg);
    
    hero.x = 160;
    hero.y = 385;
    
    stage.addChild(hero);
    
    hero.gotoAndPlay('idle');
    
    
    // Adding platforms
    for(var i=0; i < platformsW.length; i++) {
    
        myPlatform = new Platform(platformsW[i],25);
        
        myPlatform.x = platformsX[i];
        myPlatform.y = platformsY[i];
        
        stage.addChild(myPlatform);
        platforms.push(myPlatform);
    }
    
    
    // Adding crates
    for(var i = 0; i < 5; i++ ) {
        
        var crate = new Crate();
        
        crate.x = stage.canvas.width - stage.canvas.width * Math.random();
        crate.y = -200 + 200 * Math.random();
        
        stage.addChild(crate);
        crates.push(crate);
        
    }

    
    // Listen to keyboard
    window.addEventListener( 'keydown', handleKeyDown );
    window.addEventListener( 'keyup', handleKeyUp );
    
}


// Run
window.onload = init;


// Tick
function tick(e) {
    
    heroCenter = hero.y - 40;
    
    // Update stage
    stage.update();
    
    if(!e.paused) {
        
        // Move
        move();

        // All collisions
        allCollisions();
        
        // Reset crates if all are out stage
        cratesOutStage = checkCratesOutStage();
        if(cratesOutStage) { resetCrates(); };
        
    }
    
}


// Handle key down
function handleKeyDown(e) {
    
    var key = e.keyCode;
    
    if( key == 37 ) { // Left arrow
        
        left = true;
        
    }else if( key == 39 ) { // Right arrow
        
        right = true;
        
    }else if( key == 32 || key == 38 ) { // Space
        
        jump();
        
    }
    
}


// Handle key down
function handleKeyUp(e) {
    
    var key = e.keyCode;
    
    if( key == 37 ) { // Left arrow
        
        left = false;
        animHero = false;
        hero.gotoAndPlay('idle');
        
    }else if( key == 39 ) { // Right arrow
        
        right = false;
        animHero = false;
        hero.gotoAndPlay('idle');
        
    }
    
}


// Move
function move() {
    
    // Move right and left
    if(left || right) {
        
        if(left) {
            
            if( !animHero && !inAir ){
                hero.scaleX = -1;
            }

            vx = -5;

        }else if(right) {

            vx = 5;
            
            if( !animHero && !inAir ){
                hero.scaleX = 1;
            }

        }

        if( !animHero && !inAir && !jumping ) {
            hero.gotoAndPlay("walk");
            animHero = true;
        }
        
    }else {
        
        vx = vx*0.5;
        
    }

    hero.x += vx;
    
    
    // Gravity
    vy += gravity;
    
    if( inAir ) {
        
        hero.y += vy;
        
    }
    
}


// Jump
function jump() {
    
    if( !jumping && !inAir ) {
        
        hero.gotoAndPlay('jump');
        hero.y -= 20;
        animHero = false;
        vy = -25;
        jumping = true;
        
    }
    
}


// All collisions
function allCollisions() {
    
    inAir = true;
    
    // Platforms collisions
    platforms.forEach( function( onePlatform ) {
        if( hero.y >= onePlatform.y && hero.y <= (onePlatform.y+onePlatform.height) &&  hero.x > onePlatform.x && hero.x < (onePlatform.x + onePlatform.width) && vy >= 0 ) {

            hero.y = onePlatform.y;
            vy = 0;
            inAir = false;

            if( jumping ) {

                jumping = false;
                hero.gotoAndPlay('idle');

            }

        }
        
    });
    
    
    // Crates collisions
    crates.forEach( function( oneCrate ) {
        
        oneCrate.y += 5;
        
        if( collisionHero(oneCrate.x, oneCrate.y, 20) ) { gameOver(); }
        
    });
    
    
    // Hero falling in void
    if(hero.y > stage.canvas.height + 80) {
        gameOver();
    }
    
    
    // Hero and key collision
    keyCollision = collisionHero(key.x, key.y, 20);
    if(keyCollision) {
        stage.removeChild(key);
        gotKey = true;
    }
    
    
    // Hero and door collision
    doorCollision = collisionHero(door.x, door.y, 20);
    if(doorCollision && gotKey) {
        stage.removeChild(door);
        nextLevel();
    }
    
}


// Game Over
function gameOver() {
    
    // Pause the ticker
    createjs.Ticker.paused = true;
    
    
    // Game Over text
    var GOText = new createjs.Text('Game over...', '40px Arial', '#000');
    
    GOText.x = stage.canvas.width / 2 - 100;
    GOText.y = stage.canvas.height / 2 + 20;
    
    stage.addChild(GOText);
    
    // Create replay button
    var replayBtn = new createjs.Container();
    
    // Button background
    var replayBg = new createjs.Shape();
    
    replayBg.graphics.beginFill('#000');
    replayBg.graphics.drawRect(0, 0, 100, 30);
    replayBg.graphics.endFill();
    
    replayBtn.addChild(replayBg);
    
    // Button text
    var replayText = new createjs.Text('Replay', '20px Arial', '#fff');
    
    replayText.x = 17;
    replayText.y = 4;
    
    replayBtn.addChild(replayText);
    
    // Display replay button
    replayBtn.x = stage.canvas.width / 2 - 50;
    replayBtn.y = stage.canvas.height / 2 + 60;
    
    stage.addChild(replayBtn);
    
    replayBtn.addEventListener('click', function(){
       
        jumping = false;
        animHero = false;
        inAir = true;
        gotKey = false;
        vy = 0;
        
        stage.addChild(key);
        stage.addChild(door);
        
        stage.removeChild(hero);
        hero.x = 160;
        hero.y = 385;
        stage.addChild(hero);
        
        resetCrates();
        
        stage.removeChild(GOText);
        stage.removeChild(replayBtn);
        
        createjs.Ticker.paused = false;
        
    });
    
}


// Next Level
function nextLevel() {
    
    // Pause the ticker
    createjs.Ticker.paused = true;
    
    
    // Win text
    var WText = new createjs.Text('You won !', '40px Arial', '#000');
    
    WText.x = stage.canvas.width / 2 - 100;
    WText.y = stage.canvas.height / 2 + 20;
    
    stage.addChild(WText);
    
    // Create replay button
    var nlBtn = new createjs.Container();
    
    // Button background
    var nlBg = new createjs.Shape();
    
    nlBg.graphics.beginFill('#000');
    nlBg.graphics.drawRect(0, 0, 123, 30);
    nlBg.graphics.endFill();
    
    nlBtn.addChild(nlBg);
    
    // Button text
    var nlText = new createjs.Text('Next level', '20px Arial', '#fff');
    
    nlText.x = 17;
    nlText.y = 4;
    
    nlBtn.addChild(nlText);
    
    // Display nl button
    nlBtn.x = stage.canvas.width / 2 - 70;
    nlBtn.y = stage.canvas.height / 2 + 60;
    
    stage.addChild(nlBtn);
    
    nlBtn.addEventListener('click', function(){
       
        jumping = false;
        animHero = false;
        inAir = true;
        gotKey = false;
        vy = 0;
        
        stage.addChild(key);
        stage.addChild(door);
        
        stage.removeChild(hero);
        hero.x = 160;
        hero.y = 385;
        stage.addChild(hero);
        
        resetCrates();
        
        stage.removeChild(WText);
        stage.removeChild(nlBtn);
        
        createjs.Ticker.paused = false;
        
    });
    
}


// Collision Hero
function collisionHero(xPos, yPos, Radius) {
    
    var distX = xPos - hero.x;
    var distY = yPos - heroCenter;
    var distR = Radius + 20;
    
    hitbox = new createjs.Shape();
    var g = hitbox.graphics;
    circle = g.beginFill('#f00').drawCircle(xPos, yPos, distR).endFill();
    
    stage.addChild(hitbox);
    stage.removeChild(hitbox);
    
    if (distX * distX + distY * distY <= distR * distR){
        return true;
    }
}


// Reset crates
function resetCrates() {
    
    crates.forEach( function(crate) {
        crate.x = stage.canvas.width - stage.canvas.width * Math.random();
        crate.y = -200 + 200 * Math.random();
    });
    
}


// Reset crates
function checkCratesOutStage() {
    
    var cratesOutStage = 0;
    crates.forEach( function(crate) {
        
        if(crate.y > stage.canvas.height) { cratesOutStage++; }
        
    });
    
    if( cratesOutStage == crates.length ) {
        return true;
    }
    
}



// Load assets
function loadAssets() {

    nbElemLoaded++;

    if (nbElemLoaded == nbElemScene) {

        play();

    }

}
