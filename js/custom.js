
$('#fullpage').fullpage({
    css3: true,
    sectionsColor: [],
    anchors: [],
    navigation: true,
    navigationTooltips: [],
    fadingEffect: true,
    keyboardScrolling: false,
    scrollingSpeed: 800,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
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
    }
    
});






$(".serviceSlider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });






