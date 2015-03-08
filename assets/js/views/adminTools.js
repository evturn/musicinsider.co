var AdminTools = Backbone.View.extend({
	el: '#admin-tools',
	template: _.template($('#login-template').html()),
	initialize: function() {
		this.render();
		$('#login-form').hide();
	},
	events: {
		'click #admin' 		 : 'showLogin',
		'click #login-btn' : 'showNewPostBtn'
	},
	showLogin: function() {
		$('#login-form').slideToggle();
	},
	showNewPostBtn: function(e) {
    console.log('we fading!');
		e.preventDefault();
		$('#login-form').remove();
		$('body').animate({scrollTop: '0px'}, 800)
		newPostNav = new NewPostNav();
		newPostNav.render();
		$('#new-post-btn').css({opacity: 0})
  	$('#new-post-btn').fadeTo({opacity: 1}, 5000)
	},
	render: function() {
		this.$el.append(this.template());
		return this;
	},
});