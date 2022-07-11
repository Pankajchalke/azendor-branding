
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
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  scrollBar : true,
  responsiveWidth: 900,
  afterResponsive: function (isResponsive) { },
  afterLoad: function (anchorLink, index) {
    console.log(index);
    if (index == 1) { };
    if (index == 2) { };
  },
  onLeave: function (index, nextIndex, direction) {
    console.log(index, nextIndex, direction);
    if (index == 1) { };
    if (index == 2) { };
    if (index == 8 && nextIndex == 7) { };
  },
  /*var : myFullpage = new fullpage('#fullpage', {
    scrollOverflow: true,
    onScrollOverflow: function (section, slide, position, direction) {
      var params = {
        section: section,
        slide: slide,
        position: position,
        direction: direction
      };

      console.log("--- onScrollOverflow ---");
      console.log(params);
    }
  }),*/

});

// fullpage customization
$('#clientsBox').fullpage({
  sectionSelector: '.vertical-scrolling',
  normalScrollElements: '#scrolldiv',


});

$('#caseStudies').fullpage({
  sectionSelector: '.vertical-scrolling',
  normalScrollElements: '#scrolldiv'
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


// tabs slider

$('.tabs .tabsToggle').click(function () {
  $('.tabs .tabsToggle').removeClass('active');
  $(this).addClass('active');
  let indis = $('.tabs .tabsToggle').index(this);
  $('.tabs .bg').css('left', (120 * indis).toString() + "px");

  const mQuery = window.matchMedia('(max-width: 768px)')
  if (mQuery.matches) {
    // Print a message to the console 
    $('.tabs .bg').css('left', (60 * indis).toString() + "px");
  }
});




// load more 
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




