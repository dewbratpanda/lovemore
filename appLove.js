function loveCalc(){
var yourName=document.getElementById("Name").value;
var partnerName=document.getElementById("partner").value;
var loveCalculation=Math.floor(Math.random()*(1,100)+1);
if(loveCalculation>=60){
    alert("Hii "+yourName+" you and your Partner "+partnerName+" have a Great Love and cute pair you should Love more , your love Calculation is "+loveCalculation);

}
else{
    alert("Hii "+yourName+" you and your Partner "+partnerName+" have no future this is not working, find anyone else and come back to Check, your love Calculation is "+loveCalculation);
};
};