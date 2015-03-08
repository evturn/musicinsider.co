var HomeFooter = Backbone.View.extend({
	el: '#home-footer',
	template: _.template($('#home-footer-template').html()),
	initialize: function() {
		this.render();
		$('#login-form').hide();
	},
	events: {
		'click #admin' : 'showLogin'
	},
	showLogin: function() {
		$('#login-form').slideToggle();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});