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

let navbarCart = document.querySelector('.navbar-cart');

navbarCart.addEventListener('click', viewCart);

function viewCart(){
    cartContentDisplay();
    document.querySelector('.navbar-right-cart').classList.toggle('view-cart');
}

let boutonPlus = document.querySelector('.bouton-plus');

boutonPlus.addEventListener('click', increaseQuantity);

function increaseQuantity(){
    let quantity = this.previousElementSibling;
    quantity.innerHTML = parseInt(quantity.innerHTML)+1;
    console.log(quantity);
}

let boutonMoins = document.querySelector('.bouton-moins');

boutonMoins.addEventListener('click', decreaseQuantity);

function decreaseQuantity(){
    let quantity = this.nextElementSibling;
    if(parseInt(quantity.innerHTML)>0){
        quantity.innerHTML = parseInt(quantity.innerHTML)-1;
    }
}

let boutonCommande = document.querySelector('.command');

boutonCommande.addEventListener('click', passerCommande);

function passerCommande(){
    let quantiteCommande = document.querySelector('.quantite-commande');
    let quantity = document.querySelector('.quantity span');
    let cartQuantity = document.querySelector('.cart-quantity');
    cartQuantity.innerHTML = quantity.innerHTML;
    quantiteCommande.innerHTML = quantity.innerHTML;
    let cartPrice = document.querySelector('.cart-price');
    let cartSold = document.querySelector('.cart-sold');
    cartPrice.innerHTML = '$'+parseFloat(cartSold.innerHTML.substring(1, 7))*parseFloat(cartQuantity.innerHTML)+'.00';
    cartContentDisplay();
}

function cartContentDisplay(){
    let quantiteCommande = document.querySelector('.quantite-commande');
    let cartQuantity = document.querySelector('.cart-quantity');
    let cartEmpty = document.querySelector('.navbar-right-cart-content-empty');
    let cartFill = document.querySelector('.navbar-right-cart-content-fill');
    if(parseInt(cartQuantity.innerHTML)>0){
        cartEmpty.classList.remove('cart-empty');
        cartFill.classList.remove('cart-fill');
        cartEmpty.classList.add('cart-empty');
        cartFill.classList.add('cart-fill');
        quantiteCommande.classList.add('display-quantity');
        beep();
    }   
    else{
        cartEmpty.classList.remove('cart-empty');
        cartFill.classList.remove('cart-fill');
        cartEmpty.classList.add('cart-fill');
        cartFill.classList.add('cart-empty');
    }
}

let deleteButton = document.querySelector('.delete-button');

deleteButton.addEventListener('click', viderPanier);

function viderPanier(){
    let quantiteCommande = document.querySelector('.quantite-commande');
    let cartQuantity = document.querySelector('.cart-quantity');
    let quantity = document.querySelector('.quantity span');
    let cartEmpty = document.querySelector('.navbar-right-cart-content-empty');
    let cartFill = document.querySelector('.navbar-right-cart-content-fill');
    cartEmpty.classList.remove('cart-empty');
    cartFill.classList.remove('cart-fill');
    cartEmpty.classList.add('cart-fill');
    cartFill.classList.add('cart-empty');
    quantity.innerHTML = 0;
    cartQuantity.innerHTML = quantity.innerHTML;
    quantiteCommande.classList.remove('display-quantity');
    deleted();
}

function beep(){
    let monBeep = new Audio();
    monBeep.src = 'audio/alert.wav';
    monBeep.play();
}

function deleted(){
    let emptyTrash = new Audio();
    emptyTrash.src = 'audio/delete.wav';
    emptyTrash.play();
}

let buttonNext = document.querySelector('.button-next');

buttonNext.addEventListener('click', nextImage);
let count = 1;

function nextImage(){
    let imagePathTab = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
    let imageDisplay = document.querySelector('.main-left-image img');
    if(count<imagePathTab.length){
        imageDisplay.src = 'images/'+imagePathTab[count];
        count = count + 1;
        console.log(count);
        if(count == imagePathTab.length){
            buttonNext.classList.add('button-next-display');
        }
    }  
}

let buttonPrevious = document.querySelector('.button-previous');

buttonPrevious.addEventListener('click', previousImage);

function previousImage(){
    buttonNext.classList.remove('button-next-display');
    let imagePathTab = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
    let imageDisplay = document.querySelector('.main-left-image img');
    let tampon = count - 1;
    if(tampon > 0){
        imageDisplay.src = 'images/'+imagePathTab[tampon-1];
        count = count - 1;
    } 
}
