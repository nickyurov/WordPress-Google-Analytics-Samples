/*
* Comment Form Tracking
*/
jQuery(document).ready(function(){
  if(jQuery('body').hasClass('single')){
    jQuery('#commentform').on('submit', function (e){
        e.preventDefault();
        ga('send', 'event', 'Comment', 'Form Submit', document.location.href);
        setTimeout(function(){
            HTMLFormElement.prototype.submit.call(jQuery('#commentform')[0]);
        }, 1000);
    });
  }
});

/*
* WordPress Search Tracking
*/
jQuery(document).ready(function(){
    if(jQuery('body').hasClass('search-results')){
        var term = getURLParameter('s');
        ga('send', 'event', 'Search', 'Search Term', term);
    }
});

function getURLParameter(name){
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null){
        return "";
    } else {
        var param = results[1];
        param = param.replace(/%20/g, ' ');
        return jQuery.trim(param);
    }
}

/*
* Contact Form 7 Tracking
*/
jQuery(document).ready(function(){
    if(jQuery('body').hasClass('page-template-contact-php')){
        jQuery('.wpcf7-form').on('submit', function(){
            ga('send', 'event', 'Contact', 'Form Submit', document.location.href);
        });
    }
});

/*
* Feedburner Tracking
*/
jQuery(document).ready(function(){
    jQuery('.mail-subscribe').on('submit', function(){		
        var user = jQuery('input[type="text"]', this).val();
        ga('send', 'event', 'Subscribe', 'Form Submit', user);
    });
});

/*
* Call to Action Tracking
*/
jQuery(document).ready(function(){
    jQuery('div.entry-content a.button-action').on('click', function(event){
        event.preventDefault();
        var url = jQuery(this).attr('href');
        ga('send', 'event', 'Click', 'Call To Action', document.location.href);
        window.location.replace(url);
    });
});
