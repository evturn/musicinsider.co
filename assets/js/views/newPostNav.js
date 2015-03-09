var NewPostNav = Backbone.View.extend({
	el: '#admin-list',
	tagName: 'li',
	template: _.template($('#new-post-nav-template').html()),
	initalize: function() {
		this.render();
	},
	events: {
		'click #new-post-btn' : 'newPostForm',
		'click #logout'				: 'userLogout'
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
			this.$el.fadeTo({opacity: 0}, 5000);
		}
	},
});