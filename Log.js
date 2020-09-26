class Log {
    constructor(x, y, height,angle) {
      var options = {
        isStatic:true,
          'restitution':0.0,
          'friction':0.0,
          'density':0.1
      }
      this.image = loadImage("images/dustbingreen.png");
      this.body = Bodies.rectangle(x, y, 1, height, options);
      this.width = 5;
      this.height = height;
    

     // Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    
      display(){
        var pos=this.body.position;
        image(this.image,pos.x,pos.y,this.r,this.r);		
    

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
     rect(0, 0, this.width, this.height);
     pop();
    }
  };
  