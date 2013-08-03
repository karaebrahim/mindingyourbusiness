<!DOCTYPE html>
<?php
  require_once 'util/layout.php';

  LayoutUtil::displayHeadTag();
?>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id="wrapper">
<?php
  LayoutUtil::displayNavigationBar();
?>
            <div id="header">
                <img src="img/iStock-bike.jpg" />
            </div><!-- end #header -->

            <div id="buttons" class="clearfix">
                <a href="services.php#bookkeeping" class="bookkeeping">
                    <h2>bookkeeping</h2>
                </a>
                <a href="services.php#payroll" class="payroll">
                    <h2>payroll</h2>
                </a>
                <a href="services.php#quickbooks" class="quickbooks">
                    <h2>quickbooks</h2>
                </a>
            </div><!-- end #buttons -->

            <div id="welcome">
                <div class="box">
                    <h1>welcome!</h1>
                    <p>Minding Your Business, Inc. offers <a href="services.php">expert bookkeeping and payroll services</a> for small businesses and individuals throughout Southern Maine. We provide customized services designed to fit your distinct needs. Whether you require one-time assistance setting up your accounting program or ongoing bookkeeping support, we have the skills to get the job done.</p>
                    <p><a href="contact.php">Please contact me.</a> I would love to chat to see if I can assist with your bookkeeping needs.</p>
                    <p>—Maria Ebrahim | President</p>
                </div>
            </div><!-- end #welcome -->

            <div id="benefits">
                <div class="box">
                    <h1>benefits</h1>
                    <ul>
                        <li>Frees up your time so you can concentrate on growing and maintaining your business</li>
                        <li>Provides back office bookkeeping staff without having to hire employees</li>
                        <li>Delivers timely and efficient services thereby generating relevant information</li>
                        <li>Produces year-end reports for tax preparation purposes</li>
                        <li>Reduces audit and non-compliance issues with the Federal and State goverment agencies</li>
                        <li>Relieves stress for the business owner knowing that your company is being thoroughly attended</li>
                    </ul>
                </div>
            </div><!-- end #benefits -->
<?php
  LayoutUtil::displayFooter();
?>
        </div><!-- end #wrapper -->
<?php
  LayoutUtil::loadJavascriptMethods();
?>
    </body>
</html>
