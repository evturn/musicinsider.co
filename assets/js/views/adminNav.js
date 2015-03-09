var AdminNav = Backbone.View.extend({
	el: '#admin-list',
	tagName: 'li',
	template: _.template($('#admin-nav-template').html()),
	initalize: function() {
		this.toggleAdminTools();
		this.render();
	},
	events: {
		'click #admin' 		 		: 'toggleAuth',
		'click #new-post-btn' : 'postForm'
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	toggleAuth: function(e) {
		e.preventDefault();
		var authData = firebaseUsers.getAuth();
		if (!authData) {
			console.log('toggleAuth showing the login form');
  		this.showLoginForm();
		} else {
			console.log('toggleAuth trying to logout');
			this.logout();
		}
	},
	postForm: function(e) {
		e.preventDefault();
		$('#new-post').remove();
		var newPostForm = new NewPostForm({collection: allPosts});
		$('#new-post').hide();
		$('#new-post').slideToggle();
	},
	showLoginForm: function() {		
		loginForm = new LoginForm();
		$('#login-form').hide();
		$('#login-form').slideToggle();
	},
	logout: function() {
		FIREBASE_URL.unauth();
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var unauthConfirm = refUsers.getAuth();
		if (!unauthConfirm) {
			console.log('User logged out!');
			adminNav.render();
		}
	},
});