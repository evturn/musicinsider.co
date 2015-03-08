var NewPostView = Backbone.View.extend({
	el: '#new-post',
	template: _.template($('#new-post-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});

var newPost = new NewPostView();