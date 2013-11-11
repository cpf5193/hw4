<?php
include("inc/header.php");
include("inc/footer.php");
printHead();?>
<link rel="stylesheet" type="text/css" href="css/menu.css">
<?php
printNavbarStart();
?>
	<li><a href="index.php" class="home">Home</a></li>
    <li><a href="menu.php" class="menu active">Menu</a></li>
    <li><a href="about.php" class="about">About Us</a></li>
    <li><a href="jobs.php" class="jobs">Jobs</a></li>
    <li><a href="order.php" class="order">Order</a></li>
<?php
printNavbarEnd();
?>
		<div class="content">
			<h1 class='title'>Dawg Pizza Menu</h1>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<p>All our pizzas are made with hand-thrown thin crust, baked in real wood ovens. Choose from one of these sizes:</p>
						<div class="row">
							<div class="col-sm-4 size">Small (12")</div>
							<div class="col-sm-4 size">Medium (14")</div>
							<div class="col-sm-4 size">Large (17")</div>
						</div>
						<p class="attention">All pizzas can be customized--add a few ingredients, or take a few off--for an extra $2.</p>
					</div>
				</div>
				<div class="pizzas">
					<h2>Pizza Pies</h2>
					<dl class="menu-item disable">
						<dt class="name"></dt>
						<dd class="descr"></dd>
						<dd class="price"></dd>
					</dl>
				</div>
				<div class="row">
					<div class="drinks">
						<h2>Drinks</h2>
						<dl class="menu-item disable">
							<dt class="name"></dt>
							<dd class="descr"></dd>
							<dd class="price"></dd>
						</dl>
					</div>
				</div>
				<div class='row'>
					<div class="desserts">
						<h2>Desserts</h2>
						<dl class='menu-item disable'>
							<dt class="name"></dt>
							<dd class="descr"></dd>
							<dd class="price"></dd>
						</dl>
					</div>
				</div> <!--end of row-->
			</div> <!--end of info div -->
		</div><!--end of content -->
<?php printFooter(); ?>
<script type="text/javascript" src="js/menu.js"></script>
<?php endhtml();?>