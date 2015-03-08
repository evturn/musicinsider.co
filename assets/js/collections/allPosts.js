var AllPosts = Backbone.Firebase.Collection.extend({
	model: Post,
	url: 'https://musicinsider.firebaseio.com/posts'
});