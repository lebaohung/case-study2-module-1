function Bullet(xPos, yPos, width, height ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.speed = BULLET_SPEED;
    this.show = function () {
        let bulletImg = document.getElementById("bulletImg");
        ctx.drawImage(bulletImg, this.xPos, this.yPos, this.width, this.height)
    }
    this.fly = function(){
        this.yPos -= this.speed;
    }
}
