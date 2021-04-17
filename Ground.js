class Ground{
    constructor(x,y,width,height){

        var ground_option = {

            isStatic:true
          }
         this.ground=Bodies.rectangle(x,y,width,height,ground_option)

         this.width = width
         this.height = height

          World.add(world,this.ground) 

    }

    display(){
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}