new WOW({delay: 2000}).init();

$(".header .menu-wrapper").affix({
  offset: {
    top: 200, 
    bottom: function () {
    return (this.bottom = $('.copyrights').outerHeight(true))
    }
  }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
        $('.dmtop').css({bottom:"25px"});
    } else {
        $('.dmtop').css({bottom:"-100px"});
    }
});
$('.dmtop').click(function(){
    $('html, body').animate({scrollTop: '0px'}, 800);
    return false;
});