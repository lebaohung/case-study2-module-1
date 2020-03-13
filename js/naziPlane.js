let naziGroup = [];
function Nazi(xPos, yPos, width, height, speed) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.isLive = true;
    this.speed = speed;
}

Nazi.prototype.show = function () {
    let naziPlaneImg = document.getElementById("naziPlaneImg");
    ctx.drawImage(naziPlaneImg, this.xPos, this.yPos, NAZI_WIDTH, NAZI_HEIGHT);
};

Nazi.prototype.move = function() {
    this.yPos += this.speed;
}

function createNaziGroup(){
    let temSpeed = Math.random()*1.3 + 0.5;
    let temXPos = Math.random() * (canvas.width - NAZI_WIDTH - 1);
    let temYPos = Math.random() * -5 * canvas.height - NAZI_HEIGHT/2 ;
    let naziPlane = new Nazi(temXPos,temYPos,NAZI_WIDTH, NAZI_HEIGHT, temSpeed);
    naziGroup.push(naziPlane);
    naziGroup[i].show();
}

function attackedByNaziGroup() {
    for(i = 0; i < NUMBER_NAZI ; i++){
        createNaziGroup();
    }
}

attackedByNaziGroup();

function showNaziGroup(){
    for (let i = 0; i < naziGroup.length; i++) {
        naziGroup[i].move();
        naziGroup[i].show();

    }
}




