var app = app || {};

var ref      = new Firebase('https://musicinsider.firebaseio.com/');
var refPosts = new Firebase(ref + 'posts');
var refUsers = new Firebase(ref + 'users');
var authState;
app.posts = new app.Posts();
app.posts.fetch({autoSync: true});
app.blog = new app.Blog({collection: app.posts});

function authenticate() {
  var authState = ref.getAuth();
    if (authState) {
    authenticated();
  } else {
    unauthenticated();
  }
}

function authenticated() {
  $('.fa-user-secret').css({color: 'yellow'});
  $('ul.admin-tools-list li').css({visibility: 'visible'});
  $('.admin-tool').css({visibility: 'visible'});
}

function unauthenticated() {
  $('.fa-user-secret').css({color: 'grey'});
  $('ul.admin-tools-list li').css({visibility: 'hidden'});
  $('.admin-tool').css({visibility: 'hidden'}); 
}

refPosts.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

refUsers.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData.uid);
    authenticated();
    
  } else {
    console.log("Client unauthenticated.");
    unauthenticated();
  }
});

new WOW().init();

$(function() {
  $('.btn-admin-site').on('click', function() {
    var dashboard = new app.Dashboard();
  });
});