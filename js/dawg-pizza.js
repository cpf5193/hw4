$(function(){
	//This function figures out which page is currently being displayed and
	//distributes the active class to the appropriate nav section
	var pageType = window.location.toString().split(".")[2].split('/')[4];
	switch(pageType){
	case "menu":
	  $(".navbar-nav>li>a.menu")[0].parentNode.classList.add("active");
	  populateMenu();
	  break;
	case "about":
	   $(".navbar-nav>li>a.about")[0].parentNode.classList.add("active");
	  break;
	case "jobs":
	   $('.carousel').carousel();
	   $(".navbar-nav>li>a.jobs")[0].parentNode.classList.add("active");
	  break;
	default:
	   $(".navbar-nav>li>a.home")[0].parentNode.classList.add("active");
	  break;
	}
});

function populateMenu(){
	var menuObj = com.dawgpizza.menu;
	var pizzas = menuObj.pizzas, drinks = menuObj.drinks,
	desserts = menuObj.desserts;
	buildMenuCategory(pizzas, $('.pizzas'));
	buildMenuCategory(drinks, $('.drinks'));
	buildMenuCategory(desserts, $('.desserts'));
}

function buildMenuCategory(menuType, parent){
	console.log(menuType);
	var template = parent.find('.menu-item');
	for(var i=0; i<menuType.length; ++i){
		var temp = template.clone(), menuItem = menuType[i];
		var name = menuItem.name,
			descr = menuItem.description,
			price = menuItem.prices;
		console.log(descr);
		if(name){temp.find('.name').html(name);}
		if(descr){temp.find('.descr').html(descr);}
		if(price){temp.find('.price').html(makePriceString(price));}
			else if(menuItem.price){
				temp.find('.price').html('$' + menuItem.price);
			}
		temp.removeClass('disable');
		parent.append(temp);
	}
}

function makePriceString(array){
	var string = "$";
	for(var i=0; i<array.length-1; ++i){
		string += (array[i] + "/$");
	}
	if(i>1){
		string += array[i];
	}
	return string;
}