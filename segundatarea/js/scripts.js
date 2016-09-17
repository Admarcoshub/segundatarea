$(document).ready(function() {

	var currentPage = 0;
	$("#content li").click(function(){
		$("#content li").removeClass("active");
		$(this).addClass("active");	

		console.log(currentPage);

		currentPage++;
		if (currentPage > 1)
		{
			currentPage = 0;
		}

		$('#content [data-id]').removeClass("active");
		console.log(currentPage);
		$('#content [data-id =' + currentPage + ']').addClass("active");



});