class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x,pos.y)
    
      rectMode(CENTER);
      fill(255,0,0);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  