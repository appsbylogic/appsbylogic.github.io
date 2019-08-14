document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true

    });
  });

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
       