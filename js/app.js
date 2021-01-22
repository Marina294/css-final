// ********** nav toggle ************
// select button and links
//CSS is already provided for this, don't have to worry about nav bar :)
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
