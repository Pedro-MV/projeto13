class Flecha{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,10,{isStatic:true})
        World.add(world,this.body)
        this.imagem=loadImage("arrow.png")
    }
    criar(){
        var pos=this.body.position
        image (this.imagem,pos.x,pos.y,50,10)
    }
    shoot(){
        var angulo =arco.angulo
        angulo *=Math.PI/180
        var v=p5.Vector.fromAngle(angulo)
        v.mult(90/Math.PI)

       Body.setStatic(this.body, false)
        Body.setVelocity(this.body,{x:v.x, y:v.y})
    }
}