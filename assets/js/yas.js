// JavaScript program to illustrate  
// calculation of no. of days between two date  
  
// To set two dates to two variables 
var date1 = new Date("02/02/1956"); 
var date2 = new Date(); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 365.25 * 24); 
var myTrunc = Math.trunc( Difference_In_Days ); document.getElementById("yas").innerHTML = "Yaşı: "+ myTrunc;
//To display the final no. of days (result)
