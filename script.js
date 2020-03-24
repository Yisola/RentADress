var slideIndex = 0;
var timeoutFunction;
const timeoutInterval = 3000;
// showSlideshow();

function plusSlides(n) {
  showParticularSlide(slideIndex += n);
}

function currentSlide(n) {
  showParticularSlide(slideIndex = n);
}


function showParticularSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  clearTimeout(timeoutFunction)
  timeoutFunction = setTimeout(showSlideshow,timeoutInterval)
}

function showSlideshow() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timeoutFunction = setTimeout(showSlideshow, timeoutInterval); // Change image every 2 seconds
}