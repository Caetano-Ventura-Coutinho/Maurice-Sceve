let imagens = ['img/slideshow1.png', 'img/slideshow2.png', 'img/slideshow3.png'];
let Index = 0;
let time = 5000;

function slideShow() {

    document.getElementById('slideshow').src = imagens[Index];
    Index++;

     if (Index == imagens.length) {
    Index = 0;
  }

  setTimeout('slideShow()', time);
}

slideShow();

