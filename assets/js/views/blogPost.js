var BlogPost = Backbone.View.extend({
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #edit' 	: 'edit',
	},
	edit: function() {
		selectedPost = this.model.attributes;
		editForm 		 = new EditForm();
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});