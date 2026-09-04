//player creation
const player = document.createElement('div');
const playerImg = document.createElement('img');
player.style.width = '160px';
player.style.height = '320px';
player.style.position = 'absolute';
player.style.zIndex = 1000;
playerImg.style.width = '160px';
playerImg.style.height = '320px';
playerImg.src = 'StacyWalkAnimaton.png';

player.appendChild(playerImg);
document.body.appendChild(player);

//declare variables
let speed = 3;
let speedX = 0;
let speedY = 0;
let posX = 0;
let posY = 0;
let direction = 'n';

//controller
document.addEventListener('keydown', function (e) {
    if (e.key == 'w') {
        speedY = -1 * speed;
    }    
    else if (e.key == 's') {
        speedY = 1 * speed;
    }    
    if (e.key == 'a') {
        speedX = -1 * speed;
    }    
    else if (e.key == 'd') {
        speedX = 1 * speed;
    }
})
document.addEventListener('keyup', function(e) {
    if (e.key == 'a' || e.key == 'd') {
        speedX = 0;
    }
    if (e.key == 'w' || e.key == 's') {
        speedY = 0;
    }
})

const interval = setInterval(() => {
    posX += speedX;
    posY += speedY;
    player.style.transform = 'translate('+ posX +'px, '+ posY +'px)';
},10)
