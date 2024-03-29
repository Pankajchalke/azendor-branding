
const mediaQuery = window.matchMedia('(min-width: 920px)')
// Check if the media query is true
if (mediaQuery.matches) {
  if ($("#fullpage").length) {
    $("#fullpage").fullpage({
      css3: true,
      anchors: [
        "bannerSec",
        "bannerSec1",
        "bannerSec2",
        "serviceSec",
        "teamSection",
        "clientsBox",
        "testimonialsSec",
        "caseStudies",
        "contactSec",
        "footer",
      ],
      menu: "#menu",
      navigation: false,
      fadingEffect: true,
      keyboardScrolling: true,
      scrollingSpeed: 1500,
      slidesNavigation: false,
      scrollHorizontally: true,
      controlArrows: true,
      scrollOverflow: true,
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      scrollBar: true,
      responsiveWidth: 920,
      afterResponsive: function (isResponsive) { },
      afterLoad: function (anchorLink, index) {
        console.log(index);

        if (index == 1) {
          $("#myBtn").css("display", "none");
          $(".scroll-text").css("display", "block");
          $(".scroll-symbol").css("display", "block");
          $("a[class = 'scroll-icon']").prop("href", "#bannerSec1");
          $(".secOne a").addClass("is-active");
          $(".secTwo a").removeClass("is-active");


        }
        if (index == 2) {
          $("#myBtn").css("display", "block");
          $(".scroll-text").css("display", "block");
          $(".scroll-symbol").css("display", "block");
          $("a[class = 'scroll-icon']").prop("href", "#bannerSec2");
          $(".secOne a").addClass("is-active");
          $(".secTwo a").removeClass("is-active");


        }
        if (index == 3) {
          $(".scroll-text").css("display", "block");
          $(".scroll-symbol").css("display", "block");
          $("a[class = 'scroll-icon']").prop("href", "#serviceSec");
          $(".secOne a").addClass("is-active");
          $(".secTwo a").removeClass("is-active");


        }
        if (index == 4) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secOne a").removeClass("is-active");
          $(".secTwo a").addClass("is-active");
          $(".secThree a").removeClass("is-active");


        }
        if (index == 5) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secTwo a").removeClass("is-active");
          $(".secThree a").addClass("is-active");
          $(".secFour a").removeClass("is-active");


        }
        if (index == 6) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secThree a").removeClass("is-active");
          $(".secFour a").addClass("is-active");
          $(".secFive a").removeClass("is-active");

        }
        if (index == 7) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secFour a").removeClass("is-active");
          $(".secFive a").addClass("is-active");
          $(".secSix a").removeClass("is-active");


        }
        if (index == 8) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secFive a").removeClass("is-active");
          $(".secSix a").addClass("is-active");
          $(".secSeven a").removeClass("is-active");

        }
        if (index == 9) {
          $(".scroll-text").css("display", "none");
          $(".scroll-symbol").css("display", "none");
          $(".secSix a").removeClass("is-active");
          $(".secSeven a").addClass("is-active");

        }
      },

      onLeave: function (index, nextIndex, direction) {
        console.log(index, nextIndex, direction);
        if (index == 1) {
        }
        if (index == 2) {
        }
        if (index == 8 && nextIndex == 7) {
        }
      },
    });
  }

}



//service Slider

if ($(".serviceSlider").length) {
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
        breakpoint: 575,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}



if ($(".clientSlider").length) {
  $(".clientSlider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".imgclientBackarrow"),
    nextArrow: $(".imgclientForwardarrow"),
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

    ],

  });
}


$(".filter li").on('click', function () {
  var filter = $(this).data('filter');
  $(".clientSlider").slick('slickUnfilter');
  if (filter == 'brands') {
    $(".clientSlider").slick('slickFilter', '.brands');
  }
  else if (filter == 'agencies') {
    $(".clientSlider").slick('slickFilter', '.agencies');
  }
  else if (filter == 'all') {
    $(".clientSlider").slick('slickUnfilter');
  }
})


if ($(".casestudySlider").length) {
  $(".casestudySlider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".imgcaseBackarrow"),
    nextArrow: $(".imgcaseForwardarrow"),
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

    ],

  });
}


if ($(".solutionSlider").length) {
  $(".solutionSlider").slick({
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
      },
    ],
  });
}

if ($(".sectorsliderDesktop").length) {
  $(".sectorsliderDesktop").slick({
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: $(".imgsecBackarrow"),
    nextArrow: $(".imgsecForwardarrow"),
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
}
if ($(".sectorsliderMobile").length) {
  $(".sectorsliderMobile").slick({
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: $(".imgsecmblBackarrow"),
    nextArrow: $(".imgsecmblForwardarrow"),
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

if ($(".advantageSlider").length) {
  $(".advantageSlider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
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
      },
    ],
  });
}

// tabs toggle



// tabs slider

$(".tabs .tabsToggle").click(function () {
  $(".tabs .tabsToggle").removeClass("active");
  $(this).addClass("active");
  let indis = $(".tabs .tabsToggle").index(this);
  $(".tabs .bg").css("left", (120 * indis).toString() + "px");
  $(".tabs .bg a").css("left", (120 * indis).toString() + "px");

  var mQuery = window.matchMedia("(max-width: 768px)");
  if (mQuery.matches) {
    // Print a message to the console
    $(".tabs .bg").css("left", (76 * indis).toString() + "px");
  }
  var mQuery = window.matchMedia("(max-width: 450px)");
  if (mQuery.matches) {
    // Print a message to the console
    $(".tabs .bg").css("left", (60 * indis).toString() + "px");
  }
});



// Header JS

const menuLinks = document.querySelectorAll(".menu-items li a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((link) => {
      link.classList.remove("is-active");
    });
    link.classList.add("is-active");
  });
});

const menuLinksNew = document.querySelectorAll(".nav-links .mainLink .menuLink");

menuLinksNew.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinksNew.forEach((link) => {
      link.classList.remove("is-active");
    });
    link.classList.add("is-active");
  });
});



// mobile header active
$(function () {
  $("#sideMenu a").click(function () {
    $("#sideMenu a.active").removeClass("active");
    $(this).addClass("active");
  });
});

//show -hide mobile header
function hideSidebar() {
  document.getElementById("openSideMenu").checked = false;
}

var sideIconToggle = document.getElementById("sidebarContainer");

document.addEventListener("click", function (event) {
  if (!sidebarContainer.contains(event.target)) hideSidebar();
});






// testimonial JS
if ($(".testimonialsSlider").length) {
  $('.testimonialsSlider').slick({
    centerMode: true,
    arrows: true,
    prevArrow: $(".imgtestBackarrow"),
    nextArrow: $(".imgtestForwardarrow"),
    centerPadding: '35px',
    slidesToShow: 3,
    infinite: true,

    responsive: [
      {
        breakpoint: 575,
        settings: {
          infinite: true,
          centerMode: true,
          arrows: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
}

if ($(".testlegalSlider").length) {
  $(".testlegalSlider").slick({
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $(".imgtestlegalBackarrow"),
    nextArrow: $(".imgtestlegalForwardarrow"),
    slidesToShow: 4,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  });
}

if ($(".logosSlider").length) {
  $(".logosSlider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

// Progress bar Js

const progressBar = document.getElementById("progressbar");
progressBar.style.height = 1 + "%";

window.onscroll = () => {
  const scroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
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
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}
updateProgressBar();

// For Mobile view
let progressSectionMobile = document.querySelector(".progress-bar-mobile");

function updateProgressBarMobile() {
  progressSectionMobile.style.width = `${getScrollPercentageMobile()}%`;
  requestAnimationFrame(updateProgressBarMobile);
}

function getScrollPercentageMobile() {
  return (
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}
updateProgressBarMobile();

//Active menu for mobile view
const sections = document.querySelectorAll("section");
const menuList = document.querySelectorAll("#sideMenu .sideMenuInner li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 2.5) {
      current = section.getAttribute("id");
    }
  });
  menuList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});




// legal and branding top button mobile js
window.addEventListener('scroll', function (e) {
  const topSection = document.getElementById("topSec");
  const sectionHeight = topSection.clientHeight;
  const botton = document.getElementById("myBtn");
  const scrollSymbol = document.getElementById("scroll-symbol");
  const scrollText = document.getElementById("scroll-text");
  if (window.scrollY >= sectionHeight) {
    botton.style.visibility = "visible";
    scrollSymbol.style.visibility = "hidden";
    scrollText.style.visibility = "hidden";
  }
  else {
    botton.style.visibility = "hidden";
    scrollSymbol.style.visibility = "visible";
    scrollText.style.visibility = "visible";
  }
});

let button = document.getElementById("myButton");
let nav = document.getElementById("section1");
function toggle(visibility) {
  button.style.visibility = visibility;
}
window.addEventListener('scroll', function (e) {
  let navHeight = nav.clientHeight;
  let scrollHeight = window.scrollY;
  scrollHeight >= navHeight ? toggle("visible") : toggle("hidden");
});

// partner page and read more js starts

$(document).ready(function() {
  // Configure/customize these variables.
  var showChar = 220;  // How many characters are shown by default
  var ellipsestext = "";
  var moretext = "Read More <img src='https://azendor.com/wp-content/themes/azendor/images/legal/solution-arrow.svg'>";
  var lesstext = "Read Less <img src='https://azendor.com/wp-content/themes/azendor/images/legal/solution-arrow.svg'>";
  

  $('.more').each(function() {
      var content = $(this).html();

      if(content.length > showChar) {

          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);

          var html = c + '<span class="moreellipses">' + ellipsestext+ '<span class="mobileDots">...</span></span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

          $(this).html(html);
      }

  });

  $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
  });
});
// partner page and read more js ends

//Smooth scroll with offset for breadcrumbs
if (window.location.hash) {
  let hash = window.location.hash;
  if ($(hash).length) {
    $('html,body').animate({
      scrollTop: $(hash).offset().top - 120
    }, 200, '');
  }
}

/*Legal header new bhavika starts*/
var lastPosition = $(window).scrollTop();
var screenWidth = $(window).width();

/*
*  functions
*/
function menuAction(target) {
  if (target.hasClass('opened')) {
    target.removeClass('opened');
  }
  else {
    $('.menu__list li .opened').removeClass('opened');
    target.toggleClass('opened');
  }
}

function submenuAction(target) {
  var t = target.next('ul.menu__sublist');
  if (t.hasClass('activated')) {
    t.removeClass('activated');
  } else {
    $('.menu__list li .activated').removeClass('activated');
    t.toggleClass('activated');
  }
}

function buttonAction(target) {
  target.toggleClass('menu__button--active');
  $('.menu__list').toggleClass('open');
  $('.legalOverlay').toggleClass('openTwo');
  $('.menu__sublist.activated').removeClass('activated');
}

/*
*  Run
*/
$(window).resize(function () {
  screenWidth = $(window).width();
});

$(window).on('scroll', function () {
  var position = $(window).scrollTop();


  if (lastPosition < position && screenWidth > 767) {
    $('.menu__list li .activated').removeClass('activated');
    $('.menu__button').removeClass('menu__button--active');
    $('.menu__list').removeClass('open');
  }
  lastPosition = position;
});

$(document).ready(function () {

  $('.menu__button').on('click', function () {
    buttonAction($(this));
  });
  $('.menu__list li a').on('click', function () {
    menuAction($(this));
  });
  $('.menu__list li a').on('click', function () {
    submenuAction($(this));
  });

  

})

if ( $(window).width() <= 920 ) {
  $('.menu_sub').on('click', function () {
    $(this).toggleClass("open-caret");
  });
}

/*Legal header new bhavika ends*/


/*back button and browser back js start*/
function GoBackWithRefresh(event) {
  if ('referrer' in document) {
    window.location = document.referrer;
    /* OR */
    //location.replace(document.referrer);
  } else {
    window.history.back();
  }
}

var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
  location.reload(true);
}

/*back button and browser back js end*/


//Legal pop up

if ($("#myModal").length) {
  $('#myModal').modal({
    backdrop: 'static'
  });


  $(document).ready(function () {
    if ($.cookie("disclaimer") == null) {
      $('#myModal').css('visibility', 'visible');
      // $('.modal-backdrop.in').css("display","none");
      $(".agreeDisclaimer").click(function () {
        $.cookie("disclaimer", "2");
      });
    }
  });

}