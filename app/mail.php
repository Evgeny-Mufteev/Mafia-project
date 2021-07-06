<?php

$email = $_POST['email'];

mail("evgenymufteev@gmail.com", "Заявка с сайта", "E-mail: ".$email ,"From: ".$email."\r\n");

header('Location: /index.html');

?>