// JavaScript Document
$(document).ready(function(){
/*предварительная отправка формы*/	
$('#contact_form').submit(function(e){
	e.preventDefault();
	var cname=$('#contact_name').val();
	var cphone=$('#contact_phone').val();
	var cocenka=$('#check_ocenka').val();
	if((cphone!="")&(cname!="")){
		var data=$('#contact_form').serialize();
		$.post('php/mailhome.php', data, function(){
		$('#contact_phone').val("");
		$('#contact_mail').val("");
		$('#modal_contact_name').val(cname);
		$('#modal_contact_phone').val(cphone);

		var y=$('body').scrollTop();
    	$('.modal_home').css("top", y+220);

		$('.modal_home').fadeIn(500);
		$('#underlay').fadeTo(500,0.7);
		$('#underlay').fadeIn(500);
		 
		});
	} else{
		var y=$('body').scrollTop();
    	$('.modal_home').css("top", y+220);
		$('.modal_home').fadeIn(500);
		$('#underlay').fadeTo(500,0.7);
		$('#underlay').fadeIn(500);
		 
	}
});
	$('#modal_contact_form').submit(function(){
		var data=$('#modal_contact_form').serialize();
		$.post('php/mailocenka.php',data, function(){
			$('.modal_home').fadeOut(500);
			
			var y=$('body').scrollTop();
            $('#modal-close').css("top", y+220);

			$('#modal-close').fadeIn(500);	
			});
			return false;
		});
	$('#close').click(function(){
		$('#modal-close').fadeOut(500);
		$('#underlay').fadeOut(500);
		});	
	$('#close-button').click(function(){
		$('.modal_home').fadeOut(500);
		$('#underlay').fadeOut(500);
		});
	
});