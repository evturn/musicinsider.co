var EditForm = Backbone.View.extend({
	el: '#admin-workbench',
	template: _.template($('#edit-form-template').html()),
	initialize: function() {
		this.listenTo(this.collection);
		this.render();
	},
	events: {
		'click .close' 	 : 'close',
		'click #update'  : 'update'
	},
	render: function() {
		this.$el.prepend(this.template(selectedPost));
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
		postRef = new Firebase(FIREBASE_URL + 'posts/');
		postRef.push({id: selectedPost.id, title: title, body: body}, this.onComplete);
	},
	onComplete: function(error) {
		if (error) {
    	console.log('Synchronization failed');
  	} else {
    console.log('Synchronization succeeded');
    allPosts.fetch();
  	}
	},
	
});