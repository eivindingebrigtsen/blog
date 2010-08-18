$(function(){
	var height = 0;
	var posts = $('#articles .post');
	
	
	posts.each(function(){
		var h = $(this).height();
		if( height < h ){
			height = h;
		}
	}).height(height);
	posts.click(function(e){
		var link = $(this).find('a:first').attr('href');
		window.location = link;
	}).hover(function(e){
		// mouseover
		$(this).addClass('hover');
	}, function(e){
		// mouseout
		$(this).removeClass('hover');
	});
});

$(function(){
$.twitterSearchPlugin = function(options){
		var self = this;
		self.defaults = $.extend({}, {
			query: '%23gspkurs',
			limit: 3
		}, options);

// Løsning på bug i Chrome/Safari
// Ta vekk, script insertion, erstattet med jQuery sin ajax for JsonP 
		$.ajax({
			url: 'http://search.twitter.com/search.json?q='+ self.defaults.query +'',
			dataType: 'jsonp',
			jsonpCallback: 'twitter'
		});

}({query: '%23bekk', limit: 10});

		window.twitter = function(data){
		var results = data.results;
		$(results).slice(0,self.defaults.limit).each(function(){
		var msg = this.text+ ' ';
			msg = msg.replace(/(#[^\s]+)/g, '<span class="tag">$1</span> ');
			msg = msg.replace(/(@[^\s]+)/g, '<span class="user">$1</span> ');
			msg = msg.replace(/(http[^\s]+)/g, '<a href="$1">$1</a> ');
			$('<li><p>'+( msg )+'</p><small>'+this.from_user+'</small></li>')
			.appendTo('#twitter');
			});
		};

	$('#articles').newsTicker({animate: 1200});

});








