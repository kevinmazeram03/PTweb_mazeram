var leMenu = $('#menu');
var leBouton = $('#unfold');

leBouton.click(function (evt) {
    leMenu.toggleClass('open');
    evt.preventDefault();
});

/*MENU fixe*/
var positionElementInPage = $('#menu').offset().top;
			$( window ).resize(function() {
				positionElementInPage = $('#menu').offset().top;
			});
			$(window).scroll(
				function() {
					if ($(window).scrollTop() > positionElementInPage) {
						// fixed
						$('#menu').addClass("fixedMenu");
					} else {
						// unfixed
						$('#menu').removeClass("fixedMenu");
					}
				}
			 
			  );



/*Fluidité ancres*/

$('a[href^="#"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(the_id).offset().top
	}, 'slow');
	return false;
});