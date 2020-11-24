class Dustbin {
    constructor (x,y,width,height,angle){
    var options = {
        restitution : 0,
        friction:1,
        density:1
        //isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,angle ,options)  ;
    this.width = width;
    this.height = height;
   
    World.add(world,this.body);
    Matter.Body.setAngle(this.body,angle);

    }
    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
      
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    }
    