class Arco{
    constructor(x,y,largura,altura){
        this.imagem=loadImage("playerArcher.png")
        this.x=x
        this.y=y
        this.largura=largura
        this.altura=altura
        this.angulo=0
    }
    criar(){
        if(keyIsDown(LEFT_ARROW)&&this.angulo>-25){
            this.angulo--
        }
        if(keyIsDown(RIGHT_ARROW)&&this.angulo<25){
            this.angulo++
        }
        console.log(this.angulo)
       push ()
       imageMode(CENTER);
        translate (this.x,this.y)
        rotate (this.angulo)
        
        image (this.imagem,0,0,this.largura,this.altura)
       pop ()


    }
}