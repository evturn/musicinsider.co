var EditForm = Backbone.View.extend({
	el: '.admin-dashboard',
	template: _.template($('#edit-form-template').html()),
	initialize: function() {
		self = this;
		this.listenTo(this.collection);
		this.render();
	},
	events: {
		'click .close' 	 					: 'exit',
		'click .btn-admin-update' : 'update',
		'click .btn-admin-delete' : 'clear'
	},
	render: function() {
		this.$el.prepend(this.template(selectedPost));
		return this;
	},
	exit: function() {
		$('#edit-form').fadeOut('fast', function() {
  		$('#edit-form').remove();
    });
	},
	update: function(e) {
		e.preventDefault();
		title = $('#post-title').val();
		body  = $('#post-body').val();
		postRef = new Firebase(FIREBASE_URL + 'posts/' + selectedPost.id);
		postRef.update({title: title, body: body}, this.onComplete);
	},
	onComplete: function(error) {
		if (error) {
    	console.log('Synchronization failed');
  	} else {
    console.log('Synchronization succeeded');
    allPosts.fetch();
    self.exit();
  	}
	},
	clear: function(e) {
		e.preventDefault();
		deleteRef 	 = new Firebase(FIREBASE_URL + 'posts/' + selectedPost.id);
		console.log(deleteRef);
		deleteRef.remove(this.onComplete);
	},
});