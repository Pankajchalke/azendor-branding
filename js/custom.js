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
    //scrollOverflow: true,
    normalScrollElements: "#scrolldiv",
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    scrollBar: true,
    responsiveWidth: 1030,
    afterResponsive: function (isResponsive) {},
    afterLoad: function (anchorLink, index) {
      console.log(index);

      if (index == 1) {
        $("#myBtn").css("display", "none");
        $(".scroll-text").css("display", "block");
        $(".scroll-symbol").css("display", "block");
        $("a[class = 'scroll-icon']").prop("href", "#bannerSec1");
        $(".secOne").addClass("is-active");
        $(".secTwo").removeClass("is-active");
      }
      if (index == 2) {
        $("#myBtn").css("display", "block");
        $(".scroll-text").css("display", "block");
        $(".scroll-symbol").css("display", "block");
        $("a[class = 'scroll-icon']").prop("href", "#bannerSec2");
        $(".secOne").addClass("is-active");
        $(".secTwo").removeClass("is-active");
      }
      if (index == 3) {
        $(".scroll-text").css("display", "block");
        $(".scroll-symbol").css("display", "block");
        $("a[class = 'scroll-icon']").prop("href", "#serviceSec");
        $(".secOne").addClass("is-active");
        $(".secTwo").removeClass("is-active");
      }
      if (index == 4) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secOne").removeClass("is-active");
        $(".secTwo").addClass("is-active");
        $(".secThree").removeClass("is-active");
      }
      if (index == 5) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secTwo").removeClass("is-active");
        $(".secThree").addClass("is-active");
        $(".secFour").removeClass("is-active");
      }
      if (index == 6) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secThree").removeClass("is-active");
        $(".secFour").addClass("is-active");
        $(".secFive").removeClass("is-active");
      }
      if (index == 7) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secFour").removeClass("is-active");
        $(".secFive").addClass("is-active");
        $(".secSix").removeClass("is-active");
      }
      if (index == 8) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secFive").removeClass("is-active");
        $(".secSix").addClass("is-active");
        $(".secSeven").removeClass("is-active");
      }
      if (index == 9) {
        $(".scroll-text").css("display", "none");
        $(".scroll-symbol").css("display", "none");
        $(".secSix").removeClass("is-active");
        $(".secSeven").addClass("is-active");
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

if ($(".sectorSlider").length) {
  $(".sectorSlider").slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 654,
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

// tabs toggle

jQuery(document).ready(function ($) {
  tab = $(".tabs a");

  tab.on("click", function (event) {
    event.preventDefault();
    tab.removeClass("active");
    $(this).addClass("active");

    tab_content = $(this).attr("href");
    $('div[id$="tab-content"]').removeClass("active");
    $(tab_content).addClass("active");
  });
});

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

const mediaQueryone = window.matchMedia("(max-width: 768px)");
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
  });
} else {
  $(document).ready(function () {
    $(".content").slice(0, 8).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".content:hidden").slice(0, 8).slideDown();
      if ($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
  });
}

const mediaQuerytwo = window.matchMedia("(max-width: 768px)");
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
  });
} else {
  $(document).ready(function () {
    $(".contentOne").slice(0, 8).show();
    $("#loadMoretab").on("click", function (e) {
      e.preventDefault();
      $(".contentOne:hidden").slice(0, 8).slideDown();
      if ($(".contentOne:hidden").length == 0) {
        $("#loadMoretab").text("No Content").addClass("noContent");
      }
    });
  });
}

const mediaQuerythree = window.matchMedia("(max-width: 768px)");
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
  });
} else {
  $(document).ready(function () {
    $(".contentThree").slice(0, 8).show();
    $("#loadMorethree").on("click", function (e) {
      e.preventDefault();
      $(".contentThree:hidden").slice(0, 8).slideDown();
      if ($(".contentThree:hidden").length == 0) {
        $("#loadMorethree").text("No Content").addClass("noContent");
      }
    });
  });
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

// legal Header

// testimonial JS
if ($(".testimonialsSlider").length) {
  $(".testimonialsSlider").slick({
    centerMode: true,
    centerPadding: "17%",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "15%",
          slidesToShow: 1,
        },
      },
    ],
  });
}

if ($(".testlegalSlider").length) {
  $(".testlegalSlider").slick({
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
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
        breakpoint: 700,
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
    if (scrollY >= sectionTop - sectionHeight / 3) {
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
