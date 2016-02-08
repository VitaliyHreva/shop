function filter(categoryClass) {
	var allContainers = $('.categories');
	allContainers.addClass("hide-img");
	var containersForShow = $(categoryClass);
	containersForShow.removeClass("hide-img"); 
}