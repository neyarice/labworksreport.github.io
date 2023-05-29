$(document).ready(function() {
    $('.image-gallery').magnificPopup({
      delegate: 'a', // дочерние ссылки, в которых будет открыт попап
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  });


  var videos = ['dQw4w9WgXcQ', 'dQw4w9WgXcQ', 'dQw4w9WgXcQ']; // Замените VIDEO_ID1, VIDEO_ID2 и VIDEO_ID3 на ID видео YouTube, которые вы хотите отобразить
  var currentVideo = 0;
  
  function updateVideo() {
      $('#video').attr('src', 'https://www.youtube.com/embed/' + videos[currentVideo]);
  }
  
  $(document).ready(function() {
      updateVideo();
  
      $('#prev').click(function() {
          if(currentVideo > 0) {
              currentVideo--;
              updateVideo();
          }
      });
  
      $('#next').click(function() {
          if(currentVideo < videos.length - 1) {
              currentVideo++;
              updateVideo();
          }
      });
  });
  

  $(document).ready(function() {
    var twitterLink = $('<a>').attr('href', 'https://twitter.com/').html('<i class="fab fa-twitter"></i>');
    var instagramLink = $('<a>').attr('href', 'https://instagram.com/').html('<i class="fab fa-instagram"></i>');
    var pinterestLink = $('<a>').attr('href', 'https://pinterest.com/').html('<i class="fab fa-pinterest"></i>');
    $('#social-links').append(twitterLink, ' ', instagramLink, ' ', pinterestLink);
});