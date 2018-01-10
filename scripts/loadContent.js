$(document).ready(function(){
    $("h1").text("Loading-_works!");
    /*$.get("sub-content/loaded-header.html",function(_c){
        $(body).prepend(_c);
    });*/
    $(".test").load("./scripts/loaded-header.html #header1");

});
