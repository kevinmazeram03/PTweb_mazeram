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


/*Barre de compétence avec progression*/

$('.bar-percentage[data-percentage]').each(function () {
  var progress = $(this);
  var percentage = Math.ceil($(this).attr('data-percentage'));
  $({countNum: 0}).animate({countNum: percentage}, {
    duration: 2000,
    easing:'linear',
    step: function() {
      // What todo on every count
    var pct = '';
    if(percentage == 0){
      pct = Math.floor(this.countNum) + '%';
    }else{
      pct = Math.floor(this.countNum+1) + '%';
    }
    progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });
});


/*Menu de la rubrique porfolio*/




jQuery(document).ready(function()
{
   // On cache la zone de texte
   jQuery('#graphisme').hide();
    jQuery('#integration').hide();
    jQuery('#video').hide();
  
    // toggle() lorsque le lien avec l'ID #toggler est cliqué
   jQuery('a#graphismes').click(function()
  {
      jQuery('#integration').hide();
       jQuery('#video').hide();
       
      jQuery('#graphisme').toggle(800);
      return false;
   });
    
    jQuery('a#integrations').click(function()
  {
        jQuery('#graphisme').hide();
       
        jQuery('#video').hide();
      jQuery('#integration').toggle(800);
      return false;
   });
    
    jQuery('a#videos').click(function()
  {
        jQuery('#graphisme').hide();
        jQuery('#integration').hide();
        
      jQuery('#video').toggle(800);
      return false;
   });
     
});


