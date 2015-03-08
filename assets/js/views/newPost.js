var NewPostView = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#new-post-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .close' : 'hide',
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	hide: function() {
		$('#new-post').slideToggle();
		setTimeout(function() {
			$('#new-post').remove();
		}, 500);
	}
});