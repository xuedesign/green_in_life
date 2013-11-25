// JavaScript Document
$(function(){
	var $showImage = $('#show-image');
	$('.box_thumbs a').click(function(){
		var $this = $(this), 
			_src = $this.attr('href');

		if($showImage.attr('src') != _src){
			$showImage.stop(false, true).fadeTo(0, 0).attr('src', _src).stop(false, true).fadeTo(400, 1);
		}
	}).click(function(){
		return false;
	});
});