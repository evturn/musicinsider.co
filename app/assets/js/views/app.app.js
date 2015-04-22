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
    		this.authenticated();
  		} else {
    		console.log("Client unauthenticated.");
    		this.unauthenticated();
  		}
		}.bind(this));
	},
	dashboard: function() {
		firebaseUsers.onAuth(function(authData) {
  		if (authData) {
  			this.authenticated();
  			dashboard.render();
  		} else {
  			this.unauthenticated();
    		dashboard.loginForm();
  		}
		}.bind(this));
	},
	authenticated: function() {
    $('.fa-user-secret').css({color: 'yellow'});
    $('.admin-tools-list').removeClass('concealed');
    $('.admin-dashboard .container-fluid').css({paddingTop: '0'})
    $('.admin-tool').removeClass('concealed');
    console.log('HELLS YES WE ARE GOING TO BE SESSIONING!');
	},
	unauthenticated: function() {
    $('.fa-user-secret').css({color: '#ddd'});
    $('.admin-tools-list').addClass('concealed');
    $('.admin-tool').addClass('concealed');
    $('.admin-dashboard .container-fluid').css({paddingTop: '125px'})
    console.log('YOU AIN\'T ALLOWED TO DO ANYTHING');
	},
	firebaseInit: function() {
		FIREBASE_URL 	= new Firebase('https://musicinsider.firebaseio.com/');
		firebasePosts = new Firebase(FIREBASE_URL + 'posts');
		firebaseUsers = new Firebase(FIREBASE_URL + 'users');
		this.posts();
		this.users();
	},
	blog: function() {
		var posts = new app.Posts();
		posts.fetch();
		blog = new app.Blog({collection: posts});
	},
});