<?php
  require_once 'util/mail.php';
?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>minding your business, inc.</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link href='http://fonts.googleapis.com/css?family=Noto+Sans|Antic+Slab' rel='stylesheet' type='text/css'>

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link href='img/flower.png'
                 rel='shortcut icon' />

        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

        <script>
          // sets the display of the div with the specified id
          function setDisplay(id, display) {
        	  var divid = document.getElementById(id);
        	  divid.style.display = display;
          }

          // populates the innerHTML of the specified elementId with the HTML returned by the
          // specified htmlString
          function getRedirectHTML(element, htmlString) {
        	  var xmlhttp;
        	  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        		  xmlhttp=new XMLHttpRequest();
        	  } else {// code for IE6, IE5
        		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        	  }
          	  xmlhttp.onreadystatechange=function() {
          		  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
          			  element.innerHTML=xmlhttp.responseText;
          	      }
       	      };
        	  xmlhttp.open("GET", htmlString, true);
       	      xmlhttp.send();
          }

          // sends an email with the specified message from the specified name and email; shows the
          // confirmation message.
          function sendEmail(name, email, msg) {
        	  getRedirectHTML(document.getElementById("emailButton"),
                  "util/mail.php?type=contact&name=" + name + "&email=" + email + "&msg=" + msg);
        	  setDisplay("emailMessageDiv", "block");
          }
        </script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="wrapper">
            <div id="top" class="clearfix">
                <nav>
                    <ul>
                        <li><a href="about.html">about</a></li>
                        <li><a href="services.html">services</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                </nav>
                <a href="index.html"><img src="img/logo3.png" /></a>
                <p class="center"><a href="tel:+12076197068">ph: 207-619-7068</a> &emsp; fax: 207-899-2472 <br />
<?php
  echo "<a href='mailto:" . MailUtil::MARIA_EMAIL . "' target='_blank' class='email'>" .
       MailUtil::MARIA_EMAIL . "</a>";
?>
                </p>
            </div><!-- end #top -->

            <div id="header">
                <img src="img/iStock-poppies.jpg" />
            </div><!-- end #header -->

            <div id='emailMessageDiv' class='alert alert-info center' style='display:none;'>
              <button type='button' class='close' data-dismiss='alert'>&times;</button>
              <strong>Email sent successfully! Thank you!</strong>
            </div>

            <div id="content">
                <div id="form">
                    <h1>contact</h1>
                    <form action="contact.php" method="post">
                        <fieldset class="personal-info">
                            <label for="name">name</label><input type="text" name="name" id="name" required />
                            <label for="email">email</label><input type="email" name="email" id="email" required />
                        </fieldset>
                        <fieldset class="comment-info">
                            <label for="comments" class="column">questions/comments</label>
                            <textarea id="comments" class="comments" name="comments" required></textarea>
                            <input id="emailButton" class="btn" type="submit" name="submit" value="Send email" />
                        </fieldset>
                    </form>
                </div>
                <div id="directions">
                    <h1>directions</h1>
                    <h2>7 Tee Drive, Portland, ME 04103</h2>
                    <h3>From I-95, North or South</h3>
                    <p>Enter the Maine Turnpike and exit the highway at Exit 48, Portland/ Westbrook. Turn right at Riverside Street, travel approximately 1 mile, and turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
                    <h3>From downtown Portland</h3>
                    <p>Head southwest on Congress Street aproximately 0.4 miles, and then turn right at Forest Avenue. After 4.6 miles, turn right at Riverside Street, and after 0.7 miles, turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
                    <small>To find via GPS, enter 1039 Riverside Street, Portland, ME 04103</small>
                    <iframe width="500" height="350" frameborder="2" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;output=embed"></iframe>
                    <br />
                    <small><a href="https://maps.google.com/maps?q=7+tee+drive+portland+me&amp;ie=UTF8&amp;hq=&amp;hnear=Tee+Dr,+Portland,+Cumberland,+Maine+04103&amp;gl=us&amp;t=m&amp;z=14&amp;iwloc=A&amp;ll=43.710084,-70.312432&amp;source=embed" style="color:#f0542e;text-align:left" target="_blank">View Larger Map</a></small>
                </div>
            </div><!-- end #main -->

            <div id="footer">
                <p>minding your business, inc. &emsp; 7 tee drive &emsp; portland, me 04103</p>
                <span><p>&copy; 2013 Kara Ebrahim</p></span>
            </div><!-- end #footer -->
        </div><!-- end #wrapper -->

        <div id='emailModal' class='modal hide fade' tabindex='-1' role='dialog'
                 aria-labelledby='myModalLabel' aria-hidden='false' style='display:none;'>
            <div class='modal-header'>
                <button type='button' class='close' data-dismiss='modal'
                        aria-hidden='true'>&times;</button>
                <h3 id='myModalLabel' class='center'>Confirm Email</h3>
            </div>
            <div class='modal-body'>
                <p>Please confirm that you'd like to send the following email to Minding Your Business:</p>
                <div id='email-body'></div>
            </div>
            <div class='modal-footer'>
                <button class='btn' data-dismiss='modal' aria-hidden='true'>Cancel</button>
                <a id='sendEmailButton' href='#' class='btn btn-primary'
                   data-dismiss='modal'>Send Email</a>
            </div>
        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/bootstrap.js"></script>

<?php
  if (isset($_POST["submit"])) {
    // show confirmation modal with name, email and message; if user clicks 'send', then call
    // JS sendEmail function.
    echo "<script>
            $(\"#email-body\").html(\"<strong>From:</strong> " . $_POST["name"] . " &lt;" .
                $_POST["email"] . "&gt;<br/><br/>" . $_POST["comments"] . "\");
            var js = \"sendEmail(\'" . $_POST["name"] . "\',\'" . $_POST["email"] . "\',\'" .
                $_POST["comments"] . "\')\";
            $('#sendEmailButton').click(new Function(js));
            $('#emailModal').modal('show');
          </script>";
  }
?>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
