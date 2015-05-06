var app = app || {};

app.BlogPost = Backbone.View.extend({
	postTemplate: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .btn-admin-edit' 	: 'edit',
		'click .btn-admin-delete' : 'clear'
	},
	edit: function() {
		var dashboard = new app.Dashboard({model: this.model});
		dashboard.editForm(this.model);
		return this;
	},
	clear: function() {
		var refPost = new Firebase(ref + 'posts/' + this.model.id);
		refPost.remove();
	},
	render: function() {
		this.$el.html(this.postTemplate(this.model.toJSON()));
		return this;
	},
});