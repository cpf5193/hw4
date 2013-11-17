var List = {
	getItems: function(){
		return this.items;
	},
	setItems: function(items){
		this.items = items;
	},
	getItem: function(index){
		return this.items[index];
	}
};

/*A list and container should be provided to the config object*/
function createListModel(config){
	var itemList = Object.create(List);
	apply(config, itemList);
	itemList.items = itemList.items || [];
	return makeEventSource(itemList);
}