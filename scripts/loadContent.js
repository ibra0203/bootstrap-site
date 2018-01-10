//load header/footer from another html file in a temporary iframe 
var fr = document.createElement("iframe");
fr.setAttribute("src", "sub-content/loaded-content.html");
fr.setAttribute("id", "tempFrame");
$("body").hide();
$("body").prepend(fr);
$("#tempFrame").hide();

$("#tempFrame").on('load', function(){ 
    //clone content from the iframe, append them in the body then remove the iframe
	var _head = $("#tempFrame").contents().find("#header-content").clone();
    var _foot = $("#tempFrame").contents().find("#footer-content").clone();
    $("#tempFrame").remove();
    $("body").prepend(_head);
    $("body").find("script").each(function(i,src){
       if(i==0){
           
           _foot.insertBefore($(this));    
           }
    });
    $("body").show();

});