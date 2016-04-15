

$(document).ready(function(){

	$('.lightbox-link').on('click', function(){
		$('body').append('<div id="shade"></div>');
		$('body').append('<img id="light-image" src="images/whale.png"/>');
		$('#shade').on('click', function(){
			$('#shade').remove();
			$('#light-image').remove();
		})
		$('#light-image').on('click', function(){
			$('#shade').remove();
			$('#light-image').remove();
		})
	})
})