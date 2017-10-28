<?php

header("Access-Control-Allow-Origin: *");

$firstname = $_POST['firstname'];
$lastname  = $_POST['lastname'];
$email     = $_POST['email'];
$message   = utf8_decode($_POST['message']);

$destination = 'hello@baptistevillemur.fr';

$subject     = 'Formulaire de contact';

$headers     = 'From: '.$firstname.' '.$lastname.' <'.$email . "> \r\n";
$headers    .= 'Reply-to: '.$firstname.' '.$lastname.' <'.$email . "> \r\n";

$send = mail($destination, $subject, $message, $headers);

echo json_encode( array($send) );
