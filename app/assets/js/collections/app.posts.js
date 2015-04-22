var app = app || {};

app.Posts = Backbone.Firebase.Collection.extend({
	url: 'https://musicinsider.firebaseio.com/posts',
	model: app.Post,
	autoSync: true
});