  $(document).ready(function(){
/* Кнопка рассчитать для авто 10 куб.м */
$('.kalk-10').click(function(){
   
  $('#modal_kalk').modal('show');
  
$("#select_auto").val("10");
$("#select_chas").val("3");
$("#select_gruzchik").val("2");
$("#hidden_pole").val("3900");
$("#itog").html("Стоимость = 3900 руб.");
 return false;
});

/* Кнопка рассчитать для авто 19 куб.м */
$('.kalk-19').click(function(){

$('#modal_kalk').modal('show');

  $("#select_auto").val("19");
  $("#select_chas").val("4");
  $("#select_gruzchik").val("2");
  $("#hidden_pole").val("5600");
  $("#itog").html("Стоимость = 5600 руб.");
  return false;
});

/* Выбор грузовика */
$('#select_auto').change(function(){
   var minzakaz=3900;
   var minchas=3;
   var dopchas=0;
   var dopmovers=0;
   var dopstoimost=0;
   var tarif=950;
   var str='';
   var lorry=$('#select_auto').val();
   var movers=$('#select_gruzchik').val();
   var chas=$('#select_chas').val();
   if (lorry==19){
      minzakaz=5600; 
      minchas=4;
      tarif=1200;
      }
   if (chas>minchas){dopchas=chas-minchas;}
   if (movers>2){dopmovers=movers-2;}
   dopstoimost=dopchas*tarif+dopmovers*chas*400;
   stoimost=minzakaz+dopstoimost;
   $('#hidden_pole').val(stoimost);
   str='Стоимость = '+stoimost+'руб.';
   $('#itog').html(str);
});
$('#select_chas').change(function(){
   var minzakaz=3900;
   var minchas=3;
   var dopchas=0;
   var dopmovers=0;
   var dopstoimost=0;
   var tarif=950;
   var str='';
   var lorry=$('#select_auto').val();
   var movers=$('#select_gruzchik').val();
   var chas=$('#select_chas').val();
   if (lorry==19){
      minzakaz=5600; 
        minchas=4;
        tarif=1200;
      }
   if (chas>minchas){dopchas=chas-minchas;}
   if (movers>2){dopmovers=movers-2;}
   dopstoimost=dopchas*tarif+dopmovers*chas*400;
   stoimost=minzakaz+dopstoimost;
   $('#hidden_pole').val(stoimost);
   str='Стоимость = '+stoimost+'руб.';
   $('#itog').html(str);
});
$('#select_gruzchik').change(function(){
   var minzakaz=3900;
   var minchas=3;
   var dopchas=0;
   var dopmovers=0;
   var dopstoimost=0;
   var tarif=950;
   var str='';
   var lorry=$('#select_auto').val();
   var movers=$('#select_gruzchik').val();
   var chas=$('#select_chas').val();
   if (lorry==19){
    minzakaz=5600; 
        minchas=4;
        tarif=1200;
      }
   if (chas>minchas){dopchas=chas-minchas;}
   if (movers>2){dopmovers=movers-2;}
   dopstoimost=dopchas*tarif+dopmovers*chas*400;
   stoimost=minzakaz+dopstoimost;
   $('#hidden_pole').val(stoimost);
   str='Стоимость = '+stoimost+'руб.';
   $('#itog').html(str);
});
// =========================
$('#kalk-form').validate({
  rules:{
    kalkname:"required",
    kalkphone:"required",
    kalkemail: "email"
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
    kalkname:"Введите имя!",
    kalkphone: "Укажите номер телефона!",
    kalkemail: "Введите корректный адрес!" 
  },
  submitHandler: function (form) {
            data=$("#kalk-form").serialize();
            $("#kalkname").val("");
            $("#kalkphone").val("");
            $("#kalkemail").val("");
            $(".form-group").removeClass('has-success');
            $('span').removeClass("glyphicon-ok");
            $.post('php/mailkalk.php',data, callback);
                  function callback(){
                    $('#modal_kalk').modal('hide');
                    $('#modalclose .modal-dialog').css('margin-top',($(window).height()-$('#modal_kalk .modal-dialog').height())/2);
                    $("#modalclose").modal('show');
                  }            
        }
});
// Валидация закончена

// ====================
}); 