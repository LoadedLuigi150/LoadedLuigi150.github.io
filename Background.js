const background = document.createElement('img')
background.style.width = '490px';
background.style.height = '680px';
background.style.position = 'absolute';
background.src = 'Background.png';

const interval2 = setInterval(() => {
    background.style.transform = 'translateX('+ window.innerWidth/2 - (parseInt(background.style.width)/2) +'px)'
},10)

document.body.appendChild(background);
