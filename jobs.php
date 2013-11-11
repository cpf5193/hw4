<?php
include("inc/header.php");
include("inc/footer.php");
printHead();?>
<link rel="stylesheet" type="text/css" href="css/jobs.css">
<?php
printNavbarStart();
?>
	<li><a href="index.php" class="home">Home</a></li>
    <li><a href="menu.php" class="menu">Menu</a></li>
    <li><a href="about.php" class="about">About Us</a></li>
    <li><a href="jobs.php" class="jobs active">Jobs</a></li>
    <li><a href="order.php" class="order">Order</a></li>
<?php
printNavbarEnd();
?>
		<div class="content">
			<h1 class='title'>Jobs at Dawg Pizza</h1>
			<div class="container">
				<div class="open-title">
					<h2>Open Positions</h2>
				</div>
				<div id="carousel-jobs" class="carousel slide">
				  <!-- Indicators -->
				  <ol class="carousel-indicators">
				    <li data-target="#carousel-jobs" data-slide-to="0" class="active"></li>
				    <li data-target="#carousel-jobs" data-slide-to="1"></li>
				  </ol>

				  <!-- Wrapper for slides -->
				  <div class="carousel-inner">
				    <div class="item active">
				      <img src="img/chef.png" alt="chef-image">
				      <div class="carousel-caption">
				        <h3>Kitchen Staff</h3>
						<p><a href="mailto:dawgpizzaseattle@gmail.com">Contact Us</a> for more information on this position</p>
				      </div>
				    </div>

				    <div class="item">
				      <img src="img/deliver.png" alt="driver-image">
				      <div class="carousel-caption">
				        <h3>Delivery Drivers</h3>
						<p><a href="mailto:dawgpizzaseattle@gmail.com">Contact Us</a> for more information on this position</p>
				      </div>
				    </div>
				  </div>

				  <!-- Controls -->
				  <a class="left carousel-control" href="#carousel-jobs" data-slide="prev">
				    <span class="icon-prev"></span>
				  </a>
				  <a class="right carousel-control" href="#carousel-jobs" data-slide="next">
				    <span class="icon-next"></span>
				  </a>
				</div>
				<div class="main-sect">
					<p class='jobs-contact'>We'd love to have you join our amazing staff! If you have questions or would like to apply, please call or <a href="mailto:dawgpizzaseattle@gmail.com">email us</a>!</p>
				</div>	
			</div>	
		</div>
<?php printFooter(); ?>
<script type="text/javascript" src="js/jobs.js"></script>
<?php endhtml();?> 