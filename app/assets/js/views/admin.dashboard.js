var app = app || {};

app.Dashboard = Backbone.View.extend({
	el: '.admin-dashboard',
	dashboardTemplate: _.template($('#dashboard-template').html());
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.dashboardTemplate());
		return this;
	},
});