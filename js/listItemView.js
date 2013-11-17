
/*A ListItemView needs a template, container, and model to render*/
var ListItemView = {
	render: function(firstRender){
		var clonedTemplate = this.template.clone();
		clonedTemplate.removeClass('disable'); //Unhide
		var container = this.container;
		var name = clonedTemplate.find('h3');
		var qty = clonedTemplate.find('.quantity');
		var size = clonedTemplate.find('.size');
		var price = clonedTemplate.find('.price');
		var index = this.model.index;
		var that = this;
		name.html(this.model.name);
		qty.val(this.model.quantity);
		qty.change(function(){
			that.model.updateQty(qty.val());
		});
		if(size){
			size.val(this.model.size);
			size.change(function(){
				that.model.updateSize(size.val());
			});
		}
		price.html(this.model.totalPrice);
		name.html(this.model.name);
		var incumbentChild = $(container.children()[index]);
		if(!firstRender){
			clonedTemplate.insertAfter($(container.children()[index]));
			$(container.children()[index]).remove();
		}
		else{
			container.append(clonedTemplate);
		}
		clonedTemplate.find('.add-to-cart').click(function(){
			that.trigger('addToCart', that.model);
		});
	}
};

//To use a ListItemView, a template, container, and model should be passed to the config object
function createListItemView(config){
	var view = Object.create(ListItemView);
	apply(config, view);
	view.model.on('change', function(){
		view.render(false);
	}, view);
	return makeEventSource(view);
}

/*
A list item view is used like so:

var listItemModel = createListItem({
	price: price
	prices: prices
	name: name
	size: size
	quantity: quantity
	totalPrice: quantity*(price||price[size])
});

var view = createListItemView({
	template: $('template'),
	container: $('container'),
	model: listItemModel
});

*/