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
            <div id="header" class="clearfix">
                <img src="img/iStock-garden.jpg" />
            </div><!-- end #header -->

            <div id="content-wrap" class="clearfix">
                <div id="main">
                    <div class="service">
                        <img src="img/iStock-tea.jpg" />
                        <div id="bookkeeping">
                            <h1>bookkeeping</h1>
                            <p>My office works with small- to medium-sized service-related companies, startups, entrepreneurs, solopreneurs, retail operations, and/or home-based enterprises. My offerings include partial-service or after-the-fact bookkeeping, depending on your needs. One-time or year-end projects are always welcome. I work closely with your tax accountant in order that your records are properly positioned for tax preparation purposes, which results in timely filing of all government, payroll, federal, and state required forms.</p>
                        </div>
                    </div>

                    <div class="service">
                        <img src="img/iStock-tape.jpg" />
                        <div id="payroll">
                            <h1>payroll</h1>
                            <p>Payroll is processed through my office using Advantage Payroll’s Software Platform. I can accommodate a monthly, quarterly, or annual frequency at an affordable rate. My software can support any pre-tax products, HSA or Flexible Spending plans, Garnishments, Paid-Time Off, Comp-as-you-Go, and more. I handle payroll deposits, Quarterly/Annual Tax Filings, and year-end W2s, all through my customized electronic portal.</p>
                        </div>
                    </div>

                    <div class="service">
                        <img src="img/iStock-computer.jpg" />
                        <div id="quickbooks">
                            <h1>quickbooks</h1>
                            <p>QuickBooks training and general all-around record-keeping education is certainly available to all of my clients. I can guide you as you navigate the bookkeeping software, elevating your knowledge to a level of self-application. I am also available on a consulting basis, ready to answer your questions or help with your bookkeeping issues. Training can be customized to your level of knowledge of the accounting cycle. It is most rewarding when my clients slowly begin to master their own business accounting needs.</p>
                        </div>
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
  LayoutUtil::loadJavascriptMethods();
?>
    </body>
</html>
