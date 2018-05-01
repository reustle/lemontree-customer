;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		$('.accordion__head').on('click', function(e){
			e.preventDefault();

			$(this).siblings('.accordion__body').slideToggle().closest('.accordion').toggleClass('open');
		});
		
	});

})(jQuery, window, document);
