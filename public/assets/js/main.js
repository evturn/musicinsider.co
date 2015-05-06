var app = app || {};

var ref           = new Firebase('https://musicinsider.firebaseio.com/');
var refPosts      = new Firebase(ref + 'posts');
var refUsers      = new Firebase(ref + 'users');
app.posts     = new app.Posts();
app.posts.fetch({autoSync: true});
app.blog = new app.Blog({collection: app.posts});
// async

refPosts.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

refUsers.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData.uid);
    authenticated();
    admin = true;
  } else {
    console.log("Client unauthenticated.");
    unauthenticated();
    admin = false;
  }
});

function authenticated() {
  $('.fa-user-secret').css({color: 'yellow'});
  $('.admin-tools-list').removeClass('concealed');
  $('.admin-dashboard .container-fluid').css({paddingTop: '0'});
  $('.admin-tool').removeClass('concealed');
  
}
function unauthenticated() {
  $('.fa-user-secret').css({color: '#ddd'});
  $('.admin-tools-list').addClass('concealed');
  $('.admin-tool').addClass('concealed');
  $('.admin-dashboard .container-fluid').css({paddingTop: '125px'});
}


new WOW().init();


$(function() {

  $('.btn-admin-site').on('click', function() {
    app.dashboard = new app.Dashboard();
    if (admin === true) {
      app.dashboard.welcome();
    } else {
      app.dashboard.loginForm();
    }
  });

  $("#second").bootFolio({
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

  $('.tp-banner').show().revolution({
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

});