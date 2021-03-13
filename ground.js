class Ground{
    constructor(x,y,w,h){
        var option = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = 5;
        this.body=Bodies.rectangle(x,y,w,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill("brown");
        rect(this.x,this.y,this.w,5);
        pop();
    }
}