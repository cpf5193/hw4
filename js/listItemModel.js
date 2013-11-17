/*A ListItem has a size, name, total price, price/prices, and quantity*/

var ListItem = {
	updateSize: function(newSize){
		this.size = newSize;
		this.updateTotalPrice();
		this.trigger('change');
	},
	updateQty: function(newQty){
		this.quantity = newQty;
		this.updateTotalPrice();
		this.trigger('change');
	},
	updateTotalPrice: function(){
		var itemPrice;
		if(this.price){
			this.totalPrice = this.quantity * this.price;
		} else if(this.prices){
			var price;
			if(this.size == "S"){
				price = this.prices[0];
			} else if(this.size == "M"){
				price = this.prices[1];
			} else{
				price = this.prices[2];
			}
			this.totalPrice = this.quantity * price;
		}
	}
	//size
	//name
	//totalPrice
	//price
	//prices
	//quantity
};

//To use a list item, a price, name, size, and quantity must be provided in the config object
function createListItemModel(config){
	var listItemModel = Object.create(ListItem);
	apply(config, listItemModel);
	listItemModel.updateTotalPrice();
	return makeEventSource(listItemModel);
}