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

	pizzaListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	drinkListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	dessertListView.on('addToCart', function(data){
		cartModel.addItem(data);
	});
	$('.buttons > .btn-danger').click(function(){
		cartModel.removeAll();
	})

	//DO FOR EACH OF PIZZA< DRINKS< AND RESTAURANTS
});