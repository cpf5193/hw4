<?php
include("inc/header.php");
include("inc/footer.php");
printHead();?>
<link rel="stylesheet" type="text/css" href="css/order.css">
<?php
printNavbarStart();
?>
	<li><a href="index.php" class="home">Home</a></li>
    <li><a href="menu.php" class="menu">Menu</a></li>
    <li><a href="about.php" class="about">About Us</a></li>
    <li><a href="jobs.php" class="jobs">Jobs</a></li>
    <li><a href="order.php" class="order active">Order</a></li>
<?php
printNavbarEnd();
?>

<div class="content">
	<h1 class='title'>Order Online</h1>
	<div class="container">
		<div class='row panel panel-default'>
			<div class='choices col-sm-7 panel'>
				<div class='order-type panel-heading'>
					<div class='deliv-info'>
						<ul>
							<li>Delivery Hours: 12pm - 11pm</li>
							<li>We deliver only within Seattle city limits</li>
							<li>Cash and credit cards accepted for delivery</li>
							<li>No topping substitutions on delivery</li>
							<li>Delivery is free of charge ($20 min. order)</li>
						</ul>
					</div>
				</div>
				<div class='menu-items panel-body'>
				  <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" href="#collapsePizza">
				          Pizzas
				        </a>
				      </h4>
				    </div>
				    <div id="collapsePizza" class="panel-collapse collapse in">
				      <div class="panel-body">
				      	<ul class='pizzaContainer'>
				      	  <li class='panel panel-default pizza collapseGroup disable'>
				      	    <h3></h3>
				      	    <label>Qty.
				      	      <select class='quantity'>
				      	      	<option>1</option>
				      	      	<option>2</option>
				      	      	<option>3</option>
				      	      	<option>4</option>
				      	      	<option>5</option>
				      	      </select>
				      	    </label>
				      	    <label>Size
				      	      <select class='size'>
				      	      	<option>S</option>
				      	      	<option>M</option>
				      	      	<option>L</option>
				      	      </select>
				      	    </label>
				      	    <p>Price: $<span class='price'>0.00</span></p>
				      	    <button class='btn btn-primary'>Add</button>
				      	  </li>
				      	</ul>
				      </div>
				    </div>
				  </div>
				  <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" href="#collapseDrinks">
				          Drinks
				        </a>
				      </h4>
				    </div>
				    <div id="collapseDrinks" class="panel-collapse collapse in">
				      <div class="panel-body">
				      	<ul class='drinkContainer'>
				      	  <li class='panel panel-default drink collapseGroup disable'>
				      	    <h3></h3>
				      	    <label>Qty. 
				      	      <select class='quantity'>
				      	      	<option>1</option>
				      	      	<option>2</option>
				      	      	<option>3</option>
				      	      	<option>4</option>
				      	      	<option>5</option>
				      	      </select>
				      	    </label>
				      	    <p>Price: $<span class='price'>0.00</span></p>
				      	    <button class='btn btn-primary'>Add</button>
				      	  </li>
				      	</ul>
				      </div>
				    </div>
				  </div>
				  <div class="panel panel-default">
				    <div class="panel-heading">
				      <h4 class="panel-title">
				        <a data-toggle="collapse" href="#collapseDesserts">
				          Desserts
				        </a>
				      </h4>
				    </div>
				    <div id="collapseDesserts" class="panel-collapse collapse in">
				      <div class="panel-body">
				      	<ul class='dessertContainer'>
				      	  <li class='panel panel-default dessert collapseGroup disable'>
				      	    <h3></h3>
				      	    <label>Qty.
				      	      <select class='quantity'>
				      	      	<option>1</option>
				      	      	<option>2</option>
				      	      	<option>3</option>
				      	      	<option>4</option>
				      	      	<option>5</option>
				      	      </select>
				      	    </label>
				      	    <p>Price: $<span class='price'>0.00</span></p>
				      	    <button class='btn btn-primary'>Add</button>
				      	  </li>
				      	</ul>
				      </div>
				    </div>
				  </div>
				</div>	
			</div>
			<div class='cart col-sm-5 panel panel-default'>
				<h2 class='panel-heading'>Your Cart</h2>
				<h3 class='min-order'>Minimum $20 order for delivery</h3>
				<div class='panel-body'>
					<div class='items'>
						<ul class='itemList'>

						</ul>
					</div>
				</div>
				<div class='cartfooter'>
					<div class='totals'>
						<p>Subtotal: $<span class='subtotal'>0.00</span></p>
						<p>Tax(9.5%): $<span class='tax'>0.00</span></p>
						<p>Total: $<span class='total'>0.00</span></p>
					</div>
					<div class='buttons'>
						<button class='btn btn-primary'>Place Order</button>
						<button class='btn btn-danger'>Remove All</button>
					</div>
				</div>
			</div> <!--cart-->
		</div> <!--row-->
	</div>	<!--container-->
</div> <!--content-->

<?php printFooter(); ?>
<script type="text/javascript" src="js/order.js"></script>
<?php endhtml();?> 