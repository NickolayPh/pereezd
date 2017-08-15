<?php
$to="vash@pereezd-bystro.ru";
$subject= "Предварительная заявка на помощь в переезде";
$message="Телефон: ".$_POST['contact_phone']."\n\r";
$message.="Email: ".$_POST['contact_mail']."\n\r";
$headers="Content-type: text/plain; charset=\"utf-8\"\n";
$headers.="From:Letter from www.pereezd-bystro.ru<vash@pereezd-bystro.ru>";
mail($to, $subject, $message, $headers);
?>
