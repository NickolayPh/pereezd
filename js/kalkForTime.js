  $(document).ready(function(){
/* Кнопка рассчитать для авто 10 куб.м */
$('.kalk-10').click(function(){
  var y=$('body').scrollTop();
  $('#modal_kalk').css("top", y+220);
  $('#modal_kalk').fadeIn(500);
  $('#underlay').fadeTo(500,0.5);
  $('#underlay').fadeIn(500);
  $("#select_auto").val("10");
  $("#select_chas").val("3");
  $("#select_gruzchik").val("2");
  $("#hidden_pole").val("3900");
  $("#itog").html("Стоимость = 3900 руб.");
  return false;
});
/* Кнопка рассчитать для авто 19 куб.м */
$('.kalk-19').click(function(){
   var y=$('body').scrollTop();
  $('#modal_kalk').css("top", y+220);

  $('#modal_kalk').fadeIn(500);
  $('#underlay').fadeTo(500,0.5);
  $('#underlay').fadeIn(500);
  $("#select_auto").val("19");
  $("#select_chas").val("4");
  $("#select_gruzchik").val("2");
  $("#hidden_pole").val("5600");
  $("#itog").html("Стоимость = 5600 руб.");
  return false;
});
/* Кнопка закрыть в окне калькулятора */
$('#close_button').click(function(){
  $('#modal_kalk').fadeOut(500);
  $('#underlay').fadeOut(500);  
  return false;
});
/* Кнопка подтвердить цену в окне калькулятора*/
$('#kalk-form').submit(function(){
    var data=$('#kalk-form').serialize();
    $.post('php/mailkalk.php', data, function(){
    $('#modal_kalk').fadeOut(500);

    var y=$('body').scrollTop();
    $('#modal-close').css("top", y+220);

    $('#modal-close').fadeIn(500);
    });
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
}); 