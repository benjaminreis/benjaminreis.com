function showViaKeypress(element_id)
{
	$(".container").css("display","none");
	$(element_id).slideDown("slow");
}
//Now, our second function will take an array of links and assign them on click target functions. In other words the function will get our navigation links, retrieve the “href” attribute and display the appropiate DIV upon clicking it. So, here is what the second function looks like:
function showViaLink(array)
{
	array.each(function(i)
	{	
		$(this).click(function()
		{
			var target = $(this).attr("href");
			$(".container").css("display","none");
			$(target).slideDown("fast");  // slow
		});
	}
}