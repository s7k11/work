$(document).ready(function(){
		$(".btn-align").click(function(){
			$('.show1').css('opacity',1);
			$('.show2').css('opacity',1);
			$('.show3').css('opacity',1);
			$('.show4').css('opacity',1);
			$('.show5').css('opacity',1);
			$('.show6').css('opacity',1);
			$('.show7').css('opacity',1);
			$('.btn-minus').css('opacity',1);
			$('.btn-align').css('opacity',0);
		});
	$(".btn-minus").click(function(){
			$('.show1').css('opacity',0);
			$('.show2').css('opacity',0);
			$('.show3').css('opacity',0);
			$('.show4').css('opacity',0);
			$('.show5').css('opacity',0);
			$('.show6').css('opacity',0);
			$('.show7').css('opacity',0);
			$('.btn-minus').css('opacity',0);
			$('.btn-align').css('opacity',1);
		});
			
});
		
