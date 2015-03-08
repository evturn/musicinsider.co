var HomeFooter = Backbone.View.extend({
	el: '#home-footer',
	template: _.template($('#home-footer-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});

var LoginModal = new Backbone.View.extend({
	el: '#loginModal',
	template: _.template($('#modal-template').html()),
	initalize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});