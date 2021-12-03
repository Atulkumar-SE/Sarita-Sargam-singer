//----------------menu button------------------

const navMenu = document.getElementById('nav_menu'),
toggleMenu = document.getElementById('toggle_menu'),
closeMenu = document.getElementById('close_menu')

// document.onclick = function(e){
//   if(e.target.id !== 'nav')
//   {
//     nav.classList.remove('active');
//   }
// }

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})



//-------------------------top button--------------------

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 722) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//------------------------music slider------------------------


let pennon = 0;

function contoller_btn(x){
    pennon = pennon + x;
    musicslide(pennon);
}

musicslide(pennon);

function musicslide(num){
  let slide = document.getElementsByClassName('music_slide');

    if(num == slide.length){
        pennon = 0;
        num = 0;
    }
    if(num < 0){
        pennon = slide.length-1;
        num = slide.length-1;
    }
  for(let y of slide){
      y.style.display = "none";
  }

    slide[num].style.display = "block";
}









//---------------------Video slider-----------------------


let flag = 0;

function contoller(x){
    flag = flag + x;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num){
  let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
  for(let y of slides){
      y.style.display = "none";
  }

    slides[num].style.display = "block";
}
