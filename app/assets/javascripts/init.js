(function($){
  $(function(){
 		$('.slider').slider({full_width: true});
    $('.button-collapse').sideNav();
     $('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15 // Creates a dropdown of 15 years to control year
  	});
    $('select').material_select();
    $('.modal-trigger').leanModal();
    $(".openModal").click(function(){
    	$("#"+$(this).data("for")+"Modal").openModal();
    	$('.button-collapse').sideNav('hide');
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space