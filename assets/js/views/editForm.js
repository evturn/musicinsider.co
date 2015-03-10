var EditForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#post-form-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .close' 	 : 'close',
		'click #update' : 'update'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	close: function() {
		$('#edit-form').fadeOut('fast', function() {
    		$('#edit-form').remove();
    	});
	},
	update: function(e) {
		e.preventDefault();
		title = $('#post-title').val();
		body  = $('#post-body').val();
    this.model.set({
    	title: title,
    	body: body
    });
    this.hide();
    return false;
	},
});