//player creation
const player = document.createElement('div');
const playerImg = document.createElement('img');
player.style.width = '50px';
player.style.height = '50px';
player.style.position = 'absolute';
player.style.zIndex = '1000';
player.style.left = '50%';
player.style.top = '50%';
playerImg.style.width = '50px';
playerImg.style.height = '50px';
playerImg.style.backgroundColor = 'red';

player.appendChild(playerImg);
document.body.appendChild(player);

//declar variables
let speed = 1;
let posX = 0;
let posY = 0;

//controller
document.addEventListner('keydown', function (e) {
    if (e.key == 'w') {
        posY -= speed;
    }    
    else if (e.key == 's') {
        posY += speed;
    }    
    else if (e.key == 'a') {
        posY -= speed;
    }    
    else if (e.key == 'd') {
        posY += speed;
    }
    player.style.transform = 'translate('+ posX +'px, '+ posY +'px)';
})
