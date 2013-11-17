$(function(){
	  populateItems();
});

function populateItems(){
	var menuObj = com.dawgpizza.menu;
	var pizzas = menuObj.pizzas, drinks = menuObj.drinks,
	desserts = menuObj.desserts;
	buildCategory(pizzas, $('.pizzaContainer'));
	buildCategory(drinks, $('.drinkContainer'));
	buildCategory(desserts, $('.dessertContainer'));
	// $('.buttons > .btn-primary').click(function(){
	// 	console.log('clicked');
	// 	var choice = confirm("Are you sure you want to place this order? " +  
	// 			"(note: as this is not a real site we will not actually deliver to you, " + 
	// 			"have your order ready for pickup, or charge you for this order) ");
	// 	if(choice){
	// 		$('#order-complete').modal();
	// 	}
	// });
	$('.order-type').change(checkOkayToOrder);
	$('.agreement > input').click(checkOkayToOrder);
	checkOkayToOrder();
	$('.btn-danger').click(function(){
		$('.itemList').html("");
		updateTotals(parseFloat($('.subtotal').html()*-1));
	});
	// $('.return-home').click(function(){
	// 	window.location.href = 'index.php';
	// });
	$('.userInfo').submit(passData);
}

function buildCategory(menuType, parent){
	var template = parent.find('.collapseGroup');
	for(var i=0; i<menuType.length; ++i){
		(function(i){
			var temp = template.clone(), 
				menuItem = menuType[i],
				name = menuItem.name,
				prices = menuItem.prices,
				price = menuItem.price;
			if(name){temp.find('h3').html(name);}

			addHandlers(prices, price, temp);
			temp.find('.price').html(evalPrice(prices, price, temp));
			temp.removeClass('disable');
			temp.attr('type', menuType[i].type);
			parent.append(temp);
		})(i);
	}
}

function evalPrice(basePrices, price, template){
	if(basePrices){
		var size = template.find('.size').val();
	}
	qty = template.find('.quantity').val();
	var basePrice;
	switch(size){
		case 'S':
			basePrice = basePrices[0];
			break;
		case 'M':
			basePrice = basePrices[1];
			break;
		case 'L':
			basePrice = basePrices[2];
			break;
		default:
			basePrice = price;
	}
	return basePrice*qty;
}

function updateTotals(addToTotal){
	var newSub = parseFloat($('.subtotal').html()) + addToTotal;
	var newTax = parseFloat((newSub*0.095).toFixed(2));
	var newTotal = newTax + newSub;
	$('.subtotal').html(newSub.toFixed(2));
	$('.tax').html(newTax.toFixed(2));
	$('.total').html(newTotal.toFixed(2));
	checkOkayToOrder();
}

// function addToCart(totalPrice, template){
// 	var existing = $('.item');
// 	var inCart = false;
// 	for(var i=0; i<existing.length; ++i){
// 		var existingItem = $(existing[i]);
// 		var name = existingItem.find('.itemName').html();
// 		var duplicates = existingItem.find('.duplicates');
// 		var price = existingItem.find('.itemPrice');
// 		var size = existingItem.find('.size').html();
// 		if(name==template.find('h3').html() && ((size==template.find('.size').val()+" ") || size=="")){
// 			var tempQuantFloat = parseFloat(template.find('.quantity').val());
// 			var existFloat = parseFloat(duplicates.html());
// 			var tempPriceFloat = parseFloat(template.find('.price').html());
// 			var existPrice = parseFloat(price.html());
// 			duplicates.html(tempQuantFloat + existFloat);
// 			price.html((tempPriceFloat + existPrice).toFixed(2));
// 			inCart = true;
// 		}
// 	}
// 	if(!inCart){
// 		var item = $(document.createElement('li')); //create item for cart
// 		item.attr('class', 'item');
// 		item.attr('type', template.attr('type'));

// 		var itemName = $(document.createElement('p')); //create container for item name
// 		itemName.html(template.find('h3').html());
// 		itemName.attr('class', 'itemName');

// 		var itemSize = $(document.createElement('span'));
// 		itemSize.attr('class', 'size');
// 		itemSize.html(template.find('.size').val() + " ");

// 		var dupHolder = $(document.createElement('p'));
// 		dupHolder.attr('class', 'dupHolder');
// 		dupHolder.html('x');

// 		var duplicates = $(document.createElement('span')); //create container for num items
// 		duplicates.attr('class', 'duplicates');
// 		duplicates.html(template.find('.quantity').val());

// 		priceHolder = $(document.createElement('p'));
// 		priceHolder.attr('class', 'priceHolder');
// 		priceHolder.html('$');

// 		var price = $(document.createElement('p')); //create container for price
// 		price.html(parseFloat(template.find('.price').html()).toFixed(2));
// 		price.attr('class', 'itemPrice');
// 		priceHolder.append(price);

// 		//create delete button and add click handler
// 		var delBtn = $(document.createElement('button'));
// 		delBtn.attr('class', 'btn btn-danger delete');
// 		delBtn.html('x');
// 		delBtn.click(function(){
// 			// var dupFloat = parseFloat($(this).parent().find('.duplicates').html());
// 			var priceFloat = parseFloat($(this).parent().find('.itemPrice').html());
// 			// var totalPrice = parseFloat($('.total').html());
// 			$(this).parent().remove();
// 			//This is wrong
// 			updateTotals(-1*priceFloat);//update cart totals
// 		});
		
// 		dupHolder.append(duplicates);
// 		//Append elements to the item dom element
// 		item.append(itemSize);
// 		item.append(itemName);
// 		item.append(dupHolder);
// 		item.append(priceHolder);
// 		item.append(delBtn);

// 		//Add item to page
// 		$('.itemList').append(item);
// 	}
// 	//Update cart totals
// 	updateTotals(totalPrice);
// }

function addHandlers(prices, price, template){
	//Add Handlers
	template.find('.quantity').change(function(){
		template.find('.price').html(evalPrice(prices, price, template));
	});
	template.find('.size').change(function(){
		template.find('.price').html(evalPrice(prices, price, template));
	})

	template.find('.btn').click(function(){
		// addToCart(evalPrice(prices, price, template), template);
		console.log('clicked');
		var menuItem = $(this).parent();
		var size;
			if(menuItem.find('.size')){
				size = menuItem.find('.size').val();
			} else {size = undefined};
		var toAdd = {
			type: menuItem.attr('type'),
			size: size,
			name: menuItem.find('.name').html(),
			quantity: menuItem.find('.quantity').val(),
			price: menuItem.find('.price').html()
		}
		cartModel.addItem(toAdd);
	});
}

function checkOkayToOrder(){
	var orderType = $('.order-type input[type="radio"]:checked').val();
	var total = parseFloat($('.total').html());
	var orderMin = (orderType == 'pickup' && total>0) || (orderType == 'delivery' && total>=20);
	var orderBtn = $('.cartfooter > .buttons > .btn-primary');
	var agreed = $('.agreement > input').is(':checked');
	var disabled = orderBtn.attr('disabled');
	var orderOkay = /*checkTime() && */orderMin;
	if(disabled && orderOkay && agreed){
		orderBtn.removeAttr('disabled');
	}
	else if(!disabled && (!orderOkay || !agreed)){
		orderBtn.attr('disabled', 'disabled');
	}
}

function checkTime(){
	var orderType = $('.order-type').val();
	var startHour;
	if(orderType = 'pickup'){
		startHour = 10;
	} else{
		startHour = 12;
	}
	var currentTime = new Date();
	var day = currentTime.getDay();
	var hour = currentTime.getHours();
	return day>=1 && day<=6 && hour>=startHour && hour <=22;
}

function passData(){
	var cart = {};
	var items = [];
	var itemList = $('.item');
	for(var i=0; i<itemList.length; ++i){
		var itemObj = {};
		var currentItem = $(itemList[i]);
		var type = currentItem.attr('type');
		var name = currentItem.find('.itemName').html();
		var quantity = currentItem.find('.duplicates').html();
		var price = currentItem.find('.itemPrice').html();
		var size = currentItem.find('.size').html();
		itemObj.name = name;
		itemObj.type = type;
		itemObj.quantity = quantity;
		itemObj.size = size;
		itemObj.price = price;
		items.push(itemObj);
	}

	var form = $('.userInfo');
	cart.name = form.find('input[name=name]').val();
	cart.address1 = form.find('input[name=add1]').val();
	cart.address2 = form.find('input[name=add2]').val();
	cart.zip = form.find('input[name=zipcode]').val();
	cart.phone = form.find('input[name=phone]').val();
	cart.nextUrl = '../index.php';
	cart.items = items;

	$('.cart').attr('value', JSON.stringify(cart));
}