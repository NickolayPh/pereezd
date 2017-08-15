<?php
$to="mailtonick@yandex.ru";
$subject= "Заказ выезда оценщика";
$message="Заказчик: ".$_POST['modal_contact_name']."\n\r";
$message.="Телефон: ".$_POST['modal_contact_phone']."\n\r";
$message.="Email: ".$_POST['modal_contact_mail']."\n\r";
$message.="Вид перевозки: ".$_POST['type-perevozka']."\n\r";
$message.="Дата оценки: ".$_POST['date-ocenka']."\n\r";
$message.="Текст заявки: ".$_POST['modal_text'];
$headers="Content-type: text/plain; charset=\"utf-8\"\n";
$headers.="From:Letter from www.pereezd-bystro.ru<vash@pereezd-bystro.ru>";
mail($to, $subject, $message, $headers);
?>
