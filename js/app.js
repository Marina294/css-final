// // ********** nav toggle ************
// // select button and links
// //CSS is already provided for this, don't have to worry about nav bar :)
// const navBtn = document.getElementById("nav-toggle");
// const links = document.getElementById("nav-links");
// // add event listener
// navBtn.addEventListener("click", () => {
//   links.classList.toggle("show-links");
// });


function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('line2').classList.toggle('line_4');
  document.getElementById('line3').classList.toggle('line_5');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );


