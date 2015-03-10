var BlogPost = Backbone.View.extend({
	template: _.template($('#blog-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #edit' 	: 'edit'
	},
	edit: function() {
		postModel		 = this.model;
		selectedPost = this.model.attributes;
		editForm 		 = new EditForm({collection: allPosts});
	},	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
});