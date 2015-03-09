var AdminTools = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#login-template').html()),
	initialize: function() {
		this.render();
		this.checkAuth();
		$('#login-form').hide();
	},
	events: {
		'click #admin' 		 : 'showLogin',
		'click #login-btn' : 'userAuth'
	},
	showLogin: function() {
		$('#login-form').slideToggle();
	},
	userAuth: function(e) {
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
  		}
		});
	},
	checkAuth: function() {
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var authData = refUsers.getAuth();
		if (authData) {
  		console.log("Authenticated user with uid:", authData.uid);
		this.showNewPostBtn();
		}
	},
	showNewPostBtn: function() {
		username = FIREBASE_URL.getAuth().password.email;
    console.log('we fading!');
		$('#login-form').remove();
		newPostNav = new NewPostNav();
		newPostNav.render();
		$('#new-post-btn').css({opacity: 0})
  	$('#new-post-btn').fadeTo({opacity: 1}, 5000)
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
});