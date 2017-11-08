var app = angular.module('app');

app.controller('workflowController', function($scope) {
    var canvas, stage;
	var mouseTarget;	// the display object currently under the mouse, or being dragged
	var dragStarted;	// indicates whether we are currently in a drag operation
	var offset;
	var update = true;
	function init() {
		// create stage and point it to the canvas:
        canvas = document.getElementById("testCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		stage = new createjs.Stage(canvas);
		// enable touch interactions if supported on the current device:
		createjs.Touch.enable(stage);
		// enabled mouse over / out events
		stage.enableMouseOver(10);
		stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
		// load the source image:
		var image = new Image();
		image.src = "/images/laranja.png";
		image.onload = handleImageLoad;
	}
	function stop() {
		createjs.Ticker.removeEventListener("tick", tick);
	}
	function handleImageLoad(event) {
		var image = event.target;
		// create and populate the screen with random daisies:
		for (var i = 0; i < 10; i++) {
            var proc = new Process(stage);
		}
		stage.update();
	}
    init();
});