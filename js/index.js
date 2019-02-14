$(document).ready(function(){
	var toggleCheck=1;
    function showAll(){
			$('.show1').css('opacity',1);
			$('.show2').css('opacity',1);
			$('.show3').css('opacity',1);
			$('.show4').css('opacity',1);
			$('.show5').css('opacity',1);
			$('.show6').css('opacity',1);
			$('.show7').css('opacity',1);
//			$('.btn-minus').css('opacity',1);
//			$('.btn-align').css('opacity',0);
    }
    function hideAll(){
			$('.show1').css('opacity',0);
			$('.show2').css('opacity',0);
			$('.show3').css('opacity',0);
			$('.show4').css('opacity',0);
			$('.show5').css('opacity',0);
			$('.show6').css('opacity',0);
			$('.show7').css('opacity',0);
//			$('.btn-minus').css('opacity',0);
//			$('.btn-align').css('opacity',1);
		}
		$(".btn-align").click(function()
                             {
            if (toggleCheck==1) //when button is clicked
                {
                    showAll();
                    toggleCheck=0; 
                    $('.btn-align').addClass('rotateButton');
                }
            else
                {
                    hideAll();
                    toggleCheck=1;
                    $('.btn-align').removeClass('rotateButton');
                }
        });		
});
				
