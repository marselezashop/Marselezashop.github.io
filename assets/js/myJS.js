function select_language(language) {
    $("[lang]").each(function () {
    	if ( $( this ).is( "#skip" ))
    	{
    		return;
			//$(this).attr("lang", language);
    	} 
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}