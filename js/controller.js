$(function(){

	var pizzaListModel = createListModel({
		items: com.dawgpizza.menu.pizzas
	});
	var pizzaListView = createListView({
		container: $('.pizzaContainer'),
		model: pizzaListModel
	});

	var drinkListModel = createListModel({
		items: com.dawgpizza.menu.drinks
	});
	var drinkListView = createListView({
		container: $('.drinkContainer'),
		model: drinkListModel
	});

	var dessertListModel = createListModel({
		items: com.dawgpizza.menu.desserts
	});
	var dessertListView = createListView({
		container: $('.dessertContainer'),
		model: dessertListModel
	});

	var cartModel = createCartModel();
	
	var cartView = createCartView({
		model: cartModel,
		template: $('.itemTemplate'),
		container: $('.itemList')
	});

	cartView.on('removeFromCart', function(data){
		cartModel.removeItem(data);
	});

	pizzaListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	drinkListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	dessertListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	$('.remove-all').click(function(){
		var choice = confirm('Remove all items in cart?');
		if(choice){
			cartModel.removeAll();
		}
	});

	$('.userInfo').submit(function(e){
		e.preventDefault();

		// if(!validTime()){
		// 	alert('Sorry, we are not currently taking online orders.' + 
		// 			'We are open for online ordering Monday through Saturday from 12:00 PM to 11:00 PM.');
		// 	return false;
		// } else if(!agreed()){
		// 	alert('Please agree to our terms before you order by clicking the checkbox.');
		// 	return false;
		// } else if(!minimumMet()){
		// 	alert('We must enforce a $20.00 minimum order for delivery. Your current total is less than $20.00.');
		// 	return false;
		// }

		var choice = confirm("Are you sure you want to place this order? " +  
				"(note: as this is not a real site we will not actually deliver to you, " + 
				"have your order ready for pickup, or charge you for this order) " + 
				"You will be returned to the homepage upon confirmation.");
		if(choice){
			var userData = $('.userInfo');
			console.log(cartModel.getItemsSizeStrings());
			var sendJSON = {
				"name": userData.find('input[name="name"]').val(),
				"address1": userData.find('input[name="add1"]').val(),
				"address2": userData.find('input[name="add2"]').val(),
				"zip": userData.find('input[name="zipcode"]').val(),
				"phone": userData.find('input[name="phone"]').val(),
				"nextUrl": "http://students.washington.edu/cpf5193/info343/hw4/index.php",
				"nextCaption": "Return to homepage",
				"items": cartModel.getItemsSizeStrings()
			};
			console.log(cartModel.getItems());
			$('input[name="cart"]').attr('value', JSON.stringify(sendJSON));
			alert('going to send now');
			$('.userInfo')[0].submit();
		} else{
			e.preventDefault();
			alert('cancelled');
			return false;
		}
	});


	//DO FOR EACH OF PIZZA< DRINKS< AND RESTAURANTS
});

function validTime(){
	var currentTime = new Date();
	var day = currentTime.getDay();
	var hour = currentTime.getHours();
	return day>=1 && day<=6 && hour>=12 && hour <=22;
}

function minimumMet(){
	var total = parseFloat($('.totals .total').html());
	return total >= 20;
}

function agreed(){
	return $('.agreement > input').is(':checked');
}