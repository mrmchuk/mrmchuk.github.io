var Pixel = $.urlParam('fb');
 if(Pixel != null){
 $('body').prepend('<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' + Pixel + '&ev=Purchase&noscript=1" />');
 }

HTMLElement.prototype.prependHtml = function (element) {
    const div = document.createElement('div');
    div.innerHTML = element;
    this.insertBefore(div, this.firstChild);
};

HTMLElement.prototype.appendHtml = function (element) {
    const div = document.createElement('div');
    div.innerHTML = element;
    while (div.children.length > 0) {
        this.appendChild(div.children[0]);
    }
};

document.body.prependHtml(`<a href="#">Hello World</a>`);
document.body.appendHtml(`<a href="#">Hello World</a>`);
