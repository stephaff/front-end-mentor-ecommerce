let btnIcon = document.querySelector('.icon-menu');

btnIcon.addEventListener('click', sliderBar);

function sliderBar(){
    document.querySelector('.slide-bar').classList.add('slide-bar-visible');
}

let btnClose = document.querySelector('.icon-close');

btnClose.addEventListener('click', sliderBarClose);

function sliderBarClose(){
    document.querySelector('.slide-bar').classList.remove('slide-bar-visible');
}

let imageMiniatures = document.querySelectorAll('.image-miniature');
imageMiniatures[0].classList.add('selected-image');
imageMiniatures[0].parentElement.classList.add('bordure');


imageMiniatures.forEach(imageMiniature => {imageMiniature.addEventListener('click', selectedImage);});

function selectedImage(){
    let image = '';
    let imagePathTab = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
    for(let i=0; i<imagePathTab.length; i++){   
        if(imagePathTab[i].substring(0,15)==this.id){
            image = imagePathTab[i];
        }
    }
    imageMiniatures.forEach(imageMiniature => {
        imageMiniature.classList.remove('selected-image');
        imageMiniature.parentElement.classList.remove('bordure');
    });
    this.classList.add('selected-image');
    this.parentElement.classList.add('bordure');
    let imageOrigin = document.querySelector('.main-left-image img');
    imageOrigin.src = 'images/' + image;
}


