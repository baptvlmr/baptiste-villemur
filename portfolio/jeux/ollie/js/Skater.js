(function (window)  {
    function Skater(imgSkater)  {
        this.initialize(imgSkater);
    }
    Skater.prototype =  new  createjs.Sprite();
    Skater.prototype.Sprite_initialize =  Skater.prototype.initialize;
    Skater.prototype.initialize =   function (imgSkater)  {
        var  data = {
            images:  [imgSkater],
            frames:  {
                width:  79,
                height: 150,
                regX:   79,
                regY:   150
            },
            animations:  {
                idle:  [0,  0, "idle"]
            }
        };
        var  spriteSheet =  new  createjs.SpriteSheet(data);
        this.constructor(spriteSheet);
    }
    window.Skater =  Skater;
} (window));
