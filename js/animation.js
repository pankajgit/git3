'use strict';
~ function() {
    //var sa = new SpriteAnimation();
    window.init = function() {
		

    }
    // ElementID,Image URL, Width, Height, Loop Count
	// let sa = new SpriteAnimation("myDiv","img/scissors.jpg",129,120,3);
	let sa = new SpriteAnimation("myDiv","img/sprites-cat-running.png",512,256,3);
	// let sa = new SpriteAnimation("myDiv","img/running_boy.png",165,320);
	sa.frameInput();		
}();
