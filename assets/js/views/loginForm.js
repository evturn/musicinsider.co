var LoginForm = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#login-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #login-btn' : 'login',
		'click .close' 	 : 'close'
	},
	login: function(e) {
		e.preventDefault();
		userEmail = $('#email').val();
		userPassword = $('#password').val();
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		refUsers.authWithPassword({
			email    : userEmail,
			password : userPassword
		}, function(error, authData) {
			if (error) {
    		console.log("Login Failed!", error);
  		} else {
    	console.log("Authenticated successfully with payload:", authData);
    	this.checkAuth();
  		}
		}.bind(this));
	},
	checkAuth: function() {
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var authData = refUsers.getAuth();
		if (authData) {
  		console.log("Authenticated user with uid:", authData.uid);
		this.showAdminTools();
		}
	},
	showAdminTools: function() {
    console.log('we fading!');
		$('#login-form').remove();
		adminNav.render();
  	$('.admin-nav').fadeTo({opacity: 1}, 5000)
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
	close: function() {
		$('#login-form').slideToggle();
		setTimeout(function() {
			$('#login-form').remove();
		}, 500);
	},
});