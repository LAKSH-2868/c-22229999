class Block {
    constructor(x,y,w,h){
        var option = {
            isStatic:true,
            'density':1,
            'friction':2,
            'restitution':0
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,option);
        World.add(world,this.body)
    }
     
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}