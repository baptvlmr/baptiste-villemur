(function (window)  {
    function Hero(imgHero)  {
        this.initialize(imgHero);
    }
    Hero.prototype =  new  createjs.Sprite();
    Hero.prototype.Sprite_initialize =  Hero.prototype.initialize;
    Hero.prototype.initialize =   function (imgHero)  {
        var  data = {
            images:  [imgHero],
            frames:  {
                width:  60,
                 height:  85,
                 regX:  29,
                 regY:  80
            },
            animations:  {
                walk:  [0,  19,  "walk"],
                 
                idle:  [20,  20, "idle"],
                 
                jump:  [21,  21, "jump"]
            }
        };
        var  spriteSheet =  new  createjs.SpriteSheet(data);
        this.constructor(spriteSheet);
    }
    window.Hero =  Hero;
} (window));
