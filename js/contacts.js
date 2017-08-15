$(document).ready(

	function(){
			$("#frm-contacts").submit(
			function(event){
				event.preventDefault();
				$(".errors").text("");
				var valid=true;
				var name=$("#name-field").val();
				var phone=$("#phone-field").val();
				var email=$("#email-field").val();
				var message=$("#message-field").val();
					if (name==""){
					$("#errName").text("Введите имя!");
					valid=false;
				}
				if (phone==""){
					$("#errPhone").text("Введите номер телефона!");
					valid=false;
				}
				if (message==""){
					$("#errMessage").text("Введите текст сообщения!");
					valid=false;
				}
				if (valid==false){
					return false;
				} // Выход из программы. Не пройдена валидация.
				data=$("#frm-contacts").serialize();
				$("#name-field").val("");
				$("#phone-field").val("");
				$("#email-field").val("");
				$("#message-field").val("");
				$.post('php/mail.php',data, callback);
		}); // Конец submit
			function callback(){
					$("#underlay").show();
					var y=$('body').scrollTop();
    				$('#modal-close').css("top", y+220);
					$("#modal-close").show();
				}
		$('#close').click(function(){
		$('#modal-close').fadeOut(500);
		$('#underlay').fadeOut(500);
		});	

		$('#reset-btn').click(function(){
			
		$("#errPhone").text("");
		$("#errName").text("");
		$("#errMessage").text("");
	});
	} // конец document.ready
); 
