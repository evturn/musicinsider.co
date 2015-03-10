var AllBlogPosts = Backbone.View.extend({
	el: '#podcast-episode',
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.addAll);
		this.listenTo(this.collection, 'add', this.addAll);
	},
	addOne: function(model) {
		var blogPost = new BlogPost({model: model});
		this.$el.append(blogPost.el);
		clientState();
	},
	addAll: function() {
		this.$el.empty();
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
});