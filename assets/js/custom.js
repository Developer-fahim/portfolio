
//menu working here		
$( ".nav-link" ).on( "click", function() {
		  $('.menu-open, .nav-container').removeClass('active');
		  
});	
// navigation link active class add to click

$(".abtbtn0").on("click", function(){
	
	$('.abtbtn').addClass(".active");
	$('.hmebtn').removeClass(".active");
	
	
	
})












// auto scrolling

if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}













	
		
//	contact box working here
  /*  function loadEvents() {
        var mailString;
        function updateMailString() {
            mailString = '?subject=' + encodeURIComponent($('#subject').val())
                + '&body=' + encodeURIComponent("Name :: " + '"' + $('#name').val() + '"' + "   ----   " ) + encodeURIComponent("Number :: " + '"' + $('#number').val() + '"' + "   ----" ) +encodeURIComponent("   Description :: " + '"' + $('#message').val()) + '"';
            $('#mail-link').attr('href',  'mailto:thetazpresents@gmail.com' + mailString);
        }
        $( "#subject" ).focusout(function() { updateMailString(); });
        $( "#message" ).focusout(function() { updateMailString(); });
        updateMailString();
    } */








