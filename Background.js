const background = document.createElement('img')
background.style.width = '490px';
background.style.height = '680px';
background.style.position = 'absolute';
background.style.left = '50%';
background.src = 'Background.png';

background.style.transform = 'translateX('+ window.innerWidth - (parseInt(background.style.width)/2) +'px)'

document.body.appendChild(background);
