$(document).ready(function() {
   
    var data = $('.url_box').serialize();
    
    $.ajax({
    type: "POST",
    url:"/models/download_feed.inc.php",
    data: data,
    dataType: 'json',
    success:function(data) { //ok
      console.log(data); 
    },
    error: function (xhr, ajaxOptions, thrownError) { //error
        alert(xhr.status);
        alert(thrownError);
      }
    });
  });