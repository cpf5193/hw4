var Items = {
	getItems: function(){
		return this.items;
	},

	getItemsSizeStrings: function(){
		var clone = jQuery.extend(true, {}, this.items);
		var items = [];
		for(var i=0; i<this.items.length; ++i){
			items.push(clone[i]);
		}
		var item;
		for(var j=0; j<items.length; ++j){
			item = items[j];
			var shortString = item.size;
			switch(shortString){
				case 'S':
					item.size = "small";
					break;
				case 'M':
					item.size = 'medium';
					break;
				case 'L':
					item.size = 'large';
					break;
				default:
					item.size = undefined;
			}
		}
		return items;
	},

	setItems: function(items){
		this.items = items;
		this.updateCart();
	},

	addItem: function(itemToClone){
		var item = cloneItem(itemToClone);
		var foundDuplicate = false;
		var current, isPizza;
		for(var i=0; i<this.items.length; ++i){
			current = this.items[i];
			sameSize = (item.size && current.size && item.size==current.size)||
						(!item.size && !current.size);
			sameName = (item.name == current.name);
			if(sameSize && sameName){
				current.quantity += item.quantity;
				current.totalPrice += item.totalPrice;
				foundDuplicate = true;
			}
		}
		if(!foundDuplicate){ //new item; add to list
			this.items.push(item);
		}
		this.updateCart();
	},

	removeItem: function(toRemove){
		var item;
		var newItemList = [];
		for(var i=0; i<this.items.length; ++i){
			item = this.items[i];
			if(item != toRemove){
				newItemList.push(item);
			}
		}
		this.items = newItemList;
		this.updateCart();
	},

	updateCart: function(){
		var subtotal = 0;
		for(var i=0; i<this.items.length; ++i){
			subtotal += this.items[i].totalPrice;
		}
		this.cart.subtotal = subtotal;
		this.cart.tax = subtotal * 0.095;
		this.cart.total = subtotal * 1.095;
		this.trigger('change');
	},

	removeAll: function(){
		this.items = [];
		this.updateCart(0);
		this.trigger('change');
	},
}; //All items available to add to cart

function createCartModel(){
	var itemList = Object.create(Items);
	var cart = {
		subtotal: 0,
		tax: 0,
		total: 0
	};
	itemList.cart = itemList.cart || cart;
	itemList.items = itemList.items || [];
	return makeEventSource(itemList);
}

function cloneItem(item){
	var clone = {
		index: item.index,
		name: item.name,
		price: item.price,
		prices: item.prices,
		quantity: item.quantity,
		size: item.size,
		totalPrice: item.totalPrice,
		type: item.type
	};
	return clone;
}