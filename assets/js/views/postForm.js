var PostForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#post-form-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	events: {
		'click .close' 	 : 'exitForm',
		'click #publish' : 'createPost'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	exitForm: function() {
		$('#post-form').fadeOut('fast', function() {
    		$('#post-form').remove();
  	});
	},
	createPost: function(e) {
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