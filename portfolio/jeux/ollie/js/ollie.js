// Global variables
var canvas, stage;

// Variables des chemins des images
var sImg, gImg;

// Variables pour le chargement
var nbElemLoaded = 0;
var nbElemStage = 2;

// Variables des objets
var skater, ground;
var obstacles = [];

// Déplacement en y
var vy = 0;

// Gravité
var gravity = 1;

// Variable pour le saut
var ollying = false;

// Variable pour la charge du ollie
var ollieCharge = 0;

// Variable pour le texte du ollie
var ollieText;

// Variable indiquant si le héros est dans les air(true)
var inAir = true;

// Variable de la vitesse des obstacles
var obsSpeed = 12;

// Variable de la vitesse des obstacles
var obsInterval;

// Variable permettant d'animer le héros
var animStage = false;

// Variable pour connaître le centre du skater
var skaterCenter = 40;

// Variable pour rejouer
var replay = true;

var hitbox;

// Init
function init() {

    // Create stage
    stage = new createjs.Stage('ollie');

    // Set 60FPS
    createjs.Ticker.setFPS(40);

    // Loading images
    sImg = new Image();
    sImg.src = "img/skater.png";
    sImg.onload = loadAssets;

    // Loading images
    gImg = new Image();
    gImg.src = "img/ground.png";
    gImg.onload = loadAssets;


    // Listen to tick
    createjs.Ticker.addEventListener("tick", tick);

}


function play() {

    // Adding background
    ground = new createjs.Bitmap(gImg);
    stage.addChild(ground);

    ground.x = 0;
    ground.y = 382;


    // Adding skater
    skater = new Skater(sImg);
    skater.bounds = skater.getBounds();

    skater.x = 200;
    skater.y = 200;

    stage.addChild(skater);
    skater.gotoAndPlay('idle');


    // Adding obstacles
    addObstacles();

    // Listen to keyboard
    window.addEventListener( 'keydown', handleKeyDown );
    window.addEventListener( 'keyup', handleKeyUp );

}


// Run
window.onload = init;


// Tick
function tick(e) {

    if (typeof skater !== 'undefined') {

        // Listen to keyboard
        window.addEventListener( 'keydown', handleKeyDown );
        window.addEventListener( 'keyup', handleKeyUp );

        // ollieNumber();

        // Update stage
        stage.update();

        if (!e.paused) {

            // Move
            move();

            // All collisions
            allCollisions();

        }
    }
}


// Handle key down
function handleKeyDown(e) {

    var key = e.keyCode;

    if (key == 32 || key == 38) { // Space

        chargeOllie();

    }

}


// Handle key down
function handleKeyUp(e) {

    var key = e.keyCode;

    if (key == 32 || key == 38) { // Space

        ollie();

    }

}


// Move
function move() {

    if (inAir) {

        // Gravity
        vy += gravity;

        skater.y += vy;

    }

}


// chargeOllie
function chargeOllie() {

    if (!ollying && !inAir) {

        ollieCharge++;

    }

}


// Ollie
function ollie() {

    if (!ollying && !inAir) {

        // skater.gotoAndPlay('ollie');

        if (ollieCharge >= 9) {

            console.log('ollie 3');
            skater.y -= 15;
            vy = -18;

        } else if (ollieCharge >= 2) {

            console.log('ollie 2');
            skater.y -= 12;
            vy = -15;

        } else if (ollieCharge >= 1) {

            console.log('ollie 1');
            skater.y -= 7;
            vy = -10;

        }
        ollying = true;
        ollieCharge = 0;
        stage.removeChild(ollieText);

    }

}


// All collisions
function allCollisions() {

    inAir = true;

    // Ground collision
    if (skater.y >= ground.y) {

        skater.y = ground.y;
        vy = 0;
        inAir = false;

        if (ollying) {

            ollying = false;
            skater.gotoAndPlay('idle');

        }

    }


    // Obstacles collisions
    obstacles.forEach(function (obstacle) {

        obstacle.x -= obsSpeed;

        if ( collisionSkaterObstacle( obstacle.x, obstacle.y, obstacle.getBounds().width, obstacle.getBounds().height ) ) {
            gameOver();
        }

    });

}


// ollie number
function ollieNumber() {

    switch( ollieCharge ) {

        case 9:

            ollieText = new createjs.Text('x3', '40px Arial', '#000');
            stage.removeChild(ollieText);

            ollieText.x = stage.canvas.width - 50;
            ollieText.y = 20;

            stage.addChild(ollieText);
            break;

        case 2:

            ollieText = new createjs.Text('x2', '40px Arial', '#000');
            stage.removeChild(ollieText);

            ollieText.x = stage.canvas.width - 50;
            ollieText.y = 20;

            stage.addChild(ollieText);
            break;

        case 1:

            ollieText = new createjs.Text('x1', '40px Arial', '#000');
            stage.removeChild(ollieText);

            ollieText.x = stage.canvas.width - 50;
            ollieText.y = 20;

            stage.addChild(ollieText);
            break;

        /*default:
            console.log(ollieCharge);*/

    }

}


// Game Over
function gameOver() {

    // Pause the ticker
    createjs.Ticker.paused = true;


    // Game Over text
    var GOText = new createjs.Text('Game over...', '40px Arial', '#000');

    GOText.x = stage.canvas.width / 2 - 100;
    GOText.y = stage.canvas.height / 2 - 20;

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
    replayBtn.y = stage.canvas.height / 2 + 30;

    stage.addChild(replayBtn);

    replayBtn.addEventListener('click', function () {

        resetGame();

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

    nlBtn.addEventListener('click', function () {

        resetGame();

        stage.removeChild(WText);
        stage.removeChild(nlBtn);

        createjs.Ticker.paused = false;

    });

}


// Collision skater
function collisionSkaterObstacle(objectX, objectY, objectW, objectH) {

    var obstacle = {};
    obstacle.x      = objectX;
    obstacle.y      = objectY;
    obstacle.width  = objectW;
    obstacle.height = objectH;


    var hitFromTop  = skater.y > obstacle.y && obstacle.x <= skater.x && obstacle.x > skater.x - skater.getBounds().width;
    var hitFromLeft = skater.x <= obstacle.x + obsSpeed/2 && skater.x >= obstacle.x - obsSpeed/2 && !(skater.y < obstacle.y + obstacle.height);


    if ( hitFromTop || hitFromLeft ) {
        console.log(hitFromTop);
        console.log(hitFromLeft);
        return true;
    }else if( hitFromLeft ) {
        console.log('hitFromLeft');
    }else if( hitFromTop ) {
        console.log('hitFromTop');
    }
}


// Remove obstacles out of stage
function removeCratesOutStage() {

    obstacles.forEach(function (obstacle) {

        if ( obstacle.x < - obstacle.getBounds().width + 10 ) {
            stage.removeChild(obstacle);
        }

    });

}


// Adding obstacles
function addObstacles() {

    obsInterval = setInterval(function () {

        var obstacle = new Obstacle();

        if( obstacle.getBounds() !== null && typeof obstacle !== 'undefined' ) {
            obstacle.x = stage.canvas.width + 100 * Math.random();
            obstacle.y = ground.y - obstacle.getBounds().height;

            stage.addChild(obstacle);
            obstacles.push(obstacle)
        }

    }, 3000);

}


// Reset obstacles
function resetObstacles() {

    obstacles.forEach( function(obstacle) {
        stage.removeChild(obstacle);
    });
    obstacles = [];
    clearInterval(obsInterval);
    addObstacles();

}



// Reset the game
function resetGame() {

    ollying = false;
    inAir = true;
    vy = 0;

    stage.removeChild(skater);
    skater.x = 200;
    skater.y = 200;
    stage.addChild(skater);

    resetObstacles();

}


// Load assets
function loadAssets() {

    nbElemLoaded++;

    if (nbElemLoaded == nbElemStage) {

        play();

    }

}
