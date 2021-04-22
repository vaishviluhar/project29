class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

                polygon = Bodies.circle(50, 200, 20);
                World.add(world, polygon);
        
                slingshot = new Slingshot(this.polygon, {x : 100, y : 200});
               World.add(world, this.sling);
        }
    
         attach(body){
         this.sling.bodyA = body;
         }
          fly(){
        this.sling.bodyA = null;
        }

        display(){
            imageMode(CENTER);
            image(polygonI, polygon.position.x, polygon.positiom.y, 40, 40);
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
        }
        }
