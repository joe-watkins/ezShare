/*! todo - build in external template support 

$.get('greetings.htm', function(templates) {
    var template = $(templates).filter('#tpl-greeting').html();
    $('body').append(Mustache.render(template, templateData));
});

http://www.jonnyreeves.co.uk/2012/using-external-templates-with-mustache-js-and-jquery/
https://github.com/jonnyreeves/jquery-Mustache
http://ejohn.org/blog/javascript-micro-templating/



* ezShare.js
* Author: Joe Watkins - joe-watkins.io
* Licensed under the MIT license
*
*/
(function($){
 
    $.fn.ezShare = function(options) {

        var defaults = {
	        wrapper : this,
	        template : '#ezShareTemplate',
	        faceBookUrl : 'http://www.facebook.com/sharer.php',
			    twitterUrl : 'https://twitter.com/share',
			    googlePlusUrl : 'https://plus.google.com/share',
			    externalTemplate : false,
			    externalTemplateFile : 'js/ezShareTemplate.html'
        }
            
        var options =  $.extend(defaults, options);
        var o = options;

        var $ezShare = $(o.wrapper),
			      $template = $(o.template).html(),
			      faceBookUrl = o.faceBookUrl,
			      twitterUrl = o.twitterUrl,
			      googlePlusUrl = o.googlePlusUrl,
			      shareData = [];

			      $ezShare.each(function(index,item){
			        shareData.push({
			          faceBook : 'window.open ("'+faceBookUrl+'?u='+$(this).data('url')+'&t='+$(this).data('title')+'","tdFBShare","status=0,resizable=1,height=400,width=600")',
			          twitter  : 'window.open ("'+twitterUrl+'?url='+$(this).data('url')+'&text='+escape($(this).data('tweet'))+'&hashtags='+$(this).data('hash-tags')+' ,placeholder","tdTWShare","status=0,resizable=1,height=400,width=600")',
			          googlePlus : 'window.open ("'+googlePlusUrl+'?url='+$(this).data('url')+'","tdTWShare","status=0,resizable=1,height=400,width=600")'
			        }); // push
			      }); // each

			      if(o.externalTemplate == true){
			      	$.get(o.externalTemplateFile, function(templates) {
							    var template = $(templates).filter(o.template).html();
							    var html = Mustache.to_html(template, { shareData : shareData });
			      			$ezShare.html(html);
							});
			      }else{
			      	var html = Mustache.to_html($template, { shareData : shareData });
			      	$ezShare.html(html);
			      }
			 
         
     
    }; // $.fn

}(jQuery));