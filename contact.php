<!DOCTYPE html>
<?php
  require_once 'util/contactHelper.php';
  require_once 'util/layout.php';

  LayoutUtil::displayHeadTag();
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
  ContactHelper::sendMailIfUserConfirms();
?>
            <div id="content">
<?php
  ContactHelper::displayContactForm("form", "h1");
?>
                <div id="directions">
                    <h1>directions</h1>
                    <h2>7 Tee Drive, Portland, ME 04103</h2>
                    <h3>From I-95, North or South</h3>
                    <p>Enter the Maine Turnpike and exit the highway at Exit 48, Portland/ Westbrook. Turn right at Riverside Street, travel approximately 1 mile, and turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
                    <h3>From downtown Portland</h3>
                    <p>Head southwest on Congress Street approximately 0.4 miles, and then turn right at Forest Avenue. After 4.6 miles, turn right at Riverside Street, and after 0.7 miles, turn right at 1039 Riverside Street. Turn left onto Tee Drive.</p>
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
<?php
  ContactHelper::displayEmailModal();
?>
        </form>
<?php
  LayoutUtil::loadJavascriptMethods();
  ContactHelper::showModalIfUserSubmits();
?>
    </body>
</html>
