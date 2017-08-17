<?php

if (isset($_POST['name'])){
$to="vash@pereezd-bystro.ru";
$subject= "Заказ переезда";
$message="Заказчик: ".$_POST['name']."\n\r";
$message.="Телефон: ".$_POST['phone']."\n\r";
$message.="Email: ".$_POST['email']."\n\r";
$message.="Вид перевозки: ".$_POST['type-perevozka']."\n\r";
$message.="Дата оценки: ".$_POST['date-ocenka']."\n\r";
$message.="Текст заявки: ".$_POST['message'];
$headers="Content-type: text/plain; charset=\"utf-8\"\n";
$headers.="From:Letter from www.pereezd-bystro.ru<vash@pereezd-bystro.ru>";
mail($to, $subject, $message, $headers);
}
?>
