// Navbar Scroll Effect
window.addEventListener("scroll", function() {
  let navbar = document.querySelector('.navbar');
  if(window.pageYOffset > 0) {
    navbar.classList.add('scroll-navbar');
  }else {
    navbar.classList.remove("scroll-navbar");
  }
})

// AOS
AOS.init();

// Slider 

$(document).ready(function(){
    $('.sponsors-logos').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });

