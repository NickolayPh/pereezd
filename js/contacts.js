$(document).ready(function(){
// Валидация
$('#frm-contacts').validate({
  rules:{
    name:"required",
    phone:"required",
    message:"required",
    email: "email"
  },
  errorPlacement:function(error, element){
    error.fadeTo(0,0);
    error.insertAfter(element.parents('.form-group').find('label'));
    error.fadeTo(700,1);
  },
  highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
          $( element ).next( "span" ).addClass( "glyphicon-remove" ).removeClass( "glyphicon-ok" );
        },
  unhighlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
          $( element ).next( "span" ).addClass( "glyphicon-ok" ).removeClass( "glyphicon-remove" );
        },
  messages: {
    name:"Введите имя!",
    phone: "Укажите номер телефона!",
    message: "Введите текст сообщения",
    email: "Введите корректный адрес!" 
  },
  submitHandler: function (form) {
            data=$("#frm-contacts").serialize();
            $("#name").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#txtMessage").val("");
            $.post('php/mail.php',data, callback);
                  function callback(){
                    $(".form-group").removeClass('has-success');
                    $('span').removeClass("glyphicon-ok");
                    $("#underlay").show();
                    $('.modal-dialog').css('margin-top',($(window).height()-$('.modal-dialog').height())/2);
                    $("#modalclose").modal('show');
                  }            
        }
});
// Валидация закончена

$('#btn-reset').click(function(){

   $('span').removeClass('glyphicon-ok').removeClass('glyphicon-remove');
   $('.form-group').removeClass('has-success').removeClass('has-error');
   $('.error').remove();
   $('#frm-contacts input').val('');
   $('#frm-contacts textarea').val('');

});
});






