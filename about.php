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
        <form name="contactForm" action="about.php" method="post">
        <div id="wrapper" class="clearfix">
<?php
  LayoutUtil::displayNavigationBar();
?>
            <div id="header">
                <img src="img/iStock-portland.jpg" />
            </div><!-- end #header -->

            <div id="content-wrap" class="clearfix">
                <div id="main">
                    <div class="bio1">
                        <img src="img/maria2.jpg" />
                        <h1>about maria</h1>
                        <p><b>Maria Ebrahim</b> has been working with bookkeeping, payroll, and tax-preparation clients for almost 20 years. With a Bachelor’s Degree in Nursing from Villanova University and an Associate’s Degree in Accounting from University of Southern Maine, she has been addressing, organizing, and providing solutions for business owners' varied financial needs, no matter the required level of assistance.</p>
                        <p>Maria supports QuickBooks and Sage 50 accounting software, as well as the Advantage and QuickBooks Payroll platforms. She enjoys relationships with many area accountants, providing tandem services to mutual clients. She is a member in good standing of the American Institute of Professional Bookkeepers.</p>
                        <p>She and her husband, Kurt, have four adult children and presently reside in West Falmouth. She has been a member of IAABO Board #21 since 1996, working every winter as a Varsity basketball official in the Greater Portland area.</p>
                    </div>

                    <div class="bio2">
                        <img src="img/kelly2.jpg" />
                        <h1>about kelly</h1>
                        <p><b>Kelly Parks</b> is a part-time assistant bookkeeper in our business office, a part-time intern in an area accounting office, and a part-time student at University of Southern Maine. She holds a Bachelor’s Degree in Psychology and will, over the next several years, complete her Certificate of Accounting and her Master’s Degree in Business Administration, also from USM.</p>
                        <p>Kelly and her husband, Roger, reside in Windham.</p>
                    </div>

                    <div class="statement">
                        <h1>statement of ideals</h1>
                        <ul>
                            <li>To provide efficient, timely, and relevant bookkeeping and payroll services, in accordance with generally accepted accounting principles</li>
                            <li>To communicate honestly, openly, and in clear understandable language</li>
                            <li>To provide full disclosure concerning billing rates, invoices, terms of service, and reimbursement requirements</li>
                            <li>To continually offer advice based on available resources. When necessary, conferring with your tax accountant to address more complicated issues.</li>
                            <li>To transact bookkeeping services honestly, according to the mandates required by the Internal Revenue and Maine Revenue Services</li>
                            <li>To protect your sensitive information and maintain the highest level of confidentiality</li>
                            <li>To be available to you commensurate with your business needs</li>
                            <li>To continue to educate you such that the bookkeeping process becomes a more efficient business model</li>
                            <li>To be committed to the success and well-being of your business</li>
                            <li>To treat your business as our own—with integrity and respect</li>
                        </ul>
                    </div>
                </div><!-- end #main -->
<?php
  LayoutUtil::displaySidebar();
?>
            </div><!-- end #content-wrap -->
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
