<!DOCTYPE html>

<?php
  require_once 'util/layout.php';
  require_once 'util/mail.php';

  LayoutUtil::displayHeader();
?>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <form name="contactForm" action="contact.php" method="post">
        <div id="wrapper">

<?php
  LayoutUtil::displayNavigationBar();
?>

            <div id="header">
                <img src="img/iStock-poppies.jpg" />
            </div><!-- end #header -->

<?php
  if (isset($_POST["confirm"])) {
    // If sending mail is confirmed, then send it & display confirmation message.
    if (MailUtil::sendContactMail(
        $_POST["confName"], $_POST["confEmail"], $_POST["confComments"])) {
      echo "<div id='emailMessageDiv' class='alert alert-success center'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              <strong>Email sent successfully! Thank you!</strong>
            </div>";
    } else {
      echo "<div id='emailMessageDiv' class='alert alert-error center'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              <strong>An error occurred while sending the email. Please try again.</strong>
            </div>";
    }
  }
?>

            <div id="content">
                <div id="form">
                    <h1>contact</h1>
                    <fieldset class="personal-info">
                        <label for="name">name</label>
                        <input type="text" name="name" id="name" required />
                        <label for="email">email</label>
                        <input type="email" name="email" id="email" required />
                    </fieldset>
                    <fieldset class="comment-info">
                        <label for="comments" class="column">questions/comments</label>
                        <textarea id="comments" class="comments" name="comments" required></textarea>
                        <input id="emailButton" class="btn" type="submit" name="submit"
                               value="Send email" />
                    </fieldset>
                </div>
                <div id="directions">
                    <h1>directions</h1>
                    <h2>7 Tee Drive, Portland, ME 04103</h2>
                    <h3>From I-95, North or South</h3>
                    <p>Enter the Maine Turnpike and exit the highway at Exit 48, Portland/ Westbrook. Turn right at Riverside Street, travel approximately 1 mile, and turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
                    <h3>From downtown Portland</h3>
                    <p>Head southwest on Congress Street aproximately 0.4 miles, and then turn right at Forest Avenue. After 4.6 miles, turn right at Riverside Street, and after 0.7 miles, turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
                    <small>To find via GPS, enter 1039 Riverside Street, Portland, ME 04103</small>
                    <iframe width="500" height="350" frameborder="2" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;output=embed"></iframe>
                    <br />
                    <small><a href="http://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;source=embed" style="color:#f0542e;text-align:left" target="_blank">View Larger Map</a></small>
                </div>
            </div><!-- end #main -->

<?php
  LayoutUtil::displayFooter();
?>

        </div><!-- end #wrapper -->

        <div id='emailModal' class='modal hide fade' tabindex='-1' role='dialog'
                 aria-labelledby='myModalLabel' aria-hidden='false' style='display:none;'>
            <div class='modal-header'>
                <button type='button' class='close' data-dismiss='modal'
                        aria-hidden='true'>&times;</button>
                <h3 id='myModalLabel' class='center'>Confirm Email</h3>
            </div>
            <div class='modal-body'>
                <p>Please confirm that you'd like to send the following email to
                   minding your business, inc.:</p>
<?php
  if (isset($_POST["submit"])) {
    // If user tries to send contact email, modal will show what will be emailed.
    echo "<strong>From:</strong> " . $_POST["name"] . " &lt;" . $_POST["email"] . "&gt;<br/><br/>" .
         $_POST["comments"];
    echo "<input type='hidden' name='confName' value='" . $_POST["name"] . "' />";
    echo "<input type='hidden' name='confEmail' value='" . $_POST["email"] . "' />";
    echo "<input type='hidden' name='confComments' value='" . $_POST["comments"] . "' />";
  }
?>
            </div>
            <div class='modal-footer'>
                <button class='btn' data-dismiss='modal' aria-hidden='true'>Cancel</button>
                <input id="emailButton" class="btn btn-primary" type="submit"
                       name="confirm" value="Send email" />
            </div>
        </div>
        </form>

<?php
  LayoutUtil::loadJavascriptMethods();

  if (isset($_POST["submit"])) {
    // If user tries to send contact email, show modal and remove form validation.
    echo "<script>
            $('#name').removeAttr('required');
            $('#email').removeAttr('required');
            $('#comments').removeAttr('required');
            $('#emailModal').modal('toggle');
          </script>";
  }
?>
    </body>
</html>
