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

	fillFormFromLocal();

	var cartModel = createCartModel();
	var storedItems = localStorage.getItem('cart');
	if(storedItems && storedItems.length>0){
		cartModel.setItems(JSON.parse(storedItems));
	}
	if(localStorage.getItem('name')){

	}
	cartModel.on('change', function(){
		storedItems = cartModel.getItems();
		localStorage.setItem('cart', JSON.stringify(storedItems));
	});
	
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

		if(!validTime()){
			alert('Sorry, we are not currently taking online orders.' + 
					'We are open for online ordering Monday through Saturday from 12:00 PM to 11:00 PM.');
			return false;
		} else if(!agreed()){
			alert('Please agree to our terms before you order by clicking the checkbox.');
			return false;
		} else if(!minimumMet()){
			alert('We must enforce a $20.00 minimum subtotal for delivery. Your current total is less than $20.00.');
			return false;
		}

		var choice = confirm("Are you sure you want to place this order? " +  
				"(note: as this is not a real site we will not actually deliver to you, " + 
				"have your order ready for pickup, or charge you for this order) " + 
				"You will be returned to the homepage upon confirmation.");
		if(choice){
			var userData = $('.userInfo');
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
			$('input[name="cart"]').attr('value', JSON.stringify(sendJSON));
			localStorage.setItem('name', userData.find('input[name="name"]').val());
			localStorage.setItem('address1', userData.find('input[name="add1"]').val());
			localStorage.setItem('address2', userData.find('input[name="add2"]').val());
			localStorage.setItem('zip', userData.find('input[name="zipcode"]').val());
			localStorage.setItem('phone', userData.find('input[name="phone"]').val());
			$('.userInfo')[0].submit();
		} else{
			e.preventDefault();
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
	var subtotal = parseFloat($('.totals .subtotal').html());
	return subtotal >= 20;
}

function agreed(){
	return $('.agreement > input').is(':checked');
}

function fillFormFromLocal(){
	var locStorName = localStorage.getItem('name');
	var locStorAddress1 = localStorage.getItem('address1');
	var locStorAddress2 = localStorage.getItem('address2');
	var locStorZip = localStorage.getItem('zip');
	var locStorPhone = localStorage.getItem('phone');
	var inputContainer = $('.userInfo');

	if(locStorName){
		inputContainer.find('input[name="name"]').val(locStorName);
	} 
	if(locStorAddress1){
		inputContainer.find('input[name="add1"]').val(locStorAddress1);
	}
	if(locStorAddress2){
		inputContainer.find('input[name="add2"]').val(locStorAddress2);
	}
	if(locStorZip){
		inputContainer.find('input[name="zipcode"]').val(locStorZip);
	}
	if(locStorPhone){
		inputContainer.find('input[name="phone"]').val(locStorPhone);
	}
}