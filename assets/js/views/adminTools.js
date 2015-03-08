var AdminTools = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#admin-tools-template').html()),
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
		console.log('Login button clicked');
		$('#login-form').html('');
		var newPost = new NewPostView();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
});