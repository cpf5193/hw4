var newItemView = {};

function createNewItemView(config){
	var view = Object.create(newItemView);
	apply(config, view);

	$('.add-to-cart').click(function(){
		var addForm = this.parent();
		var type = addForm.attr('type');
		var size = addForm.find('.size')
		if(size){
			size = size.html();
		} else{
			size = undefined;
		}
		view.model.addItem({
			name: addForm.find('h3').html(),
			type: addForm.attr('type'), 
			size: size,
			quantity: parseInt(addForm.find('.quantity').html()),
			price: parseFloat(addForm.find('.price').html())
		});
	});
	return view;
}