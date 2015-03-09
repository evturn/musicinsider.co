var AllPosts = Backbone.Firebase.Collection.extend({
	url: 'https://musicinsider.firebaseio.com/posts',
	model: Post,
	autoSync: false
});