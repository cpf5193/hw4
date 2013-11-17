var Items = {
	getItems: function(){
		return this.items;
	},

	addItem: function(item){
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
		updateCart(this.cart.total + item.totalPrice);
	},

	removeItem: function(item){
		var itemIndex = this.items.indexOf(item);
		if(itemIndex>-1){
			this.items = this.items.splice(itemIndex, 1);
		}
		updateCart(this.cart.total - item.totalPrice);
	},

	updateCart: function(subtotal){
		this.cart.subtotal = subtotal;
		this.cart.tax = subtotal * 0.095;
		this.cart.total = subtotal * 1.095;
		this.trigger('change');
	},

	removeAll: function(){
		this.items = [];
		updateCart(0);
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