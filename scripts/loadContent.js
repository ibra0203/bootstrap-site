$(document).ready(function(){
    $("h1").text("Loading-_works!");
    /*$.get("sub-content/loaded-header.html",function(_c){
        $(body).prepend(_c);
    });*/
    $("#test2").load("loaded-header.html #test1");
    $(".test").load("../scripts/loaded-header.html #header1");

});
