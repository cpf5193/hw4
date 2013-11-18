var Items = {
	getItems: function(){
		return this.items;
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

	removeItem: function(item){
		var itemIndex = this.items.indexOf(item);
		if(itemIndex>-1){
			this.items = this.items.splice(itemIndex, 1);
		}
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

	toJSON: function(){
		return JSON.stringify(items);
	}

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