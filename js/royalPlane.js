function Royal(xPos, yPos, width, height, speed, isMoveLeft, isMoveRight, isFire) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;
    this.isFire = isFire;
    this.reload = RELOAD;
    this.reloadCount = 0;
    this.bullets = [];
}
Royal.prototype.show = function () {
    let royalPlaneImg = document.getElementById("royalPlaneImg");
    ctx.drawImage(royalPlaneImg, this.xPos, this.yPos, ROYAL_WIDTH, ROYAL_HEIGHT)
};
Royal.prototype.move = function() {
    this.show();
    if (this.isMoveLeft && this.xPos + this.width/2 - this.speed > 0) {
        this.xPos -= this.speed;
    } else if (this.isMoveRight && this.xPos + this.width/2 + this.speed < canvas.width) {
        this.xPos += this.speed;
    }
};

Royal.prototype.fire = function() {
    if (this.isFire) {
        this.reloadCount++;
        if (this.reloadCount >= this.reload) {
            let bullet = new Bullet(this.xPos + this.width / 2 - BULLET_WIDTH/2, this.yPos, BULLET_WIDTH, BULLET_HEIGHT);
            this.bullets.push(bullet);
            this.reloadCount = 0;
        }
    }
    for (let i = 0; i < this.bullets.length; i++) {
        if (this.bullets[i].yPos < 0) {
            this.bullets.splice(i, 1);
            i--;
        } else {
            this.bullets[i].fly();
            this.bullets[i].show();
        }
    }

};



    


