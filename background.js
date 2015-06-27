function clean_number(number) {
	number = number.replace(/[^0-9+]/g,'');
	return number;
}

function dial(number) {
	number = clean_number(number);
	chrome.storage.local.get("sc_options", function(fetchedData) {

		var ip = fetchedData.sc_options.ip;
		var user = fetchedData.sc_options.user;
		var password = fetchedData.sc_options.password;
		var url = 'https://'+user+':'+password+'@'+ip+'/command.htm?number='+number+'';

		jQuery.get(url);

	});
}

jQuery("body").on('click', 'a[href^="snom"]', function(e) {
	//e.preventDefault();
 	var number = jQuery(this).attr("href");
	number = number.replace('tel:', 'snom:');

	dial(number);

})

jQuery(document).ready(function() {
	jQuery( 'a[href^="tel"]' ).each(function( index ) {
		var link = jQuery(this).attr('href');
  	link = link.replace('tel:','snom:');
  	jQuery(this).addClass('dial_snom');
  	jQuery(this).attr('href',link);
	});
});
