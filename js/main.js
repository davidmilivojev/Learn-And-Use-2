var scroll = document.getElementById('up');

$(document).ready(function(){
  //hamburger
  $('.nav-toggle').click(function(){
    $('.main-nav').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
  })
})
scroll.addEventListener('click', function(){
  window.scrollTo(0,0);
});
