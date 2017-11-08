var image = new Image();
image.src = "/images/azul.png";

function Process (stage) {
    this.stage = stage;
    this.container = new createjs.Container();
    this.bitmap = new createjs.Bitmap(image);
    this.container.x = stage.canvas.width * Math.random() | 0;
    this.container.y = stage.canvas.height * Math.random() | 0;

    this.container.addChild(this.bitmap);

    this.borders = new AllBorders(this);

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

};

Process.prototype.update = function() {
    this.stage.update();
};

function AllBorders (process) {
    this.borderNorth = new Border(process, 0, 0, 0);
    this.borderEast = new Border(process, process.bitmap.getBounds().width, 0, 90);
    this.borderSouth = new Border(process, process.bitmap.getBounds().width, process.bitmap.getBounds().height, 180);
    this.borderWest = new Border(process, 0, process.bitmap.getBounds().height, 270);

    process.container.addChild(this.borderNorth.shape);
    process.container.addChild(this.borderEast.shape);
    process.container.addChild(this.borderSouth.shape);
    process.container.addChild(this.borderWest.shape); 
}

function Border (process, translateX, translateY, rotation) {
    this.shape = new createjs.Shape();
    /* this.shape.graphics.beginStroke("#000");
    this.shape.graphics.setStrokeStyle(1);
    this.shape.snapToPixel = true; */
    this.shape.graphics.beginFill("#000").drawRect(0, 0, process.bitmap.getBounds().width, 5);
    this.shape.x = process.bitmap.x + translateX;
    this.shape.y = process.bitmap.y + translateY;
    this.shape.rotation = rotation;

    var radian = rotation*Math.PI/180;

    this.shape.normal = {};

    this.shape.normal.x =  Math.round(Math.sin(radian));
    this.shape.normal.y =  Math.round(Math.cos(radian));

    this.shape.normalString = '(' + this.shape.normal.x.toString() + ', ' + this.shape.normal.y.toString() + ')';

    //this.newRelationshipSquare = new NewRelationshipSquare(this, process);

    this.shape.on("rollover", function (evt) {
        console.log(this.normalString);
        process.update();
    });
    this.shape.on("rollout", function (evt) {
        console.log(this.graphics.command.w);
        console.log(this.graphics.command.h);
        process.update();
    });
}

function NewRelationshipSquare (border, process) {
    this.shape = new createjs.Shape();
    this.shape.visible = true;
    this.shape.graphics.beginFill("#FFF").drawRect(0, 0, 5, 5);

    this.shape.x = border.shape.x;
    this.shape.y = border.shape.y;

    this.shape.normal = border.shape.normal;

    process.container.addChild(this.shape);
}