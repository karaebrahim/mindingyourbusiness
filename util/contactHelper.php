<?php
  require_once "mail.php";

  class ContactHelper {

    /**
     * Displays the input fields (name, email, comments) to send an email.
     */
    public static function displayContactForm($divName, $headerTag) {
      echo "  <div id='" . $divName . "'>
                <" . $headerTag . ">contact</" . $headerTag . ">
                <fieldset class=\"personal-info\">
                  <label for=\"name\">name</label>
                  <input type=\"text\" name=\"name\" id=\"name\" required />
                  <label for=\"email\">email</label>
                  <input type=\"email\" name=\"email\" id=\"email\" required />
                </fieldset>
                <fieldset class=\"comment-info\">
                  <label for=\"comments\" class=\"column\">questions/comments</label>
                  <textarea id=\"comments\" class=\"comments\"
                            name=\"comments\" required></textarea>
                  <input id=\"emailButton\" class=\"btn\" type=\"submit\"
                         name=\"originalEmailSubmit\" value=\"Send email\" />
                </fieldset>
              </div>";
    }

    /**
     * Displays a modal allowing the user to confirm the email they'd like to send. Note that the
     * modal is initialized as hidden.
     */
    public static function displayEmailModal() {
      echo "<div id='emailModal' class='modal hide fade' tabindex='-1' role='dialog'
                 aria-labelledby='myModalLabel' aria-hidden='false' style='display:none;'>
            <div class='modal-header'>
                <button type='button' class='close' data-dismiss='modal'
                        aria-hidden='true'>&times;</button>
                <h3 id='myModalLabel' class='center'>Confirm Email</h3>
            </div>
            <div class='modal-body'>
                <p>Please confirm that you'd like to send the following email to
                   minding your business, inc.:</p>";
      if (isset($_POST["originalEmailSubmit"])) {
        // If user tries to send contact email, modal will show what will be emailed.
        echo "<strong>From:</strong> " . stripslashes(trim($_POST["name"])) . " &lt;" .
             stripslashes(trim($_POST["email"])) . "&gt;<br/><br/>" .
             nl2br(stripslashes($_POST["comments"]));
        echo "<input type='hidden' name='confName'
                     value=\"" . stripslashes(trim($_POST["name"])) . "\" />";
        echo "<input type='hidden' name='confEmail'
                     value=\"" . stripslashes(trim($_POST["email"])) . "\" />";
        echo "<input type='hidden' name='confComments'
                     value=\"" . stripslashes($_POST["comments"]) . "\" />";
      }
      echo "</div>
            <div class='modal-footer'>
                <button class='btn' data-dismiss='modal' aria-hidden='true'>Cancel</button>
                <input id=\"emailButton\" class=\"btn btn-primary\" type=\"submit\"
                       name=\"confirmEmailSubmit\" value=\"Send email\" />
            </div>
        </div>";
    }

    /**
     * If user tries to send contact email, show modal and remove form validation.
     */
    public static function showModalIfUserSubmits() {
      if (isset($_POST["originalEmailSubmit"])) {
        echo "<script>
                $('#name').removeAttr('required');
                $('#email').removeAttr('required');
                $('#comments').removeAttr('required');
                $('#emailModal').modal('toggle');
              </script>";
      }
    }

    /**
     * If user confirms email, send email and display confirmation message if successful.
     */
    public static function sendMailIfUserConfirms() {
      if (isset($_POST["confirmEmailSubmit"])) {
        if (MailUtil::sendContactMail(stripslashes(trim($_POST["confName"])),
            stripslashes(trim($_POST["confEmail"])), nl2br(stripslashes($_POST["confComments"])))) {
          echo "<div id='emailMessageDiv' class='alert alert-success center'>
                  <button type='button' class='close' data-dismiss='alert'>&times;</button>
                  <strong>Email sent successfully! Thanks!</strong>
                </div>";
        } else {
          // If mail fails, display error message.
          echo "<div id='emailMessageDiv' class='alert alert-error center'>
                  <button type='button' class='close' data-dismiss='alert'>&times;</button>
                  <strong>An error occurred while sending the email. Please try again.</strong>
                </div>";
        }
      }
    }
  }
?>
