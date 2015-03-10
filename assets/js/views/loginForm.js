var LoginForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#login-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #login-btn' : 'login',
		'click .close' 	 	 : 'exitForm'
	},
	login: function(e) {
		e.preventDefault();
		userEmail 	 = $('#email').val();
		userPassword = $('#password').val();
		var refUsers = new Firebase(FIREBASE_URL + 'users');
		refUsers.authWithPassword({
			email    : userEmail,
			password : userPassword
		}, function(error, authData) {
			if (error) {
    		console.log("Login Failed!", error);
  		} else {
    	console.log("Authenticated successfully with payload:", authData);
    	$('#login-form').fadeOut('slow', function() {
    		$('#login-form').remove();
    	});
			adminNav.render();
			clientState();
  		}
		}.bind(this));
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
	exitForm: function() {
		$('#login-form').fadeOut('fast', function() {
    		$('#login-form').remove();
    	});
	},
});