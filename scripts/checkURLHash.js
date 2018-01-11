document.addEventListener("jqLoaded", function(){
    $(document).ready(function(){
        if(typeof window.location.hash != "undefined"){
            var _target = window.location.hash;
            $(_target).collapse('show');
        }
    });
});