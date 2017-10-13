(function(window) {
    function Obstacle() {
        this.initialize();
    }
    Obstacle.prototype = new createjs.Container();

    Obstacle.prototype.img = new Image();
    // constructor:
    Obstacle.prototype.Container_initialize = Obstacle.prototype.initialize;	//unique to avoid overiding base class

    Obstacle.prototype.initialize = function() {

        var rdm = Math.random();

        if( rdm >= .8 ) {

            this.Container_initialize();
            var bmp = new createjs.Bitmap("img/car.png");
            this.type = 'car';
            this.addChild(bmp);

        }else if( rdm >= 1/3 ) {

            this.Container_initialize();
            var bmp = new createjs.Bitmap("img/ball.png");
            this.type = 'ball';
            this.addChild(bmp);

        }else {

            this.Container_initialize();
            var bmp = new createjs.Bitmap("img/rock.png");
            this.type = 'rock';
            this.addChild(bmp);

        }

    }
    window.Obstacle = Obstacle;
}(window));