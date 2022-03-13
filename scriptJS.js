
class Balle{
    dx;
    dy;
    x;
    y;
    color;
    rayonCercle;
    id;
    constructor(ID,SetPostiionX,SetPositionY,directionX,directionY){
        this.dx = directionX;
        this.dy = directionY;
        this.rayonCercle = 7;
        this.color = "#00FF00";
        this.x = SetPostiionX;
        this.y = SetPositionY;
        this.id= ID;
    }

    ChangeDirX(newDirX){
        this.dx = newDirX;
    }

    ChangeDirY(newDirY){
        this.dy = newDirY
    }

    Update(){
        x+= dx;
        y+= dy;
    }

}
