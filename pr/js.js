var Pixel = $.urlParam('fb');
 if(Pixel != null){
 $('body').prepend('<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' + Pixel + '&ev=Purchase&noscript=1" />');
 }