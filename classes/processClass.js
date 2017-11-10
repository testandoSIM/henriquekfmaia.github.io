var image = new Image();
image.src = "/images/azul.png";


function Process (stage) {
    this.processImage = new ProcessImage(stage);
}

function ProcessImage (stage) {
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

ProcessImage.prototype.update = function() {
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
    this.shape.border = this;
    
    this.shape.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, process.bitmap.getBounds().width, 10);
    this.shape.x = process.bitmap.x + translateX;
    this.shape.y = process.bitmap.y + translateY;
    this.shape.rotation = rotation;

    this.radian = rotation*Math.PI/180;

    this.shape.normal = {};
    
    this.shape.normal.x =  Math.round(Math.sin(this.radian));
    this.shape.normal.y =  Math.round(Math.cos(this.radian));

    this.shape.normalString = '(' + this.shape.normal.x.toString() + ', ' + this.shape.normal.y.toString() + ')';

    this.newRelationshipSquare = new NewRelationshipSquare(this, process);

    this.shape.on("rollover", function (evt) {
        this.border.newRelationshipSquare.shape.visible = true;
        process.update();
    });
    this.shape.on("rollout", function (evt) {
        this.border.newRelationshipSquare.shape.visible = false;
        process.update();
    });
}

function NewRelationshipSquare (border, process) {
    this.shape = new createjs.Shape();
    this.shape.border = border;
    this.shape.visible = false;

    this.shape.side = 5;

    
    if(border.shape.normal.x == 1){ this.shape.offset = -1}
    else if(border.shape.normal.y == -1){ this.shape.offset = 1}
    else { this.shape.offset = 0 }
    
    //this.shape.offset*
    this.shape.positionX = Math.round(Math.cos(border.radian)) * ((border.shape.graphics.command.w/2) - Math.round(Math.cos(border.radian))*this.shape.side/2) 
                            + Math.round(Math.sin(border.radian)) * this.shape.offset * this.shape.side;
    this.shape.positionY = Math.round(Math.sin(border.radian)) * ((border.shape.graphics.command.w/2) - Math.round(Math.sin(border.radian))*this.shape.side/2) 
                            + Math.round(Math.cos(border.radian)) * this.shape.offset * this.shape.side;
    
    this.shape.graphics.beginFill("#FFF").drawRect(this.shape.positionX, this.shape.positionY, this.shape.side, this.shape.side);

    this.shape.x = border.shape.x;
    this.shape.y = border.shape.y;

    this.shape.normal = border.shape.normal;

    process.container.addChild(this.shape);

    this.shape.on("rollover", function (evt) {
        process.update();
    });
    this.shape.on("rollout", function (evt) {
        process.update();
    });
}