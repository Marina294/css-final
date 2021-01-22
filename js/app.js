// // ********** nav toggle ************

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


$('#manu a[href]').on('click', function(event) {
  $('.navToggle').trigger('click');
});