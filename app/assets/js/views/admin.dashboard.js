var app = app || {};

app.Dashboard = Backbone.View.extend({
	el: '.admin-dashboard',
	dashboardTemplate : _.template($('#dashboard-template').html()),
	formNewTemplate   : _.template($('#form-new-template').html()),
	formEditTemplate  : _.template($('#form-edit-template').html()),
	formLoginTemplate  : _.template($('#form-login-template').html()),
	events: {
		'click .btn-form-admin-create' : 'create',
		'click .btn-form-admin-update' : 'update',
		'click .btn-form-admin-delete' : 'delete',
		'click .btn-form-admin-login'  : 'login'
	},
	initialize: function() {
		this.render();
		this.$el.hide();
	},
	render: function() {
		this.$el.html(this.dashboardTemplate());
		this.newForm();
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
				$('.admin-form-container').addClass('wow shake');
    		$('.error').text(error.message);
  		} else {
	    	console.log("Authenticated successfully with payload:", authData);
				dashboard.newForm();
			}
		}.bind(this));
	},
});