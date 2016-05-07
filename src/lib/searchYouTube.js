var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'json',
    data: {
      key: YOUTUBE_API_KEY,
      q: options.query,
      maxResults: options.max
    },
    success: function (data) {
      console.log(data);
      //callback();
    }

  });
};

window.searchYouTube = searchYouTube;


//find the search bar DOM element and listen for form submission
//get the text that form submission
//add that to the query