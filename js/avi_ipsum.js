$(document).ready(function(){

  var keywordInput = $('#keyword'),
      searchButton = $('#search'),
      displayFeed = $('#feed'),
      keyword = '',
      content = '';

  keywordInput.focus(function(){ //focus is when you click inside of a form. blur is clicking outside
    displayFeed.empty(); //clear the tweets
    keywordInput.val('');
  }); 
  
  //search and display the tweets
  searchButton.click(function(){

    keyword = parseInt(keywordInput.val());

    //request our query from twitter

    $.getJSON('http://api.tumblr.com/v2/blog/shitavisays.tumblr.com/posts/quote?api_key=XXXXX&callback=?', function(data){

        //loop over data and retrieve stuff we want from each result

        for (var i = 1; i <= keyword; i++) {
          $.each(data.response.posts, function(i, value){

            content = value['text']+' ';

            displayFeed.append(content);
        
          }); //end each loop

          displayFeed.append('<br><br>');
        }

    }); //callback sets json request to ask twitter for padded json

  }); //end search click

});