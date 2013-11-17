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
		console.log(data);
		//DO SOMETHING WITH CART MODEL

		// var menuItem = $(this).parent();
		// var size = menuItem.find('.size');
		// if(size){
		// 	size = size.val();
		// } else {size = undefined};
		// var toAdd = {
		// 	type: menuItem.attr('type'),
		// 	size: size,
		// 	name: menuItem.find('.name').html(),
		// 	quantity: menuItem.find('.quantity').val(),
		// 	price: menuItem.find('.price').html()
		// }
		// cartModel.addItem(toAdd);
	});

	//DO FOR EACH OF PIZZA< DRINKS< AND RESTAURANTS
});

function addToCart(){

}