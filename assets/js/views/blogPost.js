var BlogPost = Backbone.View.extend({
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #edit' : 'editPost'
	},
	editPost: function() {
		postId	= this.model.get('id');
		console.log(postId);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});