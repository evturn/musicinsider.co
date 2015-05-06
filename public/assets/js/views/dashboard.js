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
		'click .btn-form-admin-update' : 'update'
	},
	initialize: function() {
		self = this;
		this.render();
	},
	render: function() {
		this.$el.html(this.dashboardTemplate());
		return this;
	},
	welcome: function() {
		$('.admin-form-container').html(this.welcomeTemplate());
		this.reveal();
		return this;
	},
	loginForm: function() {
		$('.admin-form-container').html(this.formLoginTemplate());
		this.reveal();
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
		var refUsers = new Firebase(ref + 'users');
		refUsers.authWithPassword({
			email    : email,
			password : password
		}, function(error, authData) {			
			if (error) {
    		console.log("Login Failed!", error);
				$('.admin-form-container').addClass('shake');
    		$('.error').text(error.message);
  		} else {
	    	console.log("Authenticated successfully with payload:", authData);
				app.dashboard.welcome();
			}
		}.bind(this));
	},
	logout: function() {
		ref.unauth();
		this.emptyOut();
	},
	conceal: function() {
		this.$el.fadeOut('fast', function() {
  		this.$el.hide();
  	}.bind(this));
	},
	emptyOut: function() {
		this.$el.fadeOut('fast', function() {
  		this.$el.empty();
  	}.bind(this));
	},
	reveal: function() {
		this.$el.fadeIn('fast', function() {
  		this.$el.show();
  	}.bind(this));
	},
	editForm: function(model) {
		this.reveal();
		refUpdate = new Firebase(ref + 'posts/' + model.id);
		$('.admin-form-container').html(this.formEditTemplate(model.toJSON()));
		return this;
	},
	update: function() {
		var title = $('#post-title').val();
		var body  = $('#post-body').val();
		refUpdate.update({title: title, body: body}, this.onComplete);
	},
	onComplete: function(error) {
		if (error) {
    	console.log('Synchronization failed');
  	} else {
    	console.log('Synchronization succeeded');
    	self.emptyOut();
  	}
	},
	create: function(e) {
		e.preventDefault();
		var title = $('#post-title').val();
		var body  = $('#post-body').val();
		var refPosts = new Firebase(ref + 'posts/');
    refPosts.push({
    	title: title,
    	body: body
    }, this.onComplete());
	},
});