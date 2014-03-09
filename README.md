# Introducing ezShare.js
A very simple way to add social sharing to a page without having to code individual buttons for each social site. By adding some simple markup to the page with some special `data-attributes` we can let ezShare.js handle the rest. This type of share is useful for when a user fills out a form, makes a purchse or performs an action and is then taken to a landing page. From there you want them to share what they just did. Currently support Facebook, Twitter, and Google+

ezShare.js leverages FontAwesome for icon fonts and Mustache.js for templating.

You can reference external html template or use an inline html template.

It is helpful that the url you are wanting to share has proper og: data setup but not required.

Visit the [demo page](http://codepen.io/joe-watkins/full/sKmEb)

## How Do I Use It?
Add this html to your page and edit the data attributes accordingly. 

```html
<div class="ezShare"
  data-title="Smashing Magazine"
  data-url="http://smashingmagazine.com"
  data-tweet="A great site for designers &amp; developers"
  data-hash-tags="frontend,design,cool">
</div>
```

### Setup
Requires jQuery 1.11+, Mustache.js, and ezShare.js - initialize the plugin by binding it to an element. Matchup the class with the html you added to the class eg. ezShare - Where you put that element is where the share will appear.

```html
 	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'></script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js'></script>
	<script src="js/ezShare.js"></script>
 	<script>
  $(document).ready(function(){
    $('.ezShare').ezShare();
  });
 </script>
```

### All Options
Below you can see all the options available. 

```html
	<script>
	  $(document).ready(function(){
    	$('.ezShare').ezShare({
    		template : '#ezShareTemplate',
	      faceBookUrl : 'http://www.facebook.com/sharer.php',
			  twitterUrl : 'https://twitter.com/share',
			  googlePlusUrl : 'https://plus.google.com/share',
			  externalTemplate : true,
			  externalTemplateFile : 'js/ezShareTemplate.html'
    	});
  	});
	</script>
```


### Why HTML Templates? Why FontAwesome
I like both of these tools :) You can tweak the CSS and HTML template to your liking and you don't have to use these services. Using HTML templates makes it very easy to tweak.


## Changelog
* v1.0.0 - 1kb
	* Initial release

## Credits
@_josephwatkins