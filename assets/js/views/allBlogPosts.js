var AllBlogPosts = Backbone.View.extend({
	el: '#podcast-episode',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addAll);
	},
	addOne: function(model) {
		var blogPost = new BlogPost({model: model});
		this.$el.append(blogPost.el);
	},
	addAll: function() {
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
});