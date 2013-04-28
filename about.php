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
                        <img src="img/mom2.jpg" />
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
                            <li>To treat your business as my own—with integrity and respect</li>
                        </ul>
                    </div>
                </div><!-- end #main -->

                <div id="sidebar">
                    <div id="contact">
                        <h2>contact</h2>
                        <fieldset class="personal-info">
                            <label for="name">name </label><input type="text" name="name" id="name" />
                            <label for="email">email </label><input type="email" name="email" id="email" />
                        </fieldset>
                        <fieldset class="comment-info">
                            <label class="column">questions/comments </label>
                            <textarea class="comments"></textarea>
                            <input type="submit" value="Submit" />
                        </fieldset>
                    </div>

                    <div id="useful">
                        <h2>useful forms</h2>
                        <ul>
                            <li><a href="http://www.irs.gov/" target="_blank">Internal Revenue Service (IRS)</a></li>
                            <li><a href="http://www.state.me.us/revenue/" target="_blank">Maine Revenue Services</a></li>
                            <li><a href="http://www.irs.gov/pub/irs-pdf/fw4.pdf?portlet=3" target="_blank">Federal W-4 2013</a></li>
                            <li><a href="pdf/w4me.pdf" target="_blank">W-4 Maine Form</a></li>
                            <li><a href="pdf/EE-Direct-Deposit.pdf" target="_blank">EE Direct Deposit Agreement</a></li>
                            <li><a href="pdf/i-9.pdf" target="_blank">I-9</a></li>
                        </ul>
                    </div>

                    <div id="features">
                        <h2>features</h2>
                        <ul>
                            <li>Personalized bookkeeping and payroll services, which can include invoicing, A/R, A/P, bank reconciliations, 1099 reporting, quarterly and annual payroll reporting, and financial reporting</li>
                            <li>Monthly, quarterly, or annual compilation of your data</li>
                            <li>Year-end financial reporting and communication with your tax accountant</li>
                            <li>Client education to promote efficiency and positive cash flow</li>
                            <li>QuickBooks education for business owners and their staff</li>
                            <li>Timely filing of all government, payroll, and insurance forms</li>
                        </ul>
                    </div>
                </div><!-- end #sidebar -->
            </div><!-- end #content-wrap -->
<?php
  LayoutUtil::displayFooter();
?>
        </div><!-- end #wrapper -->
<?php
  LayoutUtil::loadJavascriptMethods();
?>
    </body>
</html>
