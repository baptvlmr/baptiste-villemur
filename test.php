<?php
$string = 'Ceci est un test. & é à â û ï';

echo utf8_decode($string);
echo PHP_EOL;
echo utf8_encode($string);

/*

// Destination email address
$destination = 'hello@baptistevillemur.fr';

// Filter buggy servers
if ( !preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $destination) ) {
	$br = "\r\n";
} else {
	$br = "\n";
}

// Declare text format
$message_txt = $message;
 
// Create boundary
$boundary = "-----=".md5(rand());
 
// Define subject
$subject = "Formulaire de contact";
// ====
 
// Create email header
$header = "From: \"" . $firstname . " " . $lastname . "\"<" . $email . ">".$br;
$header.= "Reply-to: \"" . $firstname . " " . $lastname . "\" <" . $email . ">".$br;
$header.= "MIME-Version: 1.0".$br;
$header.= "Content-Type: multipart/alternative; charset=UTF-8".$br." boundary=\"$boundary\"".$br;
 
// Create message.
$message = $br."--".$boundary.$br;

// Add message text format
$message.= "Content-Type: text/plain; charset=UTF-8".$br;
$message.= "Content-Transfer-Encoding: 8bit".$br;
$message.= $br.$message_txt.$br;
$message.= $br."--".$boundary.$br;
 
// Sending email
$sending = mail($destination, $subject, $message, $header);

$mail = array(
    'destination' => $destination,
    'subject'     => $subject,
    'message'     => $message,
    'header'      => $header
);

echo( json_encode(array( 'sending' => $sending, 'mail' => $mail) ));

*/