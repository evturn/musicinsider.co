var app = app || {};

app.App = Backbone.View.extend({
	initialize: function() {
		this.firebaseInit();
		this.blog();
	},
	posts: function() {
		firebasePosts.on("value", function(snapshot) {
			  console.log(snapshot.val());
			}, function (errorObject) {
			  	console.log("The read failed: " + errorObject.code);
				});
	},
	users: function() {
		firebaseUsers.onAuth(function(authData) {
  		if (authData) {
    		console.log("Authenticated with uid:", authData.uid);
    		$('.fa.fa-power-off').css({color: 'yellow'});
  		} else {
    		console.log("Client unauthenticated.");
    		$('.fa.fa-power-off').css({color: '#ddd'});
  		}
		});
	},
	dashboard: function() {
		firebaseUsers.onAuth(function(authData) {
  		if (authData) {
    		dashboard.render();
  		} else {
    		dashboard.loginForm();
  		}
		});
	},
	firebaseInit: function() {
		FIREBASE_URL 	= new Firebase('https://musicinsider.firebaseio.com/');
		firebasePosts = new Firebase(FIREBASE_URL + 'posts');
		firebaseUsers = new Firebase(FIREBASE_URL + 'users');
		this.posts();
		this.users();
	},
	blog: function() {
		allPosts      = new AllPosts();
		allPosts.fetch();
		allBlogPosts  = new AllBlogPosts({collection: allPosts});
	},
});