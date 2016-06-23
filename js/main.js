var leMenu = $('#menunu');
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
     jQuery('.galerie').hide();
   // On cache la zone 
   // jQuery('.graphisme').hide();
  //  jQuery('.integration').hide();
   // jQuery('.autre').hide();
//jQuery('.webdesign').hide();
  
    //lorsque le lien avec l'ID #.. est cliqué
   jQuery('a.graphismes').click(function()
  {
       jQuery('.integration').hide();
       jQuery('.autre').hide();
       jQuery('.webdesign').hide();
       
      jQuery('.graphisme').show(800);
      return false;
   });
    
    jQuery('a.integrations').click(function()
  {
        jQuery('.graphisme').hide();
        jQuery('.autre').hide();
        jQuery('.webdesign').hide();
        
      jQuery('.integration').show(800);
      return false;
   });
    
    jQuery('a.autres').click(function()
  {
        jQuery('.graphisme').hide();
        jQuery('.integration').hide();
        jQuery('.webdesign').hide();
    
      jQuery('.autre').show(800);
      return false;
   });
    
    jQuery('a.webdesigns').click(function()
  {
        jQuery('.graphisme').hide();
        jQuery('.integration').hide();
        jQuery('.autre').hide();
    
      jQuery('.webdesign').show(800);
      
   });
    
    jQuery('a.touss').click(function()
  {
       
      jQuery('.tous').show(800);
      
   });
    
     jQuery('a.galeries').click(function()
  {
       
      jQuery('.galerie').toggle(800);
      return false;
   });
     
});


/*Liens actif + fluidité du défilement au scroll*/

$(window).load(function(){
    // Cache selectors
    var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()-60,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

    //scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
        } 
    });
});//]]> 



