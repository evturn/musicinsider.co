var AdminTools = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#login-template').html()),
	initialize: function() {
		this.render();
		$('#login-form').hide();
	},
	events: {
		'click #admin' 		 : 'showLogin',
		'click #login-btn' : 'showNewPostBtn'
	},
	showLogin: function() {
		$('#login-form').slideToggle();
	},
	showNewPostBtn: function() {
		console.log('Login button clicked');
		$('#login-form').remove();
		newPostNav = new NewPostNav();
		newPostNav.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});