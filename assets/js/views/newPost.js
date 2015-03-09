var NewPostForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#new-post-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	events: {
		'click .close' 	 : 'close',
		'click #publish' : 'createPost'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	close: function() {
		$('#new-post').slideToggle();
		setTimeout(function() {
			$('#new-post').remove();
		}, 800);
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