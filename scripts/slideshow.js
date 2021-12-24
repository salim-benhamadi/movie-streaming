//******************************** This page is done by salim ben hammadi ********************************

var time = setInterval(timerSlideshow, 10000);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function timerSlideshow() {
  plusSlides(1);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  slides[0].style.right = '10%'
  slides[1].style.right = '-72%'
  slides[2].style.right = '92%'

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex - 1 == 0) {
    slides[0].style.right = '10%'
    slides[1].style.right = '-72%'
    slides[2].style.right = '92%'
  }

  if (slideIndex - 1 == 1) {
    slides[0].style.right = '92%'
    slides[1].style.right = '10%'
    slides[2].style.right = '-72%'
  }
  if (slideIndex - 1 == 0) {
    slides[0].style.right = '-72%'
    slides[1].style.right = '92%'
    slides[2].style.right = '10%'
  }
  dots[slideIndex - 1].className += " active";
}
