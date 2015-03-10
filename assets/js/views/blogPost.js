var BlogPost = Backbone.View.extend({
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #edit' 	: 'edit',
		'click #update' : 'update'
	},
	edit: function() {
		newTitle	= this.model.get('title');
		newBody  = this.model.get('body');
		postId		= this.model.get('id');
	},
	update: function() {
		title = $('#post-title').val();
		body  = $('#post-body').val();
		postRef = new Firebase(FIREBASE_URL + 'posts/');
		postRef.update({id: postId, title: title, body: body}, this.onComplete);
	},
	onComplete: function(error) {
		if (error) {
    	console.log('Synchronization failed');
  	} else {
    console.log('Synchronization succeeded');
  	}
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});