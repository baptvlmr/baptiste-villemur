(function(window) {
	function Platform(w,h, fill) {
		this.width = w;
		this.height = h;
        this.fill = fill;
  		this.initialize();
	}
	Platform.prototype = new createjs.Container();
	Platform.prototype.platformBody = null;	
	// constructor:
	Platform.prototype.Container_initialize = Platform.prototype.initialize;	//unique to avoid overiding base class
	
	Platform.prototype.initialize = function() {
		this.Container_initialize();
		this.platformBody = new createjs.Shape();
		this.addChild(this.platformBody);
		this.makeShape();	
	}	
	// public methods:
	Platform.prototype.makeShape = function() {
		//draw body
		var g = this.platformBody.graphics;
        if(this.fill) {
            g.beginFill('#438ad1').drawRect(0,0,this.width,this.height).endFill();
        }else {
            g.drawRect(0,0,this.width,this.height);
        }
	}
	window.Platform = Platform;
}(window));