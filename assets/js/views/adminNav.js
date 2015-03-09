var AdminNav = Backbone.View.extend({
	el: '#admin-list',
	tagName: 'li',
	template: _.template($('#admin-nav-template').html()),
	initalize: function() {
		this.render();
	},
	events: {
		'click #admin' 		 : 'toggleAuth',
		'click #new-post-btn' : 'newPostForm'
	},
	toggleAuth: function(e) {
		e.preventDefault();
		var authData = firebaseUsers.getAuth();
		if (!authData) {
  		loginForm = new LoginForm();
			console.log('Showing the login form somewhere');
		} else {
			this.logout();
			console.log('Reading someone trying to logout');
		}
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	},
	newPostForm: function(e) {
		e.preventDefault();
		$('#new-post').remove();
		var newPostForm = new NewPostForm({collection: allPosts});
		$('#new-post').hide();
		$('#new-post').slideToggle();
	},
	logout: function() {
		FIREBASE_URL.unauth();
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var unauthConfirm = refUsers.getAuth();
		if (!unauthConfirm) {
			console.log('User logged out!');
			$('.admin-nav').fadeTo({opacity: 0}, 5000);
		}
	},
});