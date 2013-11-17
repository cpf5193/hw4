var List = {
	getItems: function(){
		return this.items;
	}
};

/*A list and container should be provided to the config object*/
function createListModel(config){
	var itemList = Object.create(List);
	apply(config, itemList);
	itemList.items = itemList.items || [];
	return makeEventSource(itemList);
}