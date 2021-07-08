//function to display hide the footer
const hideFooter = () => {
    document.getElementById('footer').style.display = 'none';  
}

hideFooter();

//function to show the footer
const insertFooter = () => {
   document.getElementById('footer').style.display = 'block';
}

darkenBodyColor = ( ) => {
  document.querySelector('body').style.background = '#F5F7FA';
}

//copy to Clipboard Functions

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = 'https://www.windhillgrowers.com';
  document.body.appendChild(el);

  el.select();
  el.setSelectionRange(0,99999); //For mobile devices

  document.execCommand('copy');
  document.body.removeChild(el);
  nextQuestionButton.style.background = '#D3C2A7';
  nextQuestionButton.style.border = '3px solid #D3C2A7';
  nextQuestionButton.innerText = 'Link copied to clipboard';

}

const addCopyToClip = () => {
  let shareButton = document.querySelector('.nextQuestionButton');
  shareButton.addEventListener('click', copyToClipboard);
}

//celebratory animation display
const hurrayAnimation = () => {
  let animation = document.createElement('section');
  animation.setAttribute('class','hurrayAnimation');
  animation.innerHTML = '<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_wXxy5o.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" autoplay></lottie-player>';
  document.querySelector('#suggestionContainer').prepend(animation);
}

//hide the overlay manual
const hideOverlay = () => {
  let overlay = document.getElementById('overlay');
  overlay.style.visibility = "hidden";
}

//slideshow functions
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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
}