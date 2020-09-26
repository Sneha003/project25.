      
      class Box {
        constructor(x, y,) {
          var options = {
            isStatic:false,
              'restitution':-1,
              'friction':0.1,
              'density':1.8
          }
          this.x=x;
          this.y=y;
          this.r=65
          this.image = loadImage("images/paper.png");
          this.body=Bodies.circle(this.x, this.y, 15, options)
          World.add(world, this.body);
         
          
        }
        display(){
          var paperpos=this.body.position;
          image(this.image,paperpos.x,paperpos.y,this.r,this.r);		
          
      
        }
      };
      
  
  
      
  
  