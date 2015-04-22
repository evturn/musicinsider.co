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
		'click .btn-form-admin-delete' : 'delete'
	},
	initialize: function() {
		this.render();
		this.$el.hide();
	},
	render: function() {
		this.$el.html(this.dashboardTemplate());
		$('.admin-form-container').html(this.formNewTemplate());
		return this;
	},
	loginForm: function() {
		$('.admin-form-container').html(this.formLoginTemplate());
		this.$el.show();
		return this;
	},
});