function calculateDay(){
    var date = document.getElementById("birthdate").value;
    var cc = date.slice(0,2);
    var yy = date.slice(2,4);
    var mm = date.slice(5,7);
    var dd = date.slice(8);
    alert(cc + "-" + yy + "-" + mm + "-" +  dd);
   
    var day_of_week  = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

    alert(day_of_week);

}