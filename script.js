!function() {

window.addEventListener('scroll', function() {
  requestAnimationFrame(function() {
    var threshold = window.innerHeight / 2;

    if (window.scrollY > threshold) {
      document.body.classList.add('is-scrolling')
    } else {
      document.body.classList.remove('is-scrolling')
    }
  });
});

}();
