alert("here");
 
$(document).ready(function() {
    
    //Hamburger Open&Close
    $(".top_icon_open_sidebar").click(function () {
        $(this).toggleClass("top_icon_close_sidebar");
    });
});