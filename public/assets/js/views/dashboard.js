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
		'click .btn-admin-hide' 		 	 : 'emptyOut',
		'click .dashboard-close' 		 	 : 'emptyOut',
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
		if (authState) {
			self.welcome();
			authenticated();
		} else {
			self.loginForm();
			unauthenticated();
		}
		return this;
	},
	welcome: function() {
		$('.admin-form-container').html(this.welcomeTemplate());
		return this;
	},
	loginForm: function() {
		$('.admin-form-container').html(this.formLoginTemplate());
		return this;
	},
	newForm: function() {
		$('.admin-form-container').html(this.formNewTemplate());
		return this;
	},
	login: function(e) {
		e.preventDefault();
		var $email 	  = $('#email').val();
		var $password = $('#password').val();
		refUsers.authWithPassword({
			email    : $email,
			password : $password
		}, function(error, authData) {			
			if (error) {
    		console.log("Login Failed!", error);
				$('.admin-form-container').addClass('shake');
    		$('.error').text(error.message);
  		} else {
	    	console.log("Authenticated successfully with payload:", authData);
				self.welcome();
			}
		});
	},
	logout: function() {
		ref.unauth();
		$('.admin-form-container').html('<span class="dashboard-close"><i class="fa fa-times fa-3x"></i></span>');
		$('.admin-form-container').append('<p class="lead dashboard-thanks text-center">Thanks</p>');
	},
	emptyOut: function() {
  	this.$el.empty();
	},
	editForm: function(model) {
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
    	$('.admin-form-container').addClass('shake');
  	} else {
    	console.log('Synchronization succeeded');
    	self.emptyOut();
  	}
	},
	create: function(e) {
		e.preventDefault();
		var title = $('#post-title').val();
		var body  = $('#post-body').val();
    refPosts.push({
    	title: title,
    	body: body
    }, this.onComplete());
	},
});