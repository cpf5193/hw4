var ListView = {
	render: function(){
		var items = this.model.getItems(),
			item,
			modelConfig = {},
		 	viewConfig = {},
		 	type, 
		 	listItem, 
		 	container = this.container;

		for(var i=0; i<items.length; ++i){
			item = items[i];
			type = item.type;
			modelConfig.type = type;
			modelConfig.name = item.name;
			modelConfig.quantity = 1;
			modelConfig.price = item.price;
			modelConfig.prices = item.prices;
			modelConfig.index = i+1;
			if(type=='pizza'){
				modelConfig.size = 'S';
				modelConfig.totalPrice = item.prices[0];
			} else{
				modelConfig.totalPrice = item.price;
			}

			//Create config object for each list item to be inserted
			viewConfig.model = createListItemModel(modelConfig);
			viewConfig.container = container;
			viewConfig.template = container.find('.collapseGroup.disable');
			listItem = createListItemView(viewConfig);
			listItem.render(true);
		}
	}
};

//To use a ListView, a model and container should be provided in the config object
function createListView(config){
	var view = Object.create(ListView);
	apply(config, view);
	if(view.model)
		view.render();
	return view;
}