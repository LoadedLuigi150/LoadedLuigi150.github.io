//player creation
const player = document.createElement('div');
const playerImg = document.createElement('img');
player.style.width = '40px';
player.style.height = '106.6px';
player.style.position = 'absolute';
player.style.zIndex = 1000;
playerImg.style.width = '160px';
playerImg.style.height = '320px';
playerImg.style.imageRendering = 'pixelated';
player.style.contain = 'content';
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

let l = 0;
let deg = 0;
let frame = 0;
let lastcolum = 0;

//setting up animation
function setFrame(frameNum, animationName) {
    let colum = 0;
    if (animationName == 'walkDown') {
        colum = 0;
    }
    if (animationName == 'walkUp') {
        colum = -1;
    }
    if (animationName == 'walkRight') {
        colum = -2;
    }
    playerImg.style.transform = 'translate('+ frameNum * 40 +'px, '+ colum * 106.66 +'px)'
    return colum
}
const interval = setInterval(() => {
    if (l > 999) {
        l = 0;
        frame++;
    }
    l++
    if (frame > 4) {
        frame = 0;
    }
    if (speedX > 0) {
        if (lastcolum == 0 || lastcolum == -1) {
            frame = 0;
        }
        setFrame(frame, 'walkRight')
        deg = 0;
        lastcolum = -2;
    }
    if (speedY < 0) {
        if (lastcolum == 0 || lastcolum == -2) {
            frame = 0;
        }
        setFrame(frame, 'walkUp')
        lastcolum = -1
    }
    if (speedY > 0) {
        if (lastcolum == -1 || lastcolum == -2) {
            frame = 0;
        }
        setFrame(frame, 'walkDown')
        lastcolum = 0;
    }
    if (speedX < 0) {
        if (lastcolum == 0 || lastcolum == -1) {
            frame = 0;
        }
        setFrame(frame, 'walkRight');
        deg = 180
        lastcolum = -2;
    }
    posX += speedX;
    posY += speedY;
    player.style.transform = 'translate('+ posX +'px, '+ posY +'px) rotateY('+ deg +'deg)';
},10)
