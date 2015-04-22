var AdminNav = Backbone.View.extend({
	el: '.admin-nav',
	tagName: 'li',
	events: {
		'click .btn-admin-site' : 'toggleAuth',
		'click .btn-admin-post' : 'postForm'
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
		$('#post-form').remove();
		var postForm = new PostForm({collection: allPosts});
		$('#post-form').hide();
		$('#post-form').slideToggle();
	},
	showLoginForm: function() {	
		$('#login-form').remove();	
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