var AppView = Backbone.View.extend({
	initialize: function() {
		FIREBASE_URL = new Firebase('https://musicinsider.firebaseio.com/')
		firebasePosts = new Firebase(FIREBASE_URL + 'posts');
		firebaseUsers = new Firebase(FIREBASE_URL + 'users');
		adminNav     = new AdminNav();
		allPosts     = new AllPosts();
		allPosts.fetch();
		allBlogPosts = new AllBlogPosts({collection: allPosts});
	},

});