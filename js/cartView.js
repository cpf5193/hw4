var CartView = {
	render: function(){
		var i, item, clonedTemplate;
		var cart = this.model;
		var items = cart.getItems();
		var that = this;
		var clonedTemplate, size, name, qty, price, delBtn;
		this.container.empty();
		var that
		for(i=0; i<items.length; ++i){
			item = items[i];
			clonedTemplate = this.template.clone();
			clonedTemplate.removeClass('itemTemplate');
			clonedTemplate.addClass('item');
			size = clonedTemplate.find('.size');
			name = clonedTemplate.find('.itemName');
			qty = clonedTemplate.find('.duplicates');
			price = clonedTemplate.find('.itemPrice');
			delBtn = clonedTemplate.find('.delete');
			
			if(item.size){
				size.html(item.size);
			} else {
				size.remove();
			}

			name.html(item.name);
			qty.html(item.quantity);
			price.html(item.totalPrice.toFixed(2));
			
			(function(item){
			clonedTemplate.find('.delete').click(function(){
				that.trigger('removeFromCart', item);
			});
			})(items[i]);

			this.container.append(clonedTemplate);
		} //for each item
		var subtotal, tax, total;
		subtotal = $('.subtotal');
		tax = $('.tax');
		total = $('.total');
		subtotal.html(cart.cart.subtotal.toFixed(2));
		tax.html(cart.cart.tax.toFixed(2));
		total.html(cart.cart.total.toFixed(2));
	}
}

function createCartView(config){
	var view = Object.create(CartView);
	apply(config, view);
	if(view.model)
		view.render();

	view.model.on('change', function(){
		view.render();
	});

	return makeEventSource(view);
}