var app = app || {};

app.Dashboard = Backbone.View.extend({
	el: '.admin-dashboard',
	dashboardTemplate : _.template($('#dashboard-template').html()),
	welcomeTemplate 	: _.template($('#welcome-template').html()),
	formNewTemplate   : _.template($('#form-new-template').html()),
	formEditTemplate  : _.template($('#form-edit-template').html()),
	formLoginTemplate : _.template($('#form-login-template').html()),
	events: {
		'click .btn-admin-create' 		 : 'newForm',
		'click .btn-admin-hide' 		 	 : 'conceal',
		'click .btn-admin-logout' 		 : 'logout',
		'click .btn-form-admin-login'  : 'login',
		'click .btn-form-admin-create' : 'create',
		'click .btn-form-admin-update' : 'update',
		'click .btn-form-admin-delete' : 'clear',
	},
	initialize: function() {
		this.render();
		this.conceal();
	},
	render: function() {
		this.$el.html(this.dashboardTemplate());
		this.welcome();
		return this;
	},
	welcome: function() {
		$('.admin-form-container').html(this.welcomeTemplate());
		this.$el.show();
		return this;
	},
	loginForm: function() {
		$('.admin-form-container').html(this.formLoginTemplate());
		this.$el.show();
		return this;
	},
	newForm: function() {
		$('.admin-form-container').html(this.formNewTemplate());
		return this;
	},
	login: function(e) {
		e.preventDefault();

		var email 	 = $('#email').val();
		var password = $('#password').val();
		var ref      = new Firebase(FIREBASE_URL + 'users');

		ref.authWithPassword({

			email    : email,
			password : password

		}, function(error, authData) {
			
			if (error) {
    		console.log("Login Failed!", error);
				$('.admin-form-container').addClass('shake');
    		$('.error').text(error.message);
  		} else {
	    	console.log("Authenticated successfully with payload:", authData);
				dashboard.welcome();
				$('.admin-tools-list').show();
			}
		}.bind(this));
	},
	logout: function() {
		FIREBASE_URL.unauth();
		this.conceal();
	},
	conceal: function() {
		this.$el.fadeOut('fast', function() {
    		this.$el.hide();
    	}.bind(this));
	},
	editForm: function(model) {
		console.log(model)
		$('.admin-form-container').html(this.formEditTemplate(model));
		return this;
	},
	edit: function(model) {
		var title = $('#post-title').val();
		var body  = $('#post-body').val();
		var firebasePost = new Firebase(FIREBASE_URL + 'posts/' + model.id);
		firebasePost.update({title: title, body: body}, this.onComplete);
	},
	onComplete: function(error) {
		if (error) {
    	console.log('Synchronization failed');
  	} else {
    	console.log('Synchronization succeeded');
    	allPosts.fetch();
    	this.conceal();
  	}
	},
	clear: function(e) {
		e.preventDefault();
		var deleteRef 	 = new Firebase(FIREBASE_URL + 'posts/' + selectedPost.id);
		console.log(deleteRef);
		deleteRef.remove(this.onComplete);
	},
});