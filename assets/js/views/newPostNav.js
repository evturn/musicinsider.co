var NewPostNav = Backbone.View.extend({
	el: '#nav-list',
	tagName: 'li',
	template: _.template($('#new-post-nav-template').html()),
	initalize: function() {
		this.render();
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},

});