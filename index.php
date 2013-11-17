<?php
include("inc/header.php");
include("inc/footer.php");
printHead();?>
<link rel="stylesheet" type="text/css" href="css/index.css">
<?php
printNavbarStart();?>
	<li><a href="index.php" class="home active">Home</a></li>
    <li><a href="menu.php" class="menu">Menu</a></li>
    <li><a href="about.php" class="about">About Us</a></li>
    <li><a href="jobs.php" class="jobs">Jobs</a></li>
    <li><a href="order.php" class="order">Order</a></li>
<?php
printNavbarEnd();
?>
	<div class='jumbotron'>
		<h1 class='bigtitle'>Dawg Pizza</h1>
		<h2 class='paneldesc'>Awesome wood-fired pizza with fresh ingredients baked to order
		</h2>
		<a href='menu.php' class="btn btn-primary to-menu">Menu</a>	
		<a href="order.php" class='btn btn-primary to-order'>Order</a>
		<h3>Call to Order: 206-555-1212</h3>
	</div>
<?php printFooter(); ?>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<?php endhtml();?>