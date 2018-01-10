//load header/footer from another html file in an iframe
var fr = document.createElement("iframe");
fr.setAttribute("src", "sub-content/loaded-content.html");
fr.setAttribute("id", "tempFrame");
$("body").prepend(fr);
$("#tempFrame").hide();

$(window).on('load', function(){ 
    //clone content from the iframe, append them in the body then remove the iframe
	var _head = $("#tempFrame").contents().find("#header-content").clone();
    $("#tempFrame").remove();
    $("body").prepend(_head);
});