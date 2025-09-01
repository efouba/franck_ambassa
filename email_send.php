<?php
if ($_POST) {
    $to = "giefouba@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];
    
    mail($to, $subject, $message, $headers);
    echo "Email envoyé avec succès";
    header("Location: index.html");
}
?>