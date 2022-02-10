function myConvert(){
    var tm = document.getElementById("input1").value;
   if(document.getElementById('h2m').checked == true) {   
    document.getElementById("result1").innerHTML =  tm +" hr"+" ="+ tm*60+" minutes" ;
      
} else {  
    document.getElementById("result1").innerHTML =  tm+" hr" +" ="+ tm*3600+" seconds" ;
}  
}