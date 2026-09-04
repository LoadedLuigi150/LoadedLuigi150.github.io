const background = document.createElement('img')
background.style.width = '490px';
background.style.height = '680px';
background.style.position = 'absolute';
background.src = 'Background.png';

background.style.transform = 'translateX('+ window.innerWidth +'px)'

document.body.appendChild(background);
