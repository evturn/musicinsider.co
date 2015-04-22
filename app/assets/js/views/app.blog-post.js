var app = app || {};

app.BlogPost = Backbone.View.extend({
	postTemplate: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .btn-admin-edit' : 'edit'
	},
	edit: function() {
		dashboard.editForm(this.model.attributes);
		return this;
	},	
	render: function() {
		this.$el.html(this.postTemplate(this.model.toJSON()));
		return this;
	},
});