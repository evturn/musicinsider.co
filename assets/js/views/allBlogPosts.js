var AllBlogPosts = Backbone.View.extend({
	el: '#owl-blog',
	initialize: function() {
		this.listenTo(this.collection, 'reset', this.addAll)
		this.addAll();
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