<?php

$firstname = htmlspecialchars($_POST['firstname']);
$lastname  = htmlspecialchars($_POST['lastname']);
$email     = htmlspecialchars($_POST['email']);
$message   = htmlspecialchars($_POST['message']);

// Destination email address
$destination = 'hello@baptistevillemur.fr';

// Filter buggy servers
if ( !preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $destination) ) {
	$br = "\r\n";
} else {
	$br = "\n";
}

// Declare text and HTML formats
$message_txt = $message;
//$message_html = "<html><head></head><body><b>Salut à tous</b>, voici un e-mail envoyé par un <i>script PHP</i>.</body></html>";
 
// Create boundary
$boundary = "-----=".md5(rand());
 
// Define subject
$subject = "Formulaire de contact";
// ====
 
// Create email header
$header = "From: \"" . $firstname . " " . $lastname . "\"<" . $email . ">".$br;
$header.= "Reply-to: \"" . $firstname . " " . $lastname . "\" <" . $email . ">".$br;
$header.= "MIME-Version: 1.0".$br;
$header.= "Content-Type: multipart/alternative;".$br." boundary=\"$boundary\"".$br;
 
// Create message.
$message = $br."--".$boundary.$br;

// Add message text format
$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$br;
$message.= "Content-Transfer-Encoding: 8bit".$br;
$message.= $br.$message_txt.$br;
$message.= $br."--".$boundary.$br;

// Add message HTML format
/*$message.= "Content-Type: text/html; charset=\"ISO-8859-1\"".$br;
$message.= "Content-Transfer-Encoding: 8bit".$br;
$message.= $br.$message_html.$br;
$message.= $br."--".$boundary."--".$br;
$message.= $br."--".$boundary."--".$br;*/
 
// Sending email
$sending = mail($destination, $subject, $message, $header);

$mail = array(
    'destination' => $destination,
    'subject'     => $subject,
    'message'     => $message,
    'header'      => $header
);

echo( json_encode(array( 'sending' => $sending, 'mail' => $mail) ));



