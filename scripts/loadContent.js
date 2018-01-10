//load header/footer from another html file in a temporary iframe 
var fr = document.createElement("iframe");
fr.setAttribute("src", "sub-content/loaded-content.html");
fr.setAttribute("id", "tempFrame");
document.body.appendChild(fr);

var hasFrLoaded=false;
var hasJQLoaded=false;

fr.onload =function(){
    hasFrLoaded=true;
    if(hasJQLoaded) loadedJQ();
};

document.addEventListener("jqLoaded", loadedJQ);
function loadedJQ(){ 
    hasJQLoaded=true;
    if(hasFrLoaded)
    {
        var _head = $("#tempFrame").contents().find("#header-content").clone();
        var _foot = $("#tempFrame").contents().find("#footer-content").clone();
        $("#tempFrame").remove();
        $("body").prepend(_head);
        $("body").find("script").each(function(i,src){
           if(i==0){

               _foot.insertBefore($(this));    
               }
        });
        document.body.style.opacity ="1";
    }
};