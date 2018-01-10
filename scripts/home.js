document.addEventListener("jqLoaded", function(){
    
    $(document).ready(function(){
        var collapsed=true;
        
        $("#learn-more-btn").click(function(){
          if(collapsed)   
          {
              collapsed =false;
              $('#nasacontent').collapse('show');
              alert("hi");
                
          }
        });
    });
});