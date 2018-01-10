$(document).ready(function(){
    $("h1").text("Loading-_works!");
    /*$.get("sub-content/loaded-header.html",function(_c){
        $(body).prepend(_c);
    });*/
    $(".test").load("loaded-header.html", function( response, status, xhr ) {
      if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        alert( msg + xhr.status + " " + xhr.statusText );
      }
      else { alert("Done")}
    });

});
