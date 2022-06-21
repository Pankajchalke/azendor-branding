
$('#fullpage').fullpage({
  css3: true,
  sectionsColor: [],
  anchors: [],
  navigation: false,
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
        dots:true,
        slidesToShow: 2,
         slidesToScroll: 2,
      },
    },
    {
      breakpoint: 654,
      settings: {
        dots:true,
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

$('.tabs .tabsToggle').click(function(){
  $('.tabs .tabsToggle').removeClass('active');
  $(this).addClass('active');
  let indis = $('.tabs .tabsToggle').index(this);
  $('.tabs .bg').css('left',(120 * indis).toString()+"px");

  const mQuery = window.matchMedia('(max-width: 768px)')
  if (mQuery.matches) { 
    // Print a message to the console 
    $('.tabs .bg').css('left',(60 * indis).toString()+"px"); 
}
});




// load more 
$(document).ready(function(){
  $(".content").slice(0, 8).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".content:hidden").slice(0, 8).slideDown();
    if($(".content:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
  
})

$(document).ready(function(){
  $(".contentOne").slice(0, 8).show();
  $("#loadMoretab").on("click", function(e){
    e.preventDefault();
    $(".contentOne:hidden").slice(0, 8).slideDown();
    if($(".contentOne:hidden").length == 0) {
      $("#loadMoretab").text("No Content").addClass("noContent");
    }
  });
  
})


$(document).ready(function(){
  $(".contentThree").slice(0, 8).show();
  $("#loadMorethree").on("click", function(e){
    e.preventDefault();
    $(".contentThree:hidden").slice(0, 8).slideDown();
    if($(".contentThree:hidden").length == 0) {
      $("#loadMorethree").text("No Content").addClass("noContent");
    }
  });
  
})


















