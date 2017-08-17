<?php
if(isset ($_POST['hidden_pole'])){
$to="vash@pereezd-bystro.ru";
$subject= "Калькуляция переезда";
$message="Заказчик: ".$_POST['kalkname']."\n\r";
$message.="Телефон: ".$_POST['kalkphone']."\n\r";
$message.="Email: ".$_POST['kalkemail']."\n\r";
$message.="Вид переезда:".$_POST['hidden_type']."\n\r"; 
$message.="Грузчики: ".$_POST['select_gruzchik']." чел.\n\r";
$message.="Автомобиль: Газель ".$_POST['select_auto']." куб.м \n\r";
$message.="Количество часов: ".$_POST['select_chas']." часов \n\r";
$message.="Стоимость перевозки: ".$_POST['hidden_pole']." рублей";
$headers="Content-type: text/plain; charset=\"utf-8\"\n";
$headers.="From:Letter from www.pereezd-bystro.ru<vash@pereezd-bystro.ru>";
mail($to, $subject, $message, $headers);
}
?>
