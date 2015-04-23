var app = app || {};

app.Blog = Backbone.View.extend({
	el: '#podcast-episode',
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.addAll);
		this.listenTo(this.collection, 'add', this.addAll);
		this.listenTo(this.collection, 'remove', this.addAll);
	},
	addOne: function(model) {
		var view = new app.BlogPost({model: model});
		this.$el.append(view.el);
	},
	addAll: function() {
		this.$el.empty();
		this.collection.each(function(model) {
			this.addOne(model);
		}.bind(this));
	},
});