var image = new Image();
image.src = "/images/azul.png";

function process (stage) {
    this.container = new createjs.Container();
    this.bitmap = new createjs.Bitmap(image);
    this.container.x = 1000 * Math.random() | 0;
    this.container.y = 400 * Math.random() | 0;

    this.container.addChild(this.bitmap);

    this.borderNorth = new createjs.Shape();
    this.borderNorth.graphics.beginStroke("#000");
    this.borderNorth.graphics.setStrokeStyle(1);
    this.borderNorth.snapToPixel = true;
    //this.borderNorth.graphics.drawRect(0, 0, 200, 200);
    this.borderNorth.graphics.drawRect(0, 0, this.bitmap.getBounds().width, this.bitmap.getBounds().height);
    this.borderNorth.x = this.bitmap.x;
    this.borderNorth.y = this.bitmap.y;

    this.container.addChild(this.borderNorth);

    stage.addChild(this.container);

    this.container.on("mousedown", function (evt) {
        this.parent.addChild(this);
        this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    });
    // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    this.container.on("pressmove", function (evt) {
        this.x = evt.stageX + this.offset.x;
        this.y = evt.stageY + this.offset.y;
        // indicate that the stage should be updated on the next tick:
        stage.update();
    });
    this.borderNorth.on("rollover", function (evt) {
        console.log('entra');
        stage.update();
    });
    this.borderNorth.on("rollout", function (evt) {
        console.log('SAI');
        stage.update();
    });

};

/* function border (process) {
    this = new 
} */