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
      $subject = "Contact from " . $fromName . " via mindingyourbusinessinc.com";

      // set headers
      $headers  = "From: " . $fromName . "<" . $fromEmail . ">\r\n";
      $headers .= "Reply-to: " . $fromName . "<" . $fromEmail . ">\r\n";
      $headers .= "MIME-Version: 1.0" . "\r\n";
      $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
      $headers .= "CC: " . MailUtil::KELLY_EMAIL . "\r\n";

      //MailUtil::displayMail($to, $subject, $message, $headers); return true;
      return mail($to, $subject, $message, $headers);
    }

    /**
     * Utility method to display what will be mailed.
     */
    private static function displayMail($to, $subject, $message, $headers) {
      echo "<h1>To</h1>
        <p>" . htmlentities($to) . "</p>
        <h1>Subject</h1>
        <p>" . htmlentities($subject) . "</p>
        <h1>Message</h1>
        <p>" . htmlentities($message) . "</p>
        <h1>Headers</h1>
        <p>" . htmlentities($headers) . "</p>";
    }
  }
?>
