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
					<label>Pick Up <input type='radio' name='ordertype' value='pickup'></label>
					<label>Delivery<input type='radio' name='ordertype' value='delivery' checked></label>
					<div class='deliv-info'>
						<ul>
							<li>Delivery Hours: 12pm - 11pm</li>
							<li>We deliver only within Seattle city limits</li>
							<li>Cash and credit cards accepted for delivery</li>
							<li>No topping substitutions for online orders</li>
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
				      	    <button class='btn btn-primary add-to-cart'>Add</button>
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
				      	    <button class='btn btn-primary add-to-cart'>Add</button>
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
				      	    <button class='btn btn-primary add-to-cart'>Add</button>
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
							<li class='itemTemplate'>
								<span class='size'></span>
								<p class='itemName'></p>
								<p class='dupHolder'>
									x<span class='duplicates'></span>
								</p>
								<p class='priceHolder'>
									$<span class='itemPrice'></span>
								</p>
								<button class='btn btn-danger delete'>x</button>
							</li>
						</ul>
					</div>
				</div>
				<div class='cartfooter'>
					<div class='totals'>
						<p>Subtotal: $<span class='subtotal'>0.00</span></p>
						<p>Tax(9.5%): $<span class='tax'>0.00</span></p>
						<p>Total: $<span class='total'>0.00</span></p>
					</div>
					<div class='agreement'>
						<p>I agree to pay the total amount upon delivery or pickup</p>
						<input type='checkbox'>
					</div>
					<div class='buttons'>
						<button class='btn btn-primary'>Place Order</button>
						<button class='btn btn-danger'>Remove All</button>
					</div>
					<div class='helpOrder'>
						<ul> If you cannot click 'Place Order', you may:
							<li>Not be ordering within valid hours</li>
							<li>Not have clicked the 'I agree' checkbox</li>
							<li>Not have a order over $20 for delivery</li>
						</ul>
					</div>
					<form class='userInfo' action='https://dawgpizza.com/orders/' method='post'>
						<label>Name: <input type='text' name='name' required focus></label>
						<label>Address 1: <input type='text' name='add1' required></label>
						<label>Address 2: <input type='text' name='add2'></label>
						<label>Zipcode: <input type='text' name='zipcode' size='5' required></label>
						<label>Phone: <input type='text' name='phone' required></label>
						<input type="hidden" name="cart">
						<input class='submit' type='submit' value='Place Order'>
					</form>
				</div>
			</div> <!--cart-->
		</div> <!--row-->

		<div class="modal fade" id="order-complete" tabindex="-1" role="dialog" aria-labelledby="orderCompleteLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		        <h4 class="modal-title" id="modalLabel">Order Successfully Completed</h4>
		      </div>
		      <div class="modal-body">
		        Your order has been completed. Thank you for choosing Dawg Pizza! Click okay to return to the homepage. 
		      </div>
		      <div class="modal-footer">
		        <button class='btn btn-primary return-home' type="button" class="btn btn-default" data-dismiss="modal">Okay</button>
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->	

	</div>	<!--container-->
</div> <!--content-->

<?php printFooter(); ?>
<script type="text/javascript" src="js/utils.js"></script>
<script type="text/javascript" src="js/eventSource.js"></script>
<!-- <script type="text/javascript" src="js/cartModel.js"></script> -->
<!-- <script type="text/javascript" src="js/cartView.js"></script> -->
<!-- <script type="text/javascript" src="js/newItemView.js"></script> -->
<script type="text/javascript" src="js/listItemModel.js"></script>
<script type="text/javascript" src="js/listItemView.js"></script>
<script type="text/javascript" src="js/listModel.js"></script>
<script type="text/javascript" src="js/listView.js"></script>
<script type="text/javascript" src="js/controller.js"></script>
<!-- <script type="text/javascript" src="js/order.js"></script> -->
<?php endhtml();?> 