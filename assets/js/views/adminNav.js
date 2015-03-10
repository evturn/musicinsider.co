var AdminNav = Backbone.View.extend({
	el: '#admin-list',
	tagName: 'li',
	template: _.template($('#admin-nav-template').html()),
	initialize: function() {
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
  		this.showLoginForm();
		} else {
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
		var refUsers 			= new Firebase(FIREBASE_URL + 'users');
		var unauthConfirm = refUsers.getAuth();
		if (!unauthConfirm) {
			adminNav.render();
			clientState();
		}
	},
});