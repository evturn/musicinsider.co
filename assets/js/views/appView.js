var AppView = Backbone.View.extend({
	initialize: function() {
		FIREBASE_URL = new Firebase('https://musicinsider.firebaseio.com/')
		firebasePosts = new Firebase(FIREBASE_URL + 'posts');
		firebaseUsers = new Firebase(FIREBASE_URL + 'users');
		this.readFirebasePosts();
		this.readFirebaseUsers();
		adminNav     = new AdminNav();
		allPosts     = new AllPosts();
		allPosts.fetch();
		allBlogPosts = new AllBlogPosts({collection: allPosts});

	},
	readFirebasePosts: function() {
		firebasePosts.on("value", function(snapshot) {
			  console.log(snapshot.val());
			}, function (errorObject) {
			  	console.log("The read failed: " + errorObject.code);
				});
	},
	readFirebaseUsers: function() {
		firebaseUsers.onAuth(function(authData) {
  		if (authData) {
    		console.log("Authenticated with uid:", authData.uid);
  		} else {
    		console.log("Client unauthenticated.");
  		}
		});
	},
});