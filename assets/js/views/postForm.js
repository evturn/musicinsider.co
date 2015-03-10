var PostForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#post-form-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	events: {
		'click .close' 	 : 'exit',
		'click #publish' : 'create'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	exit: function() {
		$('#post-form').fadeOut('fast', function() {
    		$('#post-form').remove();
  	});
	},
	create: function(e) {
		e.preventDefault();
		title = $('#post-title').val();
		body  = $('#post-body').val();
    this.collection.create({
    	title: title,
    	body: body
    });
    this.hide();
    return false;
	},
});