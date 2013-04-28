<!DOCTYPE html>
<?php
  require_once 'util/layout.php';
  require_once 'util/mail.php';

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
            <div id="header" class="clearfix">
                <img src="img/iStock-garden.jpg" />
            </div><!-- end #header -->

            <div id="content-wrap" class="clearfix">
                <div id="main">
                    <div class="service">
                        <img src="img/iStock-tea.jpg" />
                        <div id="bookkeeping">
                            <h1>bookkeeping</h1>
                            <p>Our office works with small- to medium-sized service-related companies, startups, entrepreneurs, solopreneurs, retail operations, and/or home-based enterprises. Our offerings include full-cycle to partial-service bookkeeping, depending on your needs. One-time or year-end projects are always welcome. We work closely with your tax accountant in order that your records are properly positioned for tax preparation purposes, which results in timely filing of all government, payroll, federal, and state required forms.</p>
                        </div>
                    </div>

                    <div class="service">
                        <img src="img/iStock-tape.jpg" />
                        <div id="payroll">
                            <h1>payroll</h1>
                            <p>Payroll is processed through our office using Advantage Payroll’s Software Platform. We can accommodate whatever frequency works best for your business, at an affordable rate. Our software can support any pre-tax products, HSA or Flexible Spending plans, Garnishments, Paid-Time Off, Comp-as-you-Go, and more. We handle payroll deposits, Quarterly/Annual Tax Filings, and year-end W2s, all through our customized electronic portal.</p>
                        </div>
                    </div>

                    <div class="service">
                        <img src="img/iStock-computer.jpg" />
                        <div id="quickbooks">
                            <h1>quickbooks</h1>
                            <p>QuickBooks training and general all-around record-keeping education is certainly available to all of our clients. We can guide you as you navigate the bookkeeping software, elevating your knowledge to a level of self-application. We are also available on a consulting basis, ready to answer your questions or help with your bookkeeping issues. Training can be customized to your level of knowledge of the accounting cycle. It is most rewarding when our clients slowly begin to master their own business accounting needs.</p>
                        </div>
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
