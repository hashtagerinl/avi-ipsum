$(document).ready(function(){

	var keywordInput = $('#keyword'),
			searchButton = $('#search'),
			displayFeed = $('#feed'),
			keyword = '',
			content = '';

			keywordInput.focus(function() {
				displayFeed.empty();
				keywordInput.val('');

			});

			searchButton.click(function() {

				keyword = parseInt(keywordInput.val());

				$.getJSON('http://api.tumblr.com/v2/blog/shitavisays.tumblr.com/posts/text?api_key=X4Pd7vPQu1PCKvujMH9fU9QweEqTrXjDfC3uiCQLLydqBH9WkH&limit='+ keyword, function(data) {

						$.each(data.response.posts, function(i, value){

						console.log(value);

						content = "<br>" + value.title + ' ' + value.tags

						displayFeed.append(content);

					}); // ends $.each call

				}); // ends $.getJSON call

			}); // ends searchButton.click fuction

});

/*

Tumblr API url: http://www.tumblr.com/docs/en/api/v2#posts

Example AJAX request URL for peacecorps:

http://api.tumblr.com/v2/blog/peacecorps.tumblr.com/posts/text?notes_info=true

Example constructing url: api.tumblr.com/v2/blog/{base-hostname}/posts[/type]?api_key={key}&[optional-params=]

tumblr api key:  X4Pd7vPQu1PCKvujMH9fU9QweEqTrXjDfC3uiCQLLydqBH9WkH

api.tumblr.com/v2/blog/shitavisays.tumblr.com/posts/text?api_key=X4Pd7vPQu1PCKvujMH9fU9QweEqTrXjDfC3uiCQLLydqBH9WkH

*/
