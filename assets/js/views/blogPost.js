var BlogPost = Backbone.View.extend({
	el: '#owl-blog',
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
	// addAll: function() {
	// 	this.collection.each(function(model) {
			
	// 	})
	// },
});