(function($) {
    "use strict";

/* ==============================================
    Loader Effect
=============================================== */

    $(window).load(function() {
        $("#preloader").delay(500).fadeOut();
        $(".preloader").delay(600).fadeOut("slow");
    });
/* ==============================================
    Vertical Carousel
=============================================== */

    $('.bxslider').bxSlider({
        mode: 'vertical',
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 10,
        pager: false,
        nextText:  '<i class="fa fa-arrow-down"></i>',
        prevText:  '<i class="fa fa-arrow-up"></i>',
        speed: 1000,
        auto: true
    });

/* ==============================================
    Progress Bar (Skills Bar)
=============================================== */

    // $('.progress .progress-bar').progressbar({transition_delay: 800});

/* ==============================================
    Tooltip
=============================================== */

    $('[data-toggle="tooltip"]').tooltip();


/* ==============================================
    Back to Top
=============================================== */

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

/* ==============================================
    Fun Facts
=============================================== */

    function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 50;
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } 
            else {    
                setTimeout(function(){count($this)}, 50);
            }
        }        
        $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

/* ==============================================
    Scrolling Effects
=============================================== */

    new WOW({delay: 2000}).init();

    
/* ==============================================
    Parallax Effects
=============================================== */

    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 100
    });

/* ==============================================
    Offset Menu
=============================================== */

    smoothScroll.init({
        speed: 500,
        easing: 'easeInOutCubic',
        updateURL: false,
        offset: 70,
        callbackBefore: function ( toggle, anchor ) {},
        callbackAfter: function ( toggle, anchor ) {}
    });

/* ==============================================
    Affix Menu
=============================================== */

    $(".header .menu-wrapper").affix({
        offset: {
            top: 200, 
            bottom: function () {
            return (this.bottom = $('.copyrights').outerHeight(true))
            }
        }
    })

/* ==============================================
    Accordion Toggle Items
=============================================== */

   var iconOpen = 'fa fa-minus',
        iconClose = 'fa fa-plus';

    $(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
        var $target = $(e.target)
          $target.siblings('.accordion-heading')
          .find('em').toggleClass(iconOpen + ' ' + iconClose);
          if(e.type == 'show')
              $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
          if(e.type == 'hide')
              $(this).find('.accordion-toggle').not($target).removeClass('active');
    });


/* ==============================================
    Lightbox Effect
=============================================== */

    jQuery('a[data-gal]').each(function() { jQuery(this).attr('rel', jQuery(this).data('gal')); });     
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});



jQuery("#second").bootFolio({
    bfLayout: "bflayhover",
    bfFullWidth:"box", 
    bfHover: "bfhover4",
    bfAnimation: "scale",
    bfSpace: "space",
    bfAniDuration: 500,
    bfCaptioncolor: "#020202",
    bfTextcolor:"#ffffff",
    bfTextalign:"center",
    bfNavalign:"center"
  });

  jQuery('.tp-banner').show().revolution({
    dottedOverlay:"none",
    delay:16000,
    startwidth:1170,
    startheight:780,
    hideThumbs:200,
    thumbWidth:100,
    thumbHeight:50,
    thumbAmount:4,
    navigationType:"none",
    navigationArrows:"solo",
    navigationStyle:"preview1",
    touchenabled:"on",
    onHoverStop:"on",
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    parallax:"scroll",
    parallaxBgFreeze:"on",
    parallaxLevels:[10,20,30,40,50,60,70,80,90,100],
    keyboardNavigation:"off",
    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:20,
    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:0,
    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:0,
    shadow:0,
    fullWidth:"on",
    fullScreen:"off",
    spinner:"spinner4",
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",
    autoHeight:"off",                       
    forceFullWidth:"on",                        
    hideThumbsOnMobile:"off",
    hideNavDelayOnMobile:1500,                      
    hideBulletsOnMobile:"off",
    hideArrowsOnMobile:"off",
    hideThumbsUnderResolution:0,
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    startWithSlide:0    
  }); 



})(jQuery);