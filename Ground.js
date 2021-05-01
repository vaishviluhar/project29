class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      Matter.Bodies.polygon(x, y, sides, radius);
      this.sides = sides;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.sides, this.radius);
    }
  };
