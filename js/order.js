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
			parent.append(temp);
		})(i);
	}
	checkOkayToOrder();
	$('.btn-danger').click(function(){
		$('.itemList').html("");
		updateTotals(parseFloat($('.subtotal').html()*-1));
	});
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

function addToCart(totalPrice, template){
	var item = $(document.createElement('li')); //create item for cart
	item.attr('class', 'item');

	var itemName = $(document.createElement('p')); //create container for item name
	itemName.html(template.find('h3').html());

	var duplicates = $(document.createElement('span')); //create container for num items
	duplicates.attr('class', 'duplicates');
	duplicates.html('x' + template.find('.quantity').val());

	var price = $(document.createElement('p')); //create container for price
	price.html('$' + (parseFloat(template.find('.price').html()).toFixed(2)));
	
	//create delete button and add click handler
	var delBtn = $(document.createElement('button'));
	delBtn.attr('class', 'delete');
	delBtn.html('x');
	delBtn.click(function(){
		$(this).parent().remove();
		updateTotals(-1*totalPrice);//update cart totals
	});
	
	//Append elements to the item dom element
	item.append(itemName);
	item.append(duplicates);
	item.append(price);
	item.append(delBtn);

	//Add item to page
	$('.itemList').append(item);

	//Update cart totals
	updateTotals(totalPrice);
}

function addHandlers(prices, price, template){
	//Add Handlers
	template.find('.quantity').change(function(){
		template.find('.price').html(evalPrice(prices, price, template));
	});
	template.find('.size').change(function(){
		template.find('.price').html(evalPrice(prices, price, template));
	})
	template.find('.btn').click(function(){
		addToCart(evalPrice(prices, price, template), template);
	});
}

function checkOkayToOrder(){
	var orderBtn = $('.cartfooter > .buttons > .btn-primary');
	var disabled = orderBtn.attr('disabled');
	console.log(disabled);
	console.log()
	var orderOkay = (parseFloat($('.total').html())>=20);
	if(disabled && orderOkay){
		orderBtn.removeAttr('disabled');
	}
	else if(!disabled && !orderOkay){
		orderBtn.attr('disabled', 'disabled');
	}
}

function checkTime(){
	var currentTime = new Date();
	var day = currentTime.getDay();
	var hour = currentTime.getHours();
	return day>=1 && day<=6 && hour>=12 && hour <=22;
}