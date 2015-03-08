var BlogPost = Backbone.View.extend({
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});