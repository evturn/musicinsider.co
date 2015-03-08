var LoginModal = Backbone.View.extend({
	el: '#modal-body',
	template: _.template($('#modal-body-template').html()),
	initalize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
});