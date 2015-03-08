var NewPostView = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#new-post-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		console.log('allPosts', allPosts);
		this.render();
	},
	events: {
		'click .close' 	 : 'hide',
		'click #publish' : 'createPost'
	},
	render: function() {
		this.$el.prepend(this.template());
		return this;
	},
	hide: function() {
		$('#new-post').slideToggle();
		setTimeout(function() {
			$('#new-post').remove();
		}, 500);
	},
	createPost: function(e) {
		e.preventDefault();
		title = $('#post-title').val();
		body  = $('#post-body').val();
    this.collection.create({
    	title: title,
    	body: body
    });
    return false;
	},
});