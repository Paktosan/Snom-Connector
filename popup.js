jQuery(document).ready(function() {

	jQuery( ".dial" ).click(function() {
		chrome.storage.local.get("sc_options", function(fetchedData) {

		    var ip = fetchedData.sc_options.ip;
		    var user = fetchedData.sc_options.user;
		    var password = fetchedData.sc_options.password;

			var number = jQuery('.number').val();
			var url = 'https://'+user+':'+password+'@'+ip+'/command.htm?number='+number+'';
			jQuery.get(url);

 		});
		
	});

	jQuery( ".cancel" ).click(function() {

		chrome.storage.local.get("sc_options", function(fetchedData) {

		    var ip = fetchedData.sc_options.ip;
		    var user = fetchedData.sc_options.user;
		    var password = fetchedData.sc_options.password;

			var url = 'https://'+user+':'+password+'@'+ip+'/command.htm?RELEASE_ALL_CALLS';
			jQuery.get(url);

 		 });


	});

});


  
