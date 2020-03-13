let canvas = document.getElementById("mainGame");
let ctx = canvas.getContext("2d");
let royalPlane = new Royal(canvas.width / 2 - ROYAL_WIDTH / 2, canvas.height - ROYAL_HEIGHT - 10, ROYAL_WIDTH, ROYAL_HEIGHT, ROYAL_SPEED, false, false, false);
let isGameOver = false;
let score = 0;

function play(){
    document.addEventListener("keyup", function(event){
        switch(event.keyCode){
            case LEFT_KEY:
                royalPlane.isMoveLeft = false;
                break;
            case RIGHT_KEY:
                royalPlane.isMoveRight = false;
                break;
            case SPACE_KEY:
                royalPlane.isFire = false;
                break;
        }
    });
    document.addEventListener("keydown", function(event){
        switch(event.keyCode){
            case LEFT_KEY:
                royalPlane.isMoveLeft = true;
                break;
            case RIGHT_KEY:
                royalPlane.isMoveRight = true;
                break;
            case SPACE_KEY:
                royalPlane.isFire = true;
                break;
        }
    });
    document.addEventListener('keypress', function (event) {
        switch (event.keyCode) {
            case ENTER_KEY:
                startGame();
                break;
            case R_KEY:
                restart();
                break;
        }
    });
}

function bingo(bullet, nazi){
    let rightBullet = bullet.xPos + BULLET_WIDTH;
    let leftBullet = bullet.xPos ;
    let topBullet = bullet.yPos ;
    let bottomBullet = bullet.yPos + BULLET_HEIGHT;
    let rightNazi = nazi.xPos + NAZI_WIDTH;
    let leftNazi = nazi.xPos ;
    let topNazi = nazi.yPos ;
    let bottomNazi = nazi.yPos + NAZI_HEIGHT ;
    if(rightBullet < leftNazi || leftBullet > rightNazi || topBullet > bottomNazi || bottomBullet <topNazi){
        return false;
    } else {
        return true;
    }
}

function checkBingo() {
    for(i = 0; i < naziGroup.length; i++){
        for(let j = 0; j < royalPlane.bullets.length; j++){
            if(bingo(royalPlane.bullets[j], naziGroup[i])) {
                naziGroup[i].isLive = false;
                score ++;
            }
        }
        if (!naziGroup[i].isLive) {
            naziGroup.splice(i, 1);
        }

        if (naziGroup.length === 0) {
            createNaziGroup();
        }
    }
}
play();
royalPlane.show();
function startGame() {
    if(!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        showNaziGroup();
        royalPlane.move();
        royalPlane.fire();
        checkBingo();
        for(i = 0; i < naziGroup.length; i++){
           if(naziGroup[i].yPos + naziGroup[i].height > canvas.height){
               isGameOver = true;
           }
        }
        requestAnimationFrame(startGame);
    } else {
        alert("Game Over. Your score is " +  score);
    }

}
function restart() {
    location.reload();
}


