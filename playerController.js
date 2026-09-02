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
let speedX = 0;
let speedY = 0;
let posX = 0;
let posY = 0;
let direction = 'n';

//controller
document.addEventListener('keydown', function (e) {
    if (e.key == 'w') {
        speedY = -1;
    }    
    else if (e.key == 's') {
        speedY = 1;
    }    
    if (e.key == 'a') {
        speedX = -1;
    }    
    else if (e.key == 'd') {
        speedX = 1;
    }
    posX += speedX;
    posY += speedY;
    player.style.transform = 'translate('+ posX +'px, '+ posY +'px)';
})
document.addEventListener('keyup', function(e) {
    if (e.key == 'a' || e.key == 'd') {
        speedX = 0;
    }
    if (e.key == 'w' || e.key == 's') {
        speedY = 0;
    }
})
