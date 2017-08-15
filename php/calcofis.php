<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Расчет стоимости офисного переезда</title>

<style type="text/css">
#wrap {
	width: 974px;
	margin-top: 0px;
	margin-right: auto;
	margin-left: auto;
	background-color: #FFF;
	
 }
.topline{
background-image: url(../img/strochka.png);
background-repeat: repeat-x;
padding:15px;
}
#left {
	width: 550px;
	float: left;
	margin-top: 5px;
	margin-right: 3px;
	margin-bottom: 7px;
	margin-left: 7px;
	padding-top: 7px;
	padding-right: 7px;
	padding-bottom: 7px;
	padding-left: 7px;
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
	line-height: 24px;
}
h3 {
	font-family: "Times New Roman", Times, serif;
	font-size: 24px;
	font-weight: normal;
	margin: 1px;
	padding: 1px;
	color: #333;
}
body {
	background-color: #f3f4f6;
	background-image: url(../img/sky.jpg);
	background-repeat: repeat-x;
	font-size:12px;
	font-family:verdana;
	line-height:20px;
	margin:0;
	padding:0;
}
#right {
	float: right;
	width: 355px;
	padding: 7px;
	border: 3px double #996;
	margin-top: 7px;
	margin-right: 7px;
	margin-bottom: 7px;
	margin-left: 3px;
	background-color:#D9CFD8;
}
#footer {
	background-image: url(img/footer.gif);
	background-color:black;
	clear: left;
	height: 95px;
	width: 974px;
	margin-top: 0px;
	margin-right: auto;
	margin-left: auto;
	font-family: Verdana, Geneva, sans-serif;
	font-size: 12px;
	color: #FFC;
	text-align: center;
	text-decoration: none;
}
#footer a {
	color: #FFC;
	
}
h1 {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 38px;
	color: #333;
	font-weight: normal;
	margin: 7px;
	padding: 7px;
	
	

}
h2 {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 18px;
	font-weight: bold;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 1px;
	margin-left: 0px;
	padding-top: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	padding-left: 0px;
}
.txt2 {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 18px;
	font-weight: bold;
	margin-top: 2px;
	margin-bottom: 2px;
	padding-top: 2px;
	padding-bottom: 2px;
}
</style>
</head>
<body>
<?php
 
$stol=$_POST['stol'];
$shkaf=$_POST['shkaf'];
$tumbochka=$_POST['tumbochka'];
$comp=$_POST['comp'];
$stellage=$_POST['stellage'];
$divan=$_POST['divan'];
$kreslo=$_POST['kreslo'];
$koroba=$_POST['koroba'];
$reception=$_POST['reception'];
$sborka=$_POST['sborka'];
$upakovka=$_POST['upakovka'];


$stoimost=$stol*400 + $shkaf*400 + $tumbochka*40 + $comp*40 + $stellage*200 + $divan*400 + $kreslo*40 + $koroba*40 + $reception*900;

  $etagi1=$_POST['etagi1'];
  $etagi2=$_POST['etagi2'];
  $korob1=$_POST['korob1'];
  $korob2=$_POST['korob2'];
  $plenka1=$_POST['plenka1'];
  $lift1=$_POST['lift1'];
  $lift2=$_POST['lift2'];
if ($_POST['lift1'] == 'on') {
$pronos1=1;
$nallift1="есть.";
} else {
$pronos1=$etagi1;
$nallift1="нет.";
}

if ($_POST['lift2'] == 'on'){
$pronos2=1;
$nallift2="есть.";
} else {
$pronos2=$etagi2;
$nallift2="нет.";
}
$koef = 1 + ($pronos1 - 1)/4 + ($pronos2 - 1)/4;

$pogruzka=$koef*$stoimost;
$pogruzka=round ($pogruzka);

if ($pogruzka<=3000){
	$mashina=1750;
	$countmashina="Автомашина Газель 11 куб.м (350 руб. в час) на 4 + 1 час = <b>1750</b> руб. 00 коп.";
	}
elseif (($pogruzka>3000)and($pogruzka<=7000)){
	$mashina=2100;
	$countmashina="Автомашина Газель 20 куб.м (350 руб. в час) на 5 + 1 час = <b>2100</b> руб. 00 коп.";
	}
elseif (($pogruzka>7000)and($pogruzka<=9000)){
	$mashina=2350;
	$countmashina="Автомашина Газель 20 куб.м (350 руб. в час) на 6 + 1 час = <b>2350</b> руб. 00 коп.";
	}
elseif (($pogruzka>9000)and($pogruzka<=11000)){
	$mashina=2700;
	$countmashina="Автомашина Газель 20 куб.м (350 руб. в час) на 7 + 1 час = <b>2700</b> руб. 00 коп.";
	}
elseif (($pogruzka>11000)and($pogruzka<=15000)){
	$mashina=5600;
	$countmashina="Автомашина Мерседес 36 куб.м (700 руб. в час) на 7 + 1 час = <b>5600</b> руб. 00 коп.";
	}
elseif (($pogruzka>15000)and($pogruzka<=18000)){
	$mashina=6300;
	$countmashina="Автомашина Мерседес 36 куб.м (700 руб. в час) на 8 + 1 час = <b>6300</b> руб. 00 коп.";
	}
elseif (($pogruzka>18000)and($pogruzka<=25000)){
	$mashina=7000;
	$countmashina="Автомашина Мерседес 36 куб.м (700 руб. в час) на 9 + 1 час = <b>7000</b> руб. 00 коп.";
	}
elseif (($pogruzka>25000)and($pogruzka<=30000)){
	$mashina=7200;
	$countmashina="Автомашина Мерседес 52 куб.м (800 руб. в час) на 8 + 1 час = <b>7200</b> руб. 00 коп.";
	}
elseif (($pogruzka>30000)and($pogruzka<=35000)){
	$mashina=8000;
	$countmashina="Автомашина Мерседес 52 куб.м (800 руб. в час) на 9 + 1 час = <b>8000</b> руб. 00 коп.";
	}
elseif (($pogruzka>35000)and($pogruzka<=40000)){
	$mashina=8800;
	$countmashina="Автомашина Мерседес 52 куб.м (800 руб. в час) на 10 + 1 час = <b>8800</b> руб. 00 коп.";
	}
else {
	$mashinacolichestvo= round($pogruzka/30000);
	$mashina=$mashinacolichestvo*8000;
	$countmashina=$mashinacolichestvo."автомашины Мерседес 52 куб.м (800 руб. в час) на 9 + 1 час = <b>".$mashina."</b> руб. 00 коп.";
	}

$itog=$pogruzka+$mashina;

if ($sborka!=0) {$stoimostsborki= ($itog/100)*25;}
$stoimostsborki=round($stoimostsborki);
if ($upakovka!=0) {$stoimostupakovki=($itog/100)*20;}
$stoimostupakovki=round($stoimostupakovki);
$gruzchiki=$pogruzka+$stoimostsborki+$stoimostupakovki;
$itog=$gruzchiki+$mashina+$korob1*55+$korob2*75+$plenka1*30;
$cenaupakovka=$korob1*55+$korob2*75+$plenka1*30;

if ($itog<4000) {$itog=4000;}

echo "<div id='wrap'>";

echo "<img src='../img/zastavka.jpg'>";
echo "<div class='topline'><span class='txt2'><a href='../../kalk.html'>Назад</a></span></div>";
echo "<h1>Коммерческое предложение</h1>";
echo "<div id='left'><h3>Офисный переезд</h3><hr>";

echo "<b>Исполнитель:</b> ООО ПЕРЕЕЗД-БЫСТРО";
echo "<br>ОГРН 1137746836237";
echo "<br>ИНН 7724890103";
echo "<br>КПП 772401001";
echo "<br>г. Москва, 107113, Хлебозаводский проезд, д. 7, стр.9, офис 901";
echo "<br>р/с  407 028 107 000 000 11 516";
echo "<br>в КБ «МЕЖРЕГИОНАЛЬНЫЙ ПОЧТОВЫЙ БАНК» ООО";
echo "<br>к/с 301 018 102 000 000 00 775";
echo "<br>БИК  044 585 775";


echo "<b><br><br>Адрес загрузки:</b>&nbsp;".$etagi1."-й этаж."; 
if ($etagi1!=1) {echo "&nbsp;Лифт:&nbsp;".$nallift1;}
echo "<br><b>Адрес разгрузки:</b>&nbsp;".$etagi2."-й этаж."; 
if ($etagi2!=1) {echo "&nbsp;Лифт:&nbsp;".$nallift2;}

echo "<b><br><br>Объем производимых работ:</b>";
echo "<br>- автоперевозка";
if ($sborka!=0) {echo "<br>- разборка и сборка мебели";}
if ($upakovka!=0) {echo "<br>- упаковка мебели и оргтехники";}
echo "<br>- погрузо-разгрузочные работы";

echo "<br><br><b>Объем перевозимого имущества:</b>";

if ($stol!=0) {echo "<br>Стол офисный&nbsp;-&nbsp;".$stol." шт.";}
if ($shkaf!=0) {echo "<br>Шкаф&nbsp;-&nbsp;".$shkaf." шт.";}
if ($tumbochka!=0) {echo "<br>Тумба&nbsp;-&nbsp;".$tumbochka." шт.";}
if ($comp!=0) {echo "<br>Компьютер&nbsp;-&nbsp;".$comp." шт.";}
if ($reception!=0) {echo "<br>Ресепшн&nbsp;-&nbsp;".$reception." шт.";}
if ($stellage!=0) {echo "<br>Стеллаж&nbsp;-&nbsp;".$stellage." шт.";}
if ($kreslo!=0) {echo "<br>Стулья и кресла&nbsp;-&nbsp;".$kreslo." шт.";}
if ($divan!=0) {echo "<br>Диван&nbsp;-&nbsp;".$divan." шт.";}
if ($koroba!=0) {echo "<br>Коробки с документами&nbsp;-&nbsp;".$koroba." шт.";}
if ($stol==0 and $shkaf==0 and $tumbochka==0 and $comp==0 and $reception==0 and $stellage==0 and $kreslo==0 and $koroba==0 and $divan==0) {
echo "<br><br><i>Объем перевозимого имущества не указан!</i>";}

echo "<br><br><b>Стоимость услуг:</b><br>";
echo $countmashina;
echo "<br>Услуги грузчиков, сборщиков мебели, упаковщиков: <b>".$gruzchiki."</b> руб. 00 коп.";
if ($korob1!=0||$korob2!=0||$plenka1!=0) {echo  "<br><br><b>Заказ упаковки:</b>";}
if ($korob1!=0) {echo  "<br>Количество коробок 40x40x60 см:&nbsp;".$korob1."&nbsp;шт. по 55 руб. = <b>".($korob1*55)."</b> руб. 00 коп.";}
if ($korob2!=0) {echo "<br>Количество коробок 50x50x50 см:&nbsp;". $korob2."&nbsp;шт. по 75 руб. = <b>".($korob2*75)."</b> руб. 00 коп.";}
if ($plenka1!=0) {echo  "<br>Заказано воздушно-пузырчатой пленки:&nbsp;".$plenka1."&nbsp;м по 30 руб. = <b>".($plenka1*30)."</b> руб. 00 коп.";}

echo  "<br><br><span class='txt2'>Итог:</span><br>";

if ($itog==4000){

if ($cenaupakovka!=0){$upakovkaplus=" плюс стоимость упаковочного материала. <span class='txt2'><br> Итоговая цена: ".(4000+$cenaupakovka)." руб. 00 коп.</span>";}

echo "Расчетная стоимость Вашего переезда равна стоимости минимального заказа (машина и грузчики) <span class='txt2'> = 4000 руб.</span>".$upakovkaplus;

}

else 
{echo "Стоимость Вашего переезда <span class='txt2'>= ".$itog." руб.</span> ";
}
echo "<br><br><span class='txt2'><a href='../../kalk.html'>Назад</a></span>";
echo "</div>";

$form_block = "
<form method=\"post\" action=\"$PHP_SELF\">
<p><strong>Ваше имя:</strong><br>
<input type=\"text\" name=\"name\" size=40 value=\"$_POST[name]\"</p>
<p><strong>Ваш email:</strong><br>
<input type=\"text\" name=\"email\" value=\"$_POST[email]\"size=40</p>
<p><strong>Телефон:</strong><br>
<input type=\"text\" name=\"comments\" value=\"$_POST[comments]\"size=40</p>
<input type=\"hidden\" name=\"op\" value=\"ds\">

<input type=\"hidden\" name=\"stol\" value=$stol>
<input type=\"hidden\" name=\"shkaf\" value=$shkaf>
<input type=\"hidden\" name=\"tumbochka\" value=$tumbochka>
<input type=\"hidden\" name=\"comp\" value=$comp>
<input type=\"hidden\" name=\"stellage\" value=$stellage>
<input type=\"hidden\" name=\"divan\" value=$divan>
<input type=\"hidden\" name=\"kreslo\" value=$kreslo>
<input type=\"hidden\" name=\"reception\" value=$reception>
<input type=\"hidden\" name=\"koroba\" value=$koroba>

<input type=\"hidden\" name=\"sborka\" value=$sborka>
<input type=\"hidden\" name=\"upakovka\" value=$upakovka>

<input type=\"hidden\" name=\"etagi1\" value=$etagi1>
<input type=\"hidden\" name=\"etagi2\" value=$etagi2>
<input type=\"hidden\" name=\"korob1\" value=$korob1>
<input type=\"hidden\" name=\"korob2\" value=$korob2>
<input type=\"hidden\" name=\"plenka1\" value= $plenka1>
<input type=\"hidden\" name=\"lift1\" value=$lift1>
<input type=\"hidden\" name=\"lift2\" value=$lift2>
<p><input type=\"submit\" name=\"submit\" value=\"Подтвердить цену переезда!\"></p><br>
</form>";
$mes = "
Офисный переезд: \n
Сборка мебели: $sborka\n
Упаковка мебели и оргтехники: $upakovka\n
Стол: $stol\n
Шкаф: $shkaf\n
Тумба: $tumbochka\n
Компьютер: $comp\n
Диван: $divan\n
Стеллаж: $stellage\n
Стулья и кресла: $kreslo\n
Ресепшн: $reception\n
Короба: $koroba\n
Этаж загрузки: $etagi1\n
Наличие лифта: $lift1\n
Этаж выгрузки: $etagi2 \n
Наличие лифта: $lift2 \n
Коробки мал.: $korob1\n
Коробки бол.: $korob2\n
Пленка: $plenka1\n
Стоимость: $itog\n
";
echo "<div id='right'>";
if ($_POST[op] != "ds") {
echo "$form_block";
} else if ($_POST[op] =="ds") {
if ($_POST[name] == "") {
	$name_err = "<font color=blue>Пожалуйста, введите свое имя!</font><br>";
	$send="no";
}
if ($_POST[email] == ""  and  $_POST[comments] == "")  {
	$email_err = "<font color=blue>Пожалуйста, введите контактную информацию: e-mail или телефон!</font><br>";
	$send="no";
}
if ($send !="no") {
$subject =  $_POST[name]; 
$msg = "email sent from www.pereezd-bystro.ru\n";
$msg .="Name:".$_POST[name];
$msg .="Email: $_POST[email]\n";
$msg .="Phone: $_POST[comments]\n";
$msg .= $mes;  
$to = "vash@pereezd-bystro.ru";
$mailheaders="Content-type: text/plain; charset=\"utf-8\"\n";
$mailheaders .= "From: Zakaz on-line www.pereezd-bystro.ru <vash@pereezd-bystro.ru>\n";
$mailheaders .= "Reply-To: $_POST[email]\n";
mail ($to, $subject, $msg, $mailheaders);
	echo "<h2>Ваша заявка принята. Спасибо!</h2><br><br><span class='txt2'><a href='../../kalk.html'>Вернуться в калькулятор</a></span>";

} else if ($send == "no") {
	echo "$name_err";
	echo "$email_err";
	echo "$message_err";
	echo "$form_block";
     }

}
echo "</div>";
echo "<div id='footer'><br>ООО &#8220;<a href=index.html>Переезд-Быстро</a>&#8221;, 2006 г.</div>";
?>

</body>
</html>

