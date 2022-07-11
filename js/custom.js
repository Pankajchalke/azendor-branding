
$('#fullpage').fullpage({
  css3: true,
  anchors: ['bannerSec', 'bannerSec1', 'bannerSec2', 'serviceSec', 'teamSection', 'clientsBox', 'testimonialsSec', 'caseStudies', 'contactSec', 'footer'],
  menu: '#menu',
  navigation: false,
  fadingEffect: true,
  keyboardScrolling: true,
  scrollingSpeed: 1500,
  slidesNavigation: false,
  scrollHorizontally: true,
  controlArrows: true,
  scrollOverflow: true,
  normalScrollElements: '#scrolldiv',
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  scrollBar : true,
  //responsiveWidth: 900,
  responsiveWidth: 1030,
  afterResponsive: function (isResponsive) { },
  afterLoad: function (anchorLink, index) {
    console.log(index);
    if (index == 1) {};
    if (index == 2) {};
  },
  onLeave: function (index, nextIndex, direction) {
    console.log(index, nextIndex, direction);
    if (index == 1) { };
    if (index == 2) { };
    if (index == 8 && nextIndex == 7) { };
  },
  

});





//service Slider 

$(".serviceSlider").slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 654,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});


// tabs toggle

jQuery(document).ready(function ($) {
  tab = $('.tabs h3 a');

  tab.on('click', function (event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');
  });
});

// $('.active').click(function(){
//   $("a").css("font-weight",500);
// })

// tabs slider

$('.tabs .tabsToggle').click(function () {
  $('.tabs .tabsToggle').removeClass('active');
  $(this).addClass('active');
  let indis = $('.tabs .tabsToggle').index(this);
  $('.tabs .bg').css('left', (120 * indis).toString() + "px");
  $('.tabs .bg a').css('left', (120 * indis).toString() + "px");

  var mQuery = window.matchMedia('(max-width: 768px)')
  if (mQuery.matches) {
    // Print a message to the console 
    $('.tabs .bg').css('left', (76 * indis).toString() + "px");
  }
  var mQuery = window.matchMedia('(max-width: 450px)')
  if (mQuery.matches) {
    // Print a message to the console 
    $('.tabs .bg').css('left', (60 * indis).toString() + "px");
  }
});


const mediaQueryone = window.matchMedia('(max-width: 768px)')
  if (mediaQueryone.matches) {
    // Print a message to the console 
    $(document).ready(function () {
      $(".content").slice(0, 6).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 8).slideDown();
        if ($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }
      });
    })
  }
  else{
    $(document).ready(function () {
      $(".content").slice(0, 8).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 8).slideDown();
        if ($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }
      });
    })
  }

  const mediaQuerytwo = window.matchMedia('(max-width: 768px)')
  if (mediaQuerytwo.matches) {
    // Print a message to the console 
    $(document).ready(function () {
      $(".contentOne").slice(0, 6).show();
      $("#loadMoretab").on("click", function (e) {
        e.preventDefault();
        $(".contentOne:hidden").slice(0, 8).slideDown();
        if ($(".contentOne:hidden").length == 0) {
          $("#loadMoretab").text("No Content").addClass("noContent");
        }
      });
      
    })
  }
  else{
    $(document).ready(function () {
      $(".contentOne").slice(0, 8).show();
      $("#loadMoretab").on("click", function (e) {
        e.preventDefault();
        $(".contentOne:hidden").slice(0, 8).slideDown();
        if ($(".contentOne:hidden").length == 0) {
          $("#loadMoretab").text("No Content").addClass("noContent");
        }
      });
      
    })
  }









const mediaQuerythree = window.matchMedia('(max-width: 768px)')
  if (mediaQuerythree.matches) {
    // Print a message to the console 
    $(document).ready(function () {
      $(".contentThree").slice(0, 6).show();
      $("#loadMorethree").on("click", function (e) {
        e.preventDefault();
        $(".contentThree:hidden").slice(0, 8).slideDown();
        if ($(".contentThree:hidden").length == 0) {
          $("#loadMorethree").text("No Content").addClass("noContent");
        }
      });
    
    })
  }
  else{
    $(document).ready(function () {
      $(".contentThree").slice(0, 8).show();
      $("#loadMorethree").on("click", function (e) {
        e.preventDefault();
        $(".contentThree:hidden").slice(0, 8).slideDown();
        if ($(".contentThree:hidden").length == 0) {
          $("#loadMorethree").text("No Content").addClass("noContent");
        }
      });
    
    })
  }



// Header JS

const menuLinks = document.querySelectorAll(".menu-items .menu-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((link) => {
      link.classList.remove("is-active");
    });
    link.classList.add("is-active");
  });
});


// testimonial JS

$('.testimonialsSlider').slick({
  centerMode: true,
  centerPadding: '17%',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1
      }
    }
  ]
});


const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
    const scroll = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;

    if (scrolled <= 1) {
        progressBar.style.height = 1 + "%";
    } else if (scrolled >= 2 && scrolled <= 99.9) {
        progressBar.style.height = scrolled + "%";
        
    } else if (scrolled === 100) {
        progressBar.style.height = scrolled + "%";
        //      Do something when reached 100% scroll
    
    }
};







/*$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;

   $("#progressbar").attr('value', position);

});
*/

//progress bar js
let progressSection = document.querySelector(".progress-bar");
    let x, y;

      window.addEventListener("mouseover", (e) => {
        x = e.clientX;
        y = e.clientY;
      });

      function updateProgressBar() {
        progressSection.style.transform = `transform(${x}px, ${y}px)`;
        progressBar.style.height = `${getScrollPercentage()}%`;
        requestAnimationFrame(updateProgressBar);
      }

      function getScrollPercentage() {
        return (
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
        );
      }
      updateProgressBar();


