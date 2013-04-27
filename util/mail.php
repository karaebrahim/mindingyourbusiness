<?php

  /**
   * Handles automatic e-mailing functionality
   */
  class MailUtil {
    const MARIA_EMAIL = "maria@mindingyourbusinessinc.com";
    const KELLY_EMAIL = "kelly@mindingyourbusinessinc.com";

    /**
     * Sends the specified message w/ the specified subject to the specified set of users.
     */
    public static function sendContactMail($fromName, $fromEmail, $message) {
      $to = MailUtil::MARIA_EMAIL;
      $subject = "Contact email from mindingyourbusinessinc.com";

      // set headers
      $headers  = "From: " . $fromName . "&lt;" . $fromEmail . "&gt;\r\n";
      $headers .= 'MIME-Version: 1.0' . "\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= "CC: " . MailUtil::KELLY_EMAIL . "\r\n";

      //MailUtil::displayMail($to, $subject, $message, $headers); return true;
      return mail($to, $subject, $message, $headers);
    }

    /**
     * Utility method to display what will be mailed.
     */
    private static function displayMail($to, $subject, $message, $headers) {
      echo "<h1>To</h1>
        <p>$to</p>
        <h1>Subject</h1>
        <p>$subject</p>
        <h1>Message</h1>
        <p>$message</p>
        <h1>Headers</h1>
        <p>$headers</p>";
    }
  }

  $displayType = null;
  if (isset($_REQUEST["type"])) {
    $displayType = $_REQUEST["type"];
  }

  if ($displayType == "contact") {
    $name = null;
    if (isset($_REQUEST["name"])) {
      $name = $_REQUEST["name"];
    }
    $email = null;
    if (isset($_REQUEST["email"])) {
      $email = $_REQUEST["email"];
    }
    $msg = null;
    if (isset($_REQUEST["msg"])) {
      $msg = $_REQUEST["msg"];
    }
    MailUtil::sendContactMail($name, $email, $msg);
  }
?>