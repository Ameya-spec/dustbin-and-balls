class Paper{
constructor(x,y,angle ){
    var options = {
     isStatic: false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.image = loadImage("sprites/paper.png");
this.body = Bodies.circle (x,y,30,options);
this.radius=30;

World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("grey");
    ellipseMode(RADIUS);
    circle(0,0,this.radius);
    pop();
    
}
}