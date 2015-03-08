var HomeFooter = Backbone.View.extend({
	el: '#home-footer',
	template: _.template($('#home-footer-template').html()),
	initialize: function() {
		this.render();
		$('#login-form').hide();
	},
	events: {
		'click #admin' 		 : 'showLogin',
		'click #login-btn' : 'userLoginAuth'
	},
	showLogin: function() {
		$('#login-form').slideToggle();
	},
	userLoginAuth: function() {
		console.log('User attemping to log in.');
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});