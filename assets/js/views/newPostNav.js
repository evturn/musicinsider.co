var NewPostNav = Backbone.View.extend({
	el: '#admin-list',
	tagName: 'li',
	template: _.template($('#new-post-nav-template').html()),
	initalize: function() {
		this.render();
	},
	events: {
		'click #admin' 		 : 'toggleAuth',
		'click #new-post-btn' : 'newPostForm'
	},
	toggleAuth: function(e) {
		e.preventDefault();
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var authData = refUsers.getAuth();
		if (authData) {
  		console.log("Authenticated user with uid:", authData.uid);
			loginForm.render();
			console.log('Showing the login form somewhere');
		} else {
			this.userLogout();
		}
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	newPostForm: function(e) {
		e.preventDefault();
		$('#new-post').remove();
		var newPostForm = new NewPostForm({collection: allPosts});
		$('#new-post').hide();
		$('#new-post').slideToggle();
	},
	userLogout: function(e) {
		e.preventDefault();
		FIREBASE_URL.unauth();
		var refUsers = new Firebase("https://musicinsider.firebaseio.com/users");
		var unauthConfirm = refUsers.getAuth();
		if (!unauthConfirm) {
			console.log('User logged out!');
			$('.admin-nav').fadeTo({opacity: 0}, 5000);
		}
	},
});