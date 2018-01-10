var scr;
var jqScr;
var i;
for(i=0; i<3;i++)
{
   scr = document.createElement("script");
    var src, intg, cross;
    cross ="anonymous";
   if(i==0)
   {
     src ="https://code.jquery.com/jquery-3.2.1.slim.min.js";
     intg = "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN";
     jqScr = scr;
   }
   else if(i==1)
   {
     src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";
     intg ="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
   }
   else
   {
     src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js";
     intg="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4";
   }
   scr.setAttribute("src",src);
   scr.setAttribute("integrity", intg);
   scr.setAttribute("crossorigin", cross);
   document.body.appendChild(scr);
}

jqScr.onload=function(){
    var s = document.createElement("script");
    s.setAttribute("src", "scripts/loadContent.js");
    document.body.appendChild(s);
}
/*
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
    */