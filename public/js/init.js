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




