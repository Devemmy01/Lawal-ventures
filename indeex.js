// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// =====================================================================

const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal(`.home, .service, .contact`)
sr.reveal(`.homeimg, .service1, .cimg`, {delay:500})
sr.reveal(`.hpic1, .service2`, {delay: 900})