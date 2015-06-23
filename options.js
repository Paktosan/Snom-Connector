jQuery(document).ready(function() {

  chrome.storage.local.get("sc_options", function(fetchedData) {

    var ip = fetchedData.sc_options.ip;
    var user = fetchedData.sc_options.user;
    var password = fetchedData.sc_options.password;

    jQuery('#ip').val(ip);
    jQuery('#user').val(user);
    jQuery('#password').val(password);

  });



});

jQuery('.save').click(function() {

  var ip = jQuery('#ip').val();
  var user = jQuery('#user').val();
  var password = jQuery('#password').val();
     
  if (!ip) {
    message('Error: No value specified');
    return;
  }

  var sc_options = {
    ip: ip,
    user: user,
    password: password
  };

  chrome.storage.local.set({"sc_options": sc_options}, function() {
    alert('Options saved');
  });
  
});