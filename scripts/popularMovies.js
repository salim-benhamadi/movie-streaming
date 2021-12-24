//******************************** This page is done by salim ben hammadi ********************************

showMovies();
showMoviesTwo();

function showMovies() {
  var i, x;
  var slides = document.getElementsByClassName("myMovies");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = String(i * 230) + 'px'
  }

}


function showMoviesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("myMovies-two");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = String(i * 230) + 'px'
  }
}
