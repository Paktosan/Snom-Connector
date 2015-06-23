jQuery('a[href^="tel"]').on('click',function (e) {
    e.preventDefault();
 	
 	var number = jQuery(this).attr("href");
	number = number.replace('tel:', ''); 
    
    chrome.storage.local.get("sc_options", function(fetchedData) {
    	
		var ip = fetchedData.sc_options.ip;
		var user = fetchedData.sc_options.user;
		var password = fetchedData.sc_options.password;

 		
   		var url = 'https://'+user+':'+password+'@'+ip+'/command.htm?number='+number+'';
   		jQuery.get(url);

	});
})