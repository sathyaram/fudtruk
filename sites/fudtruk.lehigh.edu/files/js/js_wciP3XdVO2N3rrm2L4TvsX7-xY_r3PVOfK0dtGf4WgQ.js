(function ($) {
	$(window).on('scroll',function() {
	      var scroll = $(window).scrollTop();

	      if (scroll >= 1) {
	        $('body').addClass("scrolled"); 
	      } else {
	        $('body').removeClass("scrolled");
	      }
	 });
	$(document).ready(function() {
		$('header .m').on('click', function(e) {
			e.preventDefault();
			$('html').toggleClass('nav-open');
			$(this).toggleClass('on');
		});
	});

	// Smooth Scrolling for Hashes
	$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top-72
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        // window.location.hash = hash;
	      });
	    } // End if
	    return true;
	  });
	});


	// $(document).on('click', 'ul.menu:nth-child(3) a', function(event){
 //    event.preventDefault();
 //    	console.log('test');
 //    $('html, body').animate({

 //        scrollTop: $( "#block-views-staff-block" ).offset().top
 //    }, 500);
	// });
	/*
	$(window).on('scroll',function() {
		if ($(window).scrollTop() > 1) {
			 $('body').addClass("scrolled");
		} else {
			$('body').removeClass("scrolled");
		}
	});
	*/
}(jQuery));;
