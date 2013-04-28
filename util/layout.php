<?php

  require_once "mail.php";

  /**
   * Handles all of the layout-related methods, including the navigation bar and common headers.
   */
  class LayoutUtil {

    /**
     * Displays <head> tag, loading stylesheets.
     */
    public static function displayHeadTag() {
      echo "
        <!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->
        <!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->
        <!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->
        <!--[if gt IE 8]><!--> <html class=\"no-js\"> <!--<![endif]-->

        <head>
          <meta charset=\"utf-8\">
          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">
          <title>minding your business, inc.</title>
          <meta name=\"description\" content=\"\">
          <meta name=\"viewport\" content=\"width=device-width\">
          <link href='http://fonts.googleapis.com/css?family=Noto+Sans|Antic+Slab'
                rel='stylesheet' type='text/css'>
          <link href='img/flower.png' rel='shortcut icon' />
          <link rel=\"stylesheet\" href=\"css/bootstrap.css\">
          <link rel=\"stylesheet\" href=\"css/normalize.css\">
          <link rel=\"stylesheet\" href=\"css/main.css\">
          <script src=\"js/vendor/modernizr-2.6.2.min.js\"></script>
        </head>";
    }

    /**
     * Displays navigation bar with links, logo and contact info.
     */
    public static function displayNavigationBar() {
      echo "<div id=\"top\" class=\"clearfix\">
              <nav>
                <ul>
                  <li><a href=\"about.php\">about</a></li>
                  <li><a href=\"services.php\">services</a></li>
                  <li><a href=\"contact.php\">contact</a></li>
                </ul>
              </nav>
              <a href=\"index.php\"><img src=\"img/logo3.png\" /></a>
              <p class=\"center\">
                <a href=\"tel:+12076197068\">ph: 207-619-7068</a> &emsp; fax: 207-899-2472 <br/>
                <a href='mailto:" . MailUtil::MARIA_EMAIL . "' target='_blank' class='email'>" .
                    MailUtil::MARIA_EMAIL . "</a>
              </p>
            </div>"; // end #top
    }

    /**
     * Displays footer with name, address and copyright info.
     */
    public static function displayFooter() {
      echo "<div id=\"footer\">
                <p>minding your business, inc. &emsp; 7 tee drive &emsp; portland, me 04103</p>
                <span><p>&copy; 2013 Kara Ebrahim</p></span>
            </div>";
    }

    /**
     * Loads all external JS files.
     */
    public static function loadJavascriptMethods() {
      echo "
        <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js\"></script>
        <script>window.jQuery || document.write('<script src=\"js/vendor/jquery-1.9.0.min.js\"><\/script>')</script>
        <script src=\"js/plugins.js\"></script>
        <script src=\"js/main.js\"></script>
        <script src=\"js/bootstrap.js\"></script>
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>";
    }
  }
?>
