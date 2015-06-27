/* HIGHRISE CRM */

jQuery(document).ready(function() {
  jQuery( ".phone_number .value" ).each(function( index ) {
    var raw_number = jQuery(this).html();
  	var number = clean_number(raw_number);
		var link = '<a class="snom_dial snom_highrise" href="snom:'+number+'">'+raw_number+'</a>'
		jQuery(this).html(link);
	});
});
