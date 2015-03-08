var NewPostNav = Backbone.View.extend({
	el: '#nav-list',
	tagName: 'li',
	template: _.template($('#new-post-nav-template').html()),
	initalize: function() {
		this.render();
	},
	events: {
		'click #new-post-btn' : 'newPostForm'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	newPostForm: function(e) {
		e.preventDefault();
		$('#new-post').remove();
		$('#new-post').hide();
		$('#new-post').slideToggle();
	},
});