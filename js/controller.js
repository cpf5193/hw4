$(function(){
	// var cartModel = createCartModel();
	// var cartView = createCartView({
	// 	model: cartModel,
	// 	template: $('.itemTemplate'),
	// 	container: $('.itemList')
	// });

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

	// var newItemView = createNewItemView({
	// 	model: cartModel
	// });

	// var listView = createListView({
	// 	model: cartModel
	// });

	// $('.add-to-cart').click(function(){
	// 	var menuItem = $(this).parent();
	// 	var size;
	// 		if(menuItem.find('.size')){
	// 			size = menuItem.find('.size').val();
	// 		} else {size = undefined};
	// 	var toAdd = {
	// 		type: menuItem.attr('type'),
	// 		size: size,
	// 		name: menuItem.find('.name').html(),
	// 		quantity: menuItem.find('.quantity').val(),
	// 		price: menuItem.find('.price').html()
	// 	}
	// 	cartModel.addItem(toAdd);
	// });
});